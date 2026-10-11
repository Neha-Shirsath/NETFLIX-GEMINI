export const checkValidData = (email, password, isSignInForm) => {

    // const isNameValid =  /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
    const isEamilValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

    // if (!isSignInForm && !isNameValid) {return "Name is not valid!";}

    if(!isEamilValid) return "Email Id is not valid!";
    if(!isSignInForm && !isPasswordValid) return "Password is not valid!";

    return null;
};