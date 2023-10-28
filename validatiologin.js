function validateForm() {
  let username = document.getElementById("username").value;

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (username == "") {
    document.getElementById("error1").innerHTML = "Enter username here ..";
    document.getElementById("username").focus();
    return false;
  } else if (!username.match(mailformat)) {
    document.getElementById("error1").innerHTML =
      "Enter proper username here ..";
    document.getElementById("username").focus();
    return false;
  } else {
    document.getElementById("error1").innerHTML = "";
  }
  let password = document.getElementById("password").value;

  if (password == "") {
    document.getElementById("error2").innerHTML = "Please enter your Password";
    document.getElementById("password").focus();
    return false;
  } else if (password.length < 4) {
    document.getElementById("error2").innerHTML =
      "password more than 4 character's";
    document.getElementById("password").focus();
    return false;
  } else if (password.length > 15) {
    document.getElementById("error2").innerHTML =
      "password less than 4 character's";
    document.getElementById("password").focus();
    return false;
  } else {
    document.getElementById("error2").innerHTML = "";
  }

  return true;
}

function RegisterForm() {
  let firstName = document.stud_form.firstName;
  let lastName = document.stud_form.lastName;
  let gender = document.stud_form.gender;
  let dob = document.stud_form.dob;
  let age = document.stud_form.age;
  let email = document.stud_form.email;
  let mobile = document.stud_form.mobile;
  let gnumber = document.stud_form.gnumber;
  let streetPermanent = document.stud_form.streetPermanent;
  let streetLocal = document.stud_form.streetLocal;
  let pcountry = document.stud_form.pcountry;
  // let pstate = document.stud_form.pstate;
  // let pcity = document.stud_form.pcity;
  let pinPermanent = document.stud_form.pinPermanent;
  let pinLocal = document.stud_form.pinLocal;
  let sscBoard = document.stud_form.sscBoard;
  let sscYear = document.stud_form.sscYear;
  let hscBoard = document.stud_form.hscBoard;
  let hscYear = document.stud_form.hscYear;
  let degreetype = document.stud_form.degreetype;
  let degreeYear = document.stud_form.degreeYear;
  let mastertype = document.stud_form.mastertype;
  let mastersYear = document.stud_form.mastersYear;
  let cv = document.stud_form.cv;

  let correct_way = /^[A-Za-z]+$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var IndNum = /^[0]?[6789]\d{9}$/;
  let a = document.getElementById("firstName").value;

  if (firstName.value.length <= 0) {
    document.getElementById("msg1").innerHTML = "Enter Firstname ";
    firstName.style.borderColor = "red solid 5px";
    firstName.focus();
    return false;
  } else {
    document.getElementById("msg1").innerHTML = "";
  }
  if (firstName.value.length < 3) {
    document.getElementById("msg1").innerHTML =
      "First Name should be greater then or equal to three characters";
    firstName.focus();
    return false;
  }
  if (firstName.value.length > 12) {
    document.getElementById("msg1").innerHTML =
      "First Name should be less then 12 character's";
    firstName.focus();
    return false;
  }
  if (!a.match(correct_way)) {
    document.getElementById("msg1").innerHTML =
      "Firstname must not be number only alphabets allow";
    firstName.focus();
    return false;
  } else {
    document.getElementById("msg1").innerHTML = "";
  }

  if (lastName.value.length <= 0) {
    document.getElementById("msg2").innerHTML = "Enter Lastname ";
    lastName.focus();
    return false;
  } else if (!lastName.value.match(correct_way)) {
    document.getElementById("msg2").innerHTML =
      "Lastname must not be number only alphabets allow";
    lastName.focus();
    return false;
  } else {
    document.getElementById("msg2").innerHTML = "";
  }
  if (lastName.length < 4 || lastName.length > 12) {
    document.getElementById("msg2").innerHTML =
      "Last name length is between  5 to 6 characters";
    lastName.focus();
    return false;
  } else {
    document.getElementById("msg2").innerHTML = "";
  }

  // validation on gender
  var valid = false;
  // var gender = document.stud_form.gender;

  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      valid = true;
      break;
    }
  }

  if (!valid) {
    document.getElementById("msg3").innerHTML = "Please select a gender...";
    // Assuming 'gender' is the name of the radio button group
    // You can use the following line to focus on the first radio button:
    gender[0].focus();
    return false;
  } else {
    document.getElementById("msg3").innerHTML = "";
  }

  // validation date of birth

  if (dob.value.trim() === "") {
    document.getElementById("msg4").innerHTML = "Date of Birth cannot be empty";
    dob.focus();
    return false;
  } else {
    document.getElementById("msg4").innerHTML = "";
  }

  // validation on age
  if (age.value == "") {
    document.getElementById("msg5").innerHTML = "Age can't be blank...!";
    age.focus();
    return false;
  }
  if (age.value.length < 0) {
    document.getElementById("msg5").innerHTML =
      "Age should contain numbers and more than  ten digits";
    age.focus();
    return false;
  } else {
    document.getElementById("msg5").innerHTML = "";
  }
  //check if age is a number or less than or greater than 100
  if (isNaN(age.value) || age.value < 18 || age.value > 100) {
    document.getElementById("msg5").innerHTML =
      "Enter Age in Numbers must be between 18 and 100";

    age.focus();
    return false;
  } else {
    document.getElementById("msg5").innerHTML = "";
  }

  //      validation on email

  if (!email.value.match(mailformat)) {
    document.getElementById("msg6").innerHTML =
      "Email Should be in the proper format ('@' ,'.').. !";
    email.focus();
    return false;
  } else {
    document.getElementById("msg6").innerHTML = "";
  }

  //     validation for mobile number
  if (mobile.value == "") {
    document.getElementById("msg7").innerHTML = "Mobile Number Cannot Be Blank";
    mobile.focus();
    return false;
  } else {
    document.getElementById("msg7").innerHTML = "";
  }
  if (mobile.value.length < 10 || mobile.value.length > 10) {
    document.getElementById("msg7").innerHTML = "Please Enter Valid Mobile No.";
    mobile.focus();
    return false;
  } else {
    document.getElementById("msg7").innerHTML = "";
  }
  if (!mobile.value.match(IndNum)) {
    document.getElementById("msg7").innerHTML =
      "Please Enter Valid Mobile No." +
      mobile.value +
      "is Not A valid Phone no.";
    mobile.focus();
    return false;
  }

  //  validation guardians mobule no.
  if (gnumber.value == "") {
    document.getElementById("msg8").innerHTML =
      "Guardian's Mobile No cannot be empty..!";
    gnumber.focus();
    return false;
  } else {
    document.getElementById("msg8").innerHTML = "";
  }
  if (isNaN(gnumber.value)) {
    document.getElementById("msg8").innerHTML = "Enter a Numeric Value";
    gnumber.focus();
    return false;
  } else {
    document.getElementById("msg8").innerHTML = "";
  }
  if (gnumber.value.length < 10) {
    document.getElementById("msg8").innerHTML =
      "number must be 10 Digit's Only..!";
    gnumber.focus();
    return false;
  } else {
    document.getElementById("msg8").innerHTML = "";
  }

  // validation on name="streetPermanent"
  if (streetPermanent.value == "") {
    document.getElementById("msg9").innerHTML =
      "Street Permanent Address Can Not Be Empty";
    streetPermanent.focus();
    return false;
  } else {
    document.getElementById("msg9").innerHTML = "";
  }
  if (streetPermanent.value.length < 10 || streetPermanent.value.length > 50) {
    document.getElementById("msg9").innerHTML = " Enter Street here between 10 - 50 character's";
    return false;
  }else{
    document.getElementById('msg9').innerHTML="";
  }

  // validation on country select
  // if (!pcountry.selectedIndex){
  //   document.getElementById("msg10").innerHTML= 'Please Select Country';
  //   return false;
  //   }else{
  //     document.getElementById('msg10').innerHTML='';}
  // if(pcountry.value ==" "){
  //   document.getElementById('msg10').innerHTML='Select Country ....!';
  //   return false;
  // }else{
  //   document.getElementById('msg10').innerHTML="";
  // }

  //  validation on pin of permanent address

  // validation on pinPermanent
  if(pinPermanent.value.length<=0){
    document.getElementById("msg13").innerHTML ="Please enter your Pin Code....!";
    pinPermanent.focus();
    return false;
  }else if(pinPermanent.value.length>6 || pinPermanent.value.length<6){
    document.getElementById("msg13").innerHTML ='Pin code should be six digits Only.';
    return false;
  }else{
    document.getElementById("msg13").innerHTML ="";
  }




  // validation on streetLocal 
  if (streetLocal.value == "") {
    document.getElementById("msg14").innerHTML =
      "Street Local Address Can Not Be Empty";
    streetLocal.focus();
    return false;
  } else {
    document.getElementById("msg14").innerHTML = "";
  }
  if (streetLocal.value.length < 10 || streetLocal.value.length > 50) {
    document.getElementById("msg14").innerHTML = " Enter Street here between 10 - 50 character's";
    return false;
  }else{
    document.getElementById('msg14').innerHTML="";
  }

  // validation on Pin Local
  if(pinLocal.value.length<=0){
    document.getElementById("msg18").innerHTML ="Please enter your Pin Code....!";
    pinLocal.focus();
    return false;
  }else if(pinLocal.value.length>6 || pinLocal.value.length<6){
    document.getElementById("msg13").innerHTML ='Pin code should be six digits only.';
    pinLocal.focus();
    return false;
  }else{
    document.getElementById("msg18").innerHTML ="";
  }

  // valdaton on ssc percentage
  if (sscBoard.value.length <= 0) {
    document.getElementById("msg20").innerHTML = "SSC Percentage is required";
    sscBoard.focus();
    return false;
  } else if (isNaN(sscBoard.value)) {
    document.getElementById("msg20").innerHTML =
      "Please enter a valid SSC Percentage";
    sscBoard.focus();
    return false;
  } else {
    document.getElementById("msg20").innerHTML = "";
  }

  // valdaton on ssc Passng Year
  if (sscYear.value.length <= 0) {
    document.getElementById("msg21").innerHTML = "SSC Passing Year is required";
    sscYear.focus();
    return false;
  } else if (isNaN(sscYear.value)) {
    document.getElementById("msg21").innerHTML =
      "Please enter a valid SSC Passing Year";
    sscYear.focus();
    return false;
  } else {
    document.getElementById("msg21").innerHTML = "";
  }

  // valdaton on hsc percentage
  if (hscBoard.value.length <= 0) {
    document.getElementById("msg22").innerHTML = "HSC Percentage is required";
    hscBoard.focus();
    return false;
  } else if (isNaN(hscBoard.value) || hscBoard.value.length > 4) {
    document.getElementById("msg22").innerHTML =
      "Please enter a valid HSC Percentage";
    hscBoard.focus();
    return false;
  } else {
    document.getElementById("msg22").innerHTML = "";
  }

  // valdaton on ssc Passng Year
  if (hscYear.value.length <= 0) {
    document.getElementById("msg23").innerHTML = "HSC Passing Year is required";
    hscYear.focus();
    return false;
  } else if (isNaN(hscYear.value)) {
    document.getElementById("msg23").innerHTML =
      "Please enter a valid HSC Passing Year";
    hscYear.focus();
    return false;
  } else {
    document.getElementById("msg23").innerHTML = "";
  }

  // VALIDATION ON DEGREE
  if (degreetype.value == "Select Degree") {
    document.getElementById("msg24").innerHTML = "Degree Type is required...";
    // alert("Course is required");
    degreetype.focus();
    return false;
  } else {
    document.getElementById("msg24").innerHTML = "";
  }

  // validation for select the passing year
  if (degreeYear.value == "Select Field") {
    document.getElementById("msg25").innerHTML =
      "Passing Year of degree is Required";
    degreeYear.focus();
    return false;
  } else {
    document.getElementById("msg25").innerHTML = "";
  }

  // validation on select the master degree
  if (mastertype.value == "Select Masters") {
    document.getElementById("msg26").innerHTML = "Masters type is required";
    mastertype.focus();
    return false;
  } else {
    document.getElementById("msg26").innerHTML = "";
  }

  // validation for select the passing year of master degree
  if (mastersYear.value == "Select Field") {
    document.getElementById("msg27").innerHTML =
      "Passing Year of Masters is Required";
    mastersYear.focus();
    return false;
  } else {
    document.getElementById("msg27").innerHTML = "";
  }

  // validation on File
  if (cv.value.length <= 0) {
    document.getElementById("msg28").innerHTML = "Upload your CV first...";
    cv.focus();
    return false;
  } else {
    document.getElementById("msg28").innerHTML = "";
  }

  
}




// script for drop down of country city and state
