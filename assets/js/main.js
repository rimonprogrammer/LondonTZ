// navbar start
const TrainingPackage = document.getElementById('TrainingPackage');
const Service = document.getElementById('Service');
const AllinOne = document.getElementById('AllinOne');
const FreeMockTest = document.getElementById('FreeMockTest');
const Blogs = document.getElementById('Blogs');
const AboutUs = document.getElementById('AboutUs');
const ContactUs = document.getElementById('ContactUs');
if(window.location.pathname == "/TrainingPackage.html"){
    TrainingPackage.classList.add('ActivePath');
}
else if(window.location.pathname == "/Service.html"){
    Service.classList.add('ActivePath');
}
else if(window.location.pathname == "/AllinOne.html"){
    AllinOne.classList.add('ActivePath');
}
else if(window.location.pathname == "/FreeMockTest.html"){
    FreeMockTest.classList.add('ActivePath');
}
else if(window.location.pathname == "/Blogs.html"){
    Blogs.classList.add('ActivePath');
}
else if(window.location.pathname == "/AboutUs.html"){
    AboutUs.classList.add('ActivePath');
}
else if(window.location.pathname == "/ContactUs.html"){
    ContactUs.classList.add('ActivePath');
}
// navbar end

// preloader start
const preloader = document.getElementById('preloader');
const header = document.getElementById('header');
window.addEventListener("load", (()=>{
    preloader.style.display = "none";
    header.classList.add("fixed-top");
}));
// preloader end

// footer start
const Year = document.getElementById('Year');

const date = new Date();
const year = date.getFullYear();

Year.innerText = year;
// footer end


// SingUp & SignIn page start
const SignIn = document.getElementById('SignIn');
const SignUp = document.getElementById('SignUp');
if(window.location.pathname == "SignUp.html"){
    SignUp.classList.add('ActiveAuth')
}
else if(window.location.pathname == "SignIn.html"){
    SignIn.classList.add('ActiveAuth')
}


const EyeSlash = document.getElementById('EyeSlash');
EyeSlash.classList.add('fa-eye-slash');
const password = document.getElementById('password');
EyeSlash.addEventListener('click', (()=>{
    if(password.type == 'password'){
        password.type = 'text';
        EyeSlash.classList.add('fa-eye');
    }
    else if(password.type == 'text'){
        password.type = 'password';
        EyeSlash.classList.remove('fa-eye');
    };
}));

const CnfmEyeSlash = document.getElementById('CnfmEyeSlash');
CnfmEyeSlash.classList.add('fa-eye-slash');
const CnfmPassword = document.getElementById('CnfmPassword')
CnfmEyeSlash.addEventListener('click', (()=>{
    if(CnfmPassword.type == 'password'){
        CnfmPassword.type = 'text';
        CnfmEyeSlash.classList.add('fa-eye');
    }
    else if(CnfmPassword.type == 'text'){
        CnfmPassword.type = 'password';
        CnfmEyeSlash.classList.remove('fa-eye');
    };
}));
// SingUp & SignIn page end


