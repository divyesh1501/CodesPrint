// check form input value on click blank or null
function check_form() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let dob = document.getElementById('dob').value;
    let exp = document.getElementById('exp').value;

    if (name == '' || name == null) {
        document.getElementById('msg1').innerText = 'Enter Your Name..!!!'
        return false;
    } else if (email == '' || email == null) {
        document.getElementById('msg2').innerText = 'Enter Your Email..!!!'
        return false;
    } else if (pass == '' || pass == null) {
        document.getElementById('msg3').innerText = 'Enter Your Password..!!!'
        return false;
    } else if (male == false && female == false) {
        document.getElementById('msg4').innerText = 'Select Gender..!!!'
        return false;
    } else if (dob == '' || dob == null) {
        document.getElementById('msg5').innerText = 'Enter Your Date Of Birth..!!!'
        return false;
    } else if (exp == '-1') {
        document.getElementById('msg6').innerText = 'Select Your Experirnce..!!!'
        return false;
    } else {
        document.getElementById('msg1').innerText = ''
        document.getElementById('msg2').innerText = ''
        document.getElementById('msg3').innerText = ''
        document.getElementById('msg4').innerText = ''
        document.getElementById('msg5').innerText = ''
        document.getElementById('msg6').innerText = ''
        return false;
    }
}

// check form input value onblur effect blank or null

function check_blank_value(blank, spanid) {
    if (blank.value == "" || blank.value == null) {
        document.getElementById(spanid).innerText = "Enter Input Value..!!"
        return false;
    } else {
        document.getElementById(spanid).innerText = ""
        return false;
    }
}

function gender_check(blank, spanid) {
    if (blank.checked == false) {
        document.getElementById(spanid).innerText = "Select Gender..!!"
        return false;
    } else {
        document.getElementById(spanid).innerText = ""
        return false;
    }
}

function exp_check(blank, spanid) {
    if ( blank.value == -1){
        document.getElementById(spanid).innerText = "Select Your Experience..!!"
        return false;
    } else {
        document.getElementById(spanid).innerText = ""
        return false;
    }
}

// show password

function showPass() {
    let pass = document.getElementById('pass')
    if ((pass.type == 'password')) {
        pass.type = 'text'
    } else {
        pass.type ='password'
    }
}