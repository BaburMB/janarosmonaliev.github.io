function validateAll() {
  var form1, form2, form3;
  form1 = validateName();
  form2 = validateEmail();
  form3 = validateMessage();

  if (form1 == true && form2 == true && form3 == true){
    document.forms['contactForm'].submit();
  }
}

function clearAll(){
  isValid(document.getElementById('name'));
  isValid(document.getElementById('email'));
  isValid(document.getElementById('msg'));

}

//  Secondary Functions:
function validateName() {
  var text = document.getElementById('name').value;
  if (text == ""){
    isInvalid(document.getElementById('name'));
    return false;
  } else{
    isValid(document.getElementById('name'));
    return true
  }
  //this should check whether it is empty or has number;
}

function validateEmail() {
  var text = document.getElementById('email').value;
  if (text.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g)){
    isValid(document.getElementById('email'));
    return true;
  } else{
    isInvalid(document.getElementById('email'));
    return false;
  }
}

function validateMessage() {
  var text = document.getElementById('msg').value;
  if (text == "" || text == null){
    isInvalid(document.getElementById('msg'));
    return false;
  } else{
    isValid(document.getElementById('msg'));
    return true;
  }
}

function isValid(x){
  x.classList.remove('is-invalid');
}
function isInvalid(x){
  x.classList.add('is-invalid');
}