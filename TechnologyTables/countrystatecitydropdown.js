function ajaxCall() {
  this.send = function (data, url, method, success, type) {
      type = "json";
      var successRes = function (data) {
          success(data);
      };

      var errorRes = function (xhr, ajaxOptions, thrownError) {
          console.log(
              thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText
          );
      };
      jQuery.ajax({
          url: url,
          type: method,
          data: data,
          success: successRes,
          error: errorRes,
          dataType: type,
          timeout: 60000,
      });
  };
}

function locationInfo() {
  var rootUrl = "https://geodata.phplift.net/api/index.php";
  var call = new ajaxCall();

  this.getCities = function (id, containerSelector) {
      jQuery(containerSelector + " .cities option:gt(0)").remove();
      //get additional fields

      var url = rootUrl + "?type=getCities&countryId=" + "&stateId=" + id;
      var method = "post";
      var data = {};
      jQuery(containerSelector + " .cities").find("option:eq(0)").html("Please wait..");
      call.send(data, url, method, function (data) {
          jQuery(containerSelector + " .cities").find("option:eq(0)").html("Select City");
          var listlen = Object.keys(data["result"]).length;

          if (listlen > 0) {
              jQuery.each(data["result"], function (key, val) {
                  var option = jQuery("<option />");
                  option.attr("value", val.name).text(val.name);
                  jQuery(containerSelector + " .cities").append(option);
              });
          }

          jQuery(containerSelector + " .cities").prop("disabled", false);
      });
  };

  this.getStates = function (id, containerSelector) {
      jQuery(containerSelector + " .states option:gt(0)").remove();
      jQuery(containerSelector + " .cities option:gt(0)").remove();
      //get additional fields
      var stateClasses = jQuery(containerSelector + " .states").attr("class");

      var url = rootUrl + "?type=getStates&countryId=" + id;
      var method = "post";
      var data = {};
      jQuery(containerSelector + " .states").find("option:eq(0)").html("Please wait..");
      call.send(data, url, method, function (data) {
          jQuery(containerSelector + " .states").find("option:eq(0)").html("Select State");

          jQuery.each(data["result"], function (key, val) {
              var option = jQuery("<option />");
              option.attr("value", val.name).text(val.name);
              option.attr("stateid", val.id);
              jQuery(containerSelector + " .states").append(option);
          });
          jQuery(containerSelector + " .states").prop("disabled", false);
      });
  };

  this.getCountries = function (containerSelector) {
      var url = rootUrl + "?type=getCountries";
      var method = "post";
      var data = {};
      jQuery(containerSelector + " .countries").find("option:eq(0)").html("Please wait..");
      call.send(data, url, method, function (data) {
          jQuery(containerSelector + " .countries").find("option:eq(0)").html("Select Country");

          jQuery.each(data["result"], function (key, val) {
              var option = jQuery("<option />");

              option.attr("value", val.name).text(val.name);
              option.attr("countryid", val.id);

              jQuery(containerSelector + " .countries").append(option);
          });
          // jQuery(containerSelector + " .countries").prop("disabled", false);
      });
  };
}

jQuery(function () {
  // Create instances of locationInfo for each location set
  var loc1 = new locationInfo();
  var loc2 = new locationInfo();

  // Initialize the dropdowns for the first location set
  loc1.getCountries(".location-set:eq(0)");
  jQuery(".countries", ".location-set:eq(0)").on("change", function (ev) {
      var countryId = jQuery("option:selected", this).attr("countryid");
      if (countryId != "") {
          loc1.getStates(countryId, ".location-set:eq(0)");
      } else {
          jQuery(".states", ".location-set:eq(0) option:gt(0)").remove();
      }
  });

  jQuery(".states", ".location-set:eq(0)").on("change", function (ev) {
      var stateId = jQuery("option:selected", this).attr("stateid");
      if (stateId != "") {
          loc1.getCities(stateId, ".location-set:eq(0)");
      } else {
          jQuery(".cities", ".location-set:eq(0) option:gt(0)").remove();
      }
  });

  // Initialize the dropdowns for the second location set
  loc2.getCountries(".location-set:eq(1)");
  jQuery(".countries", ".location-set:eq(1)").on("change", function (ev) {
      var countryId = jQuery("option:selected", this).attr("countryid");
      if (countryId != "") {
          loc2.getStates(countryId, ".location-set:eq(1)");
      } else {
          jQuery(".states", ".location-set:eq(1) option:gt(0)").remove();
      }
  });

  jQuery(".states", ".location-set:eq(1)").on("change", function (ev) {
      var stateId = jQuery("option:selected", this).attr("stateid");
      if (stateId != "") {
          loc2.getCities(stateId, ".location-set:eq(1)");
      } else {
          jQuery(".cities", ".location-set:eq(1) option:gt(0)").remove();
      }
  });
});
