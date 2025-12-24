const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => { 
    let errors = []
    if(firstName){
        // if there is a first name input on website then we're on the signup page
        errors = getSignupErrors(firstName.value, lastName.value, email.value, password.value, confirmPassword.value);
    }
    else{
        // if there is no first name input on website then we're on the signin page
        errors = getSigninErrors(email.value, password.value);
    }
    if(errors.length > 0){
        e.preventDefault();
        error_message.innerText = errors.join(". ");
    } 
})
function getSignupErrors(firstName, lastName, email, password, confirmPassword){
    let errors = [] 
    if(firstName === '' || firstName == empty){
        errors.push('First name is required');
        firstName.parentElement.classList.add('invalid');
    }
    if(lastName === '' || lastName == empty){
        errors.push('Last name is required');
        lastName.parentElement.classList.add('invalid');
    }
    if (email === '' || email == empty){
        errors.push('Email is required');
        email.parentElement.classList.add('invalid');
    }
    if(password === '' || password == empty){
        errors.push('Password is required');
        password.parentElement.classList.add('invalid');
    }
    if(confirmPassword === '' || confirmPassword == empty){
        errors.push('Confirm Password is required');
        confirmPassword.parentElement.classList.add('invalid');
    }
    if(password !== confirmPassword){
        errors.push('Passwords do not match');
        password.parentElement.classList.add('invalid');
        confirmPassword.parentElement.classList.add('invalid');
    } 
}
    return errors;
    
const allInputs = [firstName, lastName, email, password, confirmPassword];
allInputs.forEach(input => {
        input.addEventListener('input', () => { 
            if(input.parentElement.classList.contains('invalid')) {
                input.parentElement.classList.remove('invalid');
                error_innerText = '';
            }})
            
        }) 