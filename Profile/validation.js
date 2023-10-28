function ProfileUpdate (){
    let profileimg = document.getElementById("profileimg").value;

    if(profileimg == ""){
        document.getElementById("msg1").innerHTML="Upload File Here ...!"
        document.getElementById("profileimg").focus();
        document.getElementById("msg1").style.color = "red"; 
        return false ;
    }else if(!profileimg == ""){
        document.getElementById("msg1").innerHTML="File Uploaded SuccessFully ...!"
        document.getElementById("msg1").style.color = "green"; 
        document.getElementById("msg1").style.marginBottom = "-20px"; 
        return false ;
    }else{
        document.getElementById("msg1").innerHTML=""
    }

}

function PasswordUpdate(){
    let pswd = document.change_pass.pswd
    let cmppswd=document.change_pass.cmppswd;
    let oldpswd=document.change_pass.oldpswd;
    var paswdform=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;


    if(oldpswd.value.length<=0){
      document.getElementById("msg22").innerHTML="Enter Password ...!"
      document.getElementById('msg22').style.fontSize = '15px';
      document.getElementById("msg22").style.color = "red"; 
      oldpswd.focus();
      return false;
   }else if(!oldpswd.value.match(paswdform)){
      document.getElementById("msg22").innerHTML="Password should be [7 to 15 characters which contain at least one numeric digit and a special character .."
      document.getElementById('msg22').style.fontSize = '12px';
      document.getElementById("msg22").style.color = "red"; 
      oldpswd.focus();
      return false;
   }else{
      document.getElementById("msg22").innerHTML=""
   }

    if(pswd.value.length<=0){
        document.getElementById("msg2").innerHTML="Enter Password ...!"
        document.getElementById('msg2').style.fontSize = '15px';
        document.getElementById("msg2").style.color = "red"; 
        pswd.focus();
        return false;
     }else if(!pswd.value.match(paswdform)){
        document.getElementById("msg2").innerHTML="Password should be [7 to 15 characters which contain at least one numeric digit and a special character .."
        document.getElementById('msg2').style.fontSize = '12px';
        document.getElementById("msg2").style.color = "red"; 
        pswd.focus();
        return false;
     }else{
        document.getElementById("msg2").innerHTML=""
     }
     if(cmppswd.value.length<=0){
        document.getElementById("msg3").innerHTML="Confirm Your New Password...!";
        document.getElementById('msg3').style.fontSize = '15px';
        document.getElementById("msg3").style.color = "red"; 
        cmppswd.focus();
        return false;
     }else if (pswd.value !== cmppswd.value){
        document.getElementById("msg3").innerHTML="Passwords do not match...!";
        document.getElementById('msg3').style.fontSize = '15px'
        document.getElementById("msg3").style.color = "red";  
        cmppswd.focus();
        return false;
     }else if(pswd.value === cmppswd.value){
        document.getElementById("msg3").innerHTML=" Password is Match .....!"
        document.getElementById('msg3').style.fontSize = '15px'
        document.getElementById("msg3").style.color = "green";  
        return false;
     }else{
        document.getElementById("msg3").innerHTML=""
     }
}



function validateProfile(){
    let fname = document.Update_Profile.fname;
    let lname = document.Update_Profile.lname;
    let mnumber = document.Update_Profile.mnumber;
    let altrnumber = document.Update_Profile.altrnumber;
    let email = document.Update_Profile.email;
    let gender = document.Update_Profile.gender;
    let cname = document.Update_Profile.cname;
    let degree = document.Update_Profile.degree;
    let stream = document.Update_Profile.stream;
    let year = document.Update_Profile.year;
    let country = document.Update_Profile.country;
    let state = document.Update_Profile.state;
    let city = document.Update_Profile.city;
    let address = document.Update_Profile.address;

   


    // Now you can perform your desired actions with the form data
    let correct_way = /^[A-Za-z]+$/;
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mailformat = /\b[A-Za-z0-9._+-]+@(?:[A-Za-z0-9-]+\.)+(com|in|org)\b/g;
    var IndNum = /^[0]?[6789]\d{9}$/;
    

    if(fname.value.length<=0){
        document.getElementById("err1").innerHTML="Enter First Name ...!"
        document.getElementById('err1').style.fontSize='14px';
        document.getElementById("err1").style.color = "red";  
        fname.focus();
        return false;
    }
    if (fname.value.length <= 0) {
        document.getElementById("err1").innerHTML = "Enter Firstname ";
        document.getElementById('err1').style.fontSize='14px';
        document.getElementById("err1").style.color = "red"; 
        fname.focus();
        return false;
      } else {
        document.getElementById("err1").innerHTML = "";
      }
      if (fname.value.length < 3) {
        document.getElementById("err1").innerHTML =
          "First Name should be greater then or equal to three characters";
          document.getElementById('err1').style.fontSize='14px';
        document.getElementById("err1").style.color = "red"; 
        fname.focus();
        return false;
      }
      if (fname.value.length > 12) {
        document.getElementById("err1").innerHTML =
          "First Name should be less then 12 character's";
          document.getElementById('err1').style.fontSize='14px';
        document.getElementById("err1").style.color = "red"; 
        fname.focus();
        return false;
      }
      if (!fname.value.match(correct_way)) {
        document.getElementById("err1").innerHTML =
          "fname must not be number only alphabets allow";
          document.getElementById('err1').style.fontSize='14px';
        document.getElementById("err1").style.color = "red"; 
        fname.focus();
        return false;
      } else {
        document.getElementById("err1").innerHTML = "";
      }
      
    //   lastname validation
    if (lname.value.length <= 0) {
        document.getElementById("err2").innerHTML = "Enter Lastname ";
        document.getElementById('err2').style.fontSize='14px';
        document.getElementById("err2").style.color = "red"; 
        lname.focus();
        return false;
      } else if (!lname.value.match(correct_way)) {
        document.getElementById("err2").innerHTML =
          "Lastname must not be number only alphabets allow";
          document.getElementById('err2').style.fontSize='14px';
        document.getElementById("err2").style.color = "red"; 
        lname.focus();
        return false;
      } else {
        document.getElementById("err2").innerHTML = "";
      }
      if (lname.length < 4 || lname.length > 12) {
        document.getElementById("err2").innerHTML =
          "Last name length is between  5 to 6 characters";
          document.getElementById('err2').style.fontSize='14px';
        document.getElementById("err2").style.color = "red"; 
        lname.focus();
        return false;
      } else {
        document.getElementById("err2").innerHTML = "";
      }

       //     validation for mobile number
        if (mnumber.value.length<=0) {
            document.getElementById("err3").innerHTML = "Mobile Number Cannot Be Blank";
            document.getElementById('err3').style.fontSize='14px';
            document.getElementById("err3").style.color = "red";
            mnumber.focus();
            return false;
        } else {
            document.getElementById("err3").innerHTML = "";
        }
        if(mnumber.value.length<10 || mnumber.value.length>10){
            document.getElementById('err3').innerHTML="Please Enter Valid Mobile No.";
            document.getElementById('err3').style.fontSize='14px';
            document.getElementById("err3").style.color = "red";
            mnumber.focus();
            return false;}else{ 
            document.getElementById('err3').innerHTML="";
        }
        if (!mnumber.value.match(IndNum)) {
            document.getElementById("err3").innerHTML =
            "Please Enter Valid Mobile No.start with(6,7,8,9)" +
            mnumber.value +
            "is Not A valid Phone no.";
            document.getElementById('err3').style.fontSize='14px';
            document.getElementById("err3").style.color = "red";
            mnumber.focus();
            return false;
        }

        //     validation for alternate mobile number
        if (altrnumber.value.length<=0) {
            document.getElementById("err4").innerHTML = "Mobile Number Cannot Be Blank";
            document.getElementById('err4').style.fontSize='14px';
            document.getElementById("err4").style.color = "red";
            altrnumber.focus();
            return false;
        } else {
            document.getElementById("err4").innerHTML = "";
        }
        if(altrnumber.value.length<10 || altrnumber.value.length>10){
            document.getElementById('err4').innerHTML="Please Enter Valid Mobile No.";
            document.getElementById('err4').style.fontSize='14px';
            document.getElementById("err4").style.color = "red";
            altrnumber.focus();
            return false;
          }else{ 
            document.getElementById('err4').innerHTML="";
        }
        if (!altrnumber.value.match(IndNum)) {
            document.getElementById("err4").innerHTML =
            "Please Enter Valid Mobile No. start with(6,7,8,9)" +
            altrnumber.value +
            "is Not A valid Phone no.";
            document.getElementById('err4').style.fontSize='14px';
            document.getElementById("err4").style.color = "red";
            altrnumber.focus();
            return false;
        }



        //   validation on email

        if (!email.value.match(mailformat)) {
          document.getElementById("err5").innerHTML = "Email Should be in the proper format ('@' ,'.').. !";
          document.getElementById('err5').style.fontSize='14px';
          document.getElementById("err5").style.color = "red";
          email.focus();
          return false;
        } else {
          document.getElementById("err5").innerHTML = "";
        }

          // validation on gender
            let valid = false;
            // var gender = document.stud_form.gender;

            for (let i = 0; i < gender.length; i++) {
                if (gender[i].checked) {
                    valid = true;
                    break;
                }
            }

            if (!valid) {
                document.getElementById('err6').innerHTML = "Please select a gender...";
                document.getElementById('err6').style.fontSize='14px';
                // Assuming 'gender' is the name of the radio button group
                // You can use the following line to focus on the first radio button:
                gender[0].focus();
                return false;
            } else {
                document.getElementById('err6').innerHTML = "";
            }


            // validation on college name 
            if(cname.value.length<=0){
              document.getElementById("err7").innerHTML="Enter a College name here ...!"
              document.getElementById('err7').style.fontSize='14px';
              cname.focus();
              return false;
            }else if(cname.value.length>20){
             document.getElementById("err7").innerHTML=" College name should be less than 20 ...!"
             document.getElementById('err7').style.fontSize='14px';
             cname.focus();
             return false;
            }else{
              document.getElementById("err7").innerHTML="";
            }


            //validation on degree code
            if(degree.value.length<=0){
              document.getElementById("err8").innerHTML="Enter Degree Type ...!"
             document.getElementById('err8').style.fontSize='14px';
             document.getElementById("err8").style.color = "red";
              degree.focus();
              return false;
            }
            else if(degree.value.length>15){
              document.getElementById("err8").innerHTML="Degree type must have atleast 15 characters"
             document.getElementById("err8").style.color = "red";
             document.getElementById('err8').style.fontSize='14px';
              degree.focus();
              return false;
            }else{
              document.getElementById("err8").innerHTML="";
            }


            // validation on stream 
            if (stream.value == null || stream.value==""){
              document.getElementById("err9").innerHTML="Enter Stream here ...!"
              document.getElementById("err9").style.color = "red";
              document.getElementById('err9').style.fontSize='14px';
                           stream.focus();
                           return false;
            }else if(stream.value.length>20){
              document.getElementById("err9").innerHTML="Stream  must have atleast 20 characters"
              document.getElementById("err9").style.color = "red";
              document.getElementById('err9').style.fontSize='14px';
              stream.focus();
              return false;
            }else{
              document.getElementById("err9").innerHTML="valid ...!";
              document.getElementById('err9').style.fontSize='14px';
              document.getElementById("err9").style.color = "green";
            }

            // validation on year 
          if(year.value.length<=0){
            document.getElementById("err10").innerHTML="Enter Year of Passing ...!"
            document.getElementById("err10").style.color = "red";
            document.getElementById('err10').style.fontSize='14px';
            year.focus();
            return false;
          }
          else if(year.value.length>4 || year.value.length<4){
            document.getElementById("err10").innerHTML="Year should be in format YYYY only or equal to four digits only. ! "
            document.getElementById('err10').style.fontSize='14px';
            document.getElementById("err10").style.color = "red";
            year.focus();
            return false;;
          }
          else{
            document.getElementById("err10").innerHTML="valid ...!";
            document.getElementById('err10').style.fontSize='14px';
            document.getElementById("err10").style.color = "green";
          }


          // validation on country
          if(country.value.length<=0){
            document.getElementById("err11").innerHTML="Enter Your Country...!"
            document.getElementById('err11').style.fontSize='14px';
            document.getElementById("err11").style.color = "red";
            country.focus();
            return false;
          }else{
            document.getElementById("err11").innerHTML="valid ...!";
            document.getElementById('err11').style.fontSize='14px';
            document.getElementById("err11").style.color = "green";
          }

          // validation on state
          if(state.value.length<=0){
            document.getElementById("err12").innerHTML="Enter Your State...!"
            document.getElementById('err12').style.fontSize='14px';
            document.getElementById("err12").style.color = "red";
            state.focus();
            return false;
          }else{
            document.getElementById("err12").innerHTML="valid ...!";
            document.getElementById('err12').style.fontSize='14px';
            document.getElementById("err12").style.color = "green";
          }


          // validation on city
          if(city.value.length<=0){
            document.getElementById("err13").innerHTML="Enter Your City...!"
            document.getElementById('err13').style.fontSize='14px';
            document.getElementById("err13").style.color = "red";
            city.focus();
            return false;
          }else{
            document.getElementById("err13").innerHTML="valid ...!";
            document.getElementById('err13').style.fontSize='14px';
            document.getElementById("err13").style.color = "green";
          }


          // validation on address
          if(address.value.length<=0){
            document.getElementById("err14").innerHTML="Enter Your Address...!"
            document.getElementById('err14').style.fontSize='14px';
            document.getElementById("err14").style.color = "red";
            address.focus();
            return false;
          }else{
            document.getElementById("err14").innerHTML="valid ...!";
            document.getElementById('err14').style.fontSize='14px';
            document.getElementById("err14").style.color = "green";
            return true;
          }

    
}



