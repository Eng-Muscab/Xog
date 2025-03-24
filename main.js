// all element

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("#form");



const showError = (input, message) => {
    const parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    let small = parentElement.querySelector('small');
    const successIcons = parentElement.querySelectorAll("i")[0];
    const errorIcons = parentElement.querySelectorAll("i")[1];
    small.innerText = message;
    errorIcons.style.visibility = 'visible';
    successIcons.style.visibility = 'hidden';
}

const showSuccess = (input) => {
    const parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
    const successIcons = parentElement.querySelectorAll("i")[0];
    const errorIcons = parentElement.querySelectorAll("i")[1];
    successIcons.style.visibility = 'visible';
    errorIcons.style.visibility = 'hidden';
}

const checkEmpty = (elements) =>{

    elements.forEach( (element) =>{
        if(element.value === ''){
            showError(element,'input is required')
        }
        else{
            showSuccess(element);
        }
    })
}

const checkEmail = (email) => {
    let regret = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regret.test(email.value)){
        showSuccess(email);
    }
    else{
        showError(email,'email is required')
    }
}

const checkPassword = (input,min,max) => {
    if(input.value.length > max){
        showError(input,`password you entered must less than ${max}`)
    }
    else if(input.value.length < min){
       
        showError(input,`password you entered must greater than ${min}`);
    }
    else{
        showSuccess(input);
    }
}


form.addEventListener("submit", (event) =>{
    event.preventDefault();
    checkEmpty([username,email,password,confirmPassword]);

    checkEmail(email);

    checkPassword(password,6,10);
    checkPassword(confirmPassword,6,10)
})