  function reset_firstname(){
    document.getElementById("First_Name").style = "color: #2b3035; background-color: #fff; border-color: hsl(248, 32%, 49%); outline: 0; box-shadow: 0 0 0 0.1rem hsl(248deg 32% 49%); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out";
    document.getElementById("fn").innerHTML = "";
  }
  function normal_firstname(){
    document.getElementById("First_Name").style = "border: 1.9px solid hsl(246, 25%, 77%); border-radius: 5px; transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out;";
  }

  function reset_lastname(){
    document.getElementById("Last_Name").style = "color: #2b3035; background-color: #fff; border-color: hsl(248, 32%, 49%); outline: 0; box-shadow: 0 0 0 0.1rem hsl(248deg 32% 49%); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out";
    document.getElementById("ln").innerHTML = "";
  }
  function normal_lastname(){
    document.getElementById("Last_Name").style = "border: 1.9px solid hsl(246, 25%, 77%); border-radius: 5px; transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out;";
  }

  function reset_email(){
    document.getElementById("Email_Address").style = "color: #2b3035; background-color: #fff; border-color: hsl(248, 32%, 49%); outline: 0; box-shadow: 0 0 0 0.1rem hsl(248deg 32% 49%); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out";
    document.getElementById("ea").innerHTML = "";
  }
  function normal_email(){
    document.getElementById("Email_Address").style = "border: 1.9px solid hsl(246, 25%, 77%); border-radius: 5px; transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out;";
  }

  function reset_pass(){
    document.getElementById("Password").style = "color: #2b3035; background-color: #fff; border-color: hsl(248, 32%, 49%); outline: 0; box-shadow: 0 0 0 0.1rem hsl(248deg 32% 49%); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out";
    document.getElementById("pas").innerHTML = "";
  }
  function normal_pass(){
    document.getElementById("Password").style = "border: 1.9px solid hsl(246, 25%, 77%); border-radius: 5px; transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out;";
  }

  function func_res(){
  var values = [document.getElementById("First_Name").value, document.getElementById("Last_Name").value, document.getElementById("Email_Address").value, document.getElementById("Password").value ]
  var boolFN = false;
  var boolLN = false;
  var Email_adr = false;
  var pass = false;
  if (!values[0]) {
    document.getElementById("fn").innerHTML = "First Name can not be empty";
    document.getElementById("First_Name").style = "color: red; background: url(./images/icon-error.svg) no-repeat center; background-position-x: right; background-origin: content-box; border-color: hsl(0, 100%, 74%); box-shadow: 0 0 0 0.1rem hsl(0, 100%, 74%); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out; background-color: rgb(255, 225, 225)";
  }
  else {boolFN = true;}
  if (!values[1]) {
    document.getElementById("ln").innerHTML = "Last Name can not be empty";
    document.getElementById("Last_Name").style = "background: url(./images/icon-error.svg) no-repeat center; background-position-x: right; background-origin: content-box; border-color: hsl(0, 100%, 74%); box-shadow: 0 0 0 0.1rem hsl(0, 100%, 74%); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out; background-color: rgb(255, 225, 225)";
  }
  else {boolLN = true;}
  if (!values[2]) {
    document.getElementById("ea").innerHTML = "Looks like this is not an email";
    document.getElementById("Email_Address").style = "background: url(./images/icon-error.svg) no-repeat center; background-position-x: right; background-origin: content-box; color:hsl(0, 100%, 74%); border-color: hsl(0, 100%, 74%); box-shadow: 0 0 0 0.1rem hsl(0, 100%, 74%); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out; background-color: rgb(255, 225, 225)";
  }
  else {Email_adr = true;}
  if (!values[3]) {
    document.getElementById("pas").innerHTML = "Password can not be empty";
    document.getElementById("Password").style = "background: url(./images/icon-error.svg) no-repeat center; background-position-x: right; background-origin: content-box; color:hsl(0, 100%, 74%); border-color: hsl(0, 100%, 74%); box-shadow: 0 0 0 0.1rem hsl(0, 100%, 74%); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out; background-color: rgb(255, 225, 225)";
  }
  else {pass = true;}

  if(boolFN && boolLN && Email_adr && pass){document.theForm.submit();}
  }