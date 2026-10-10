export const checkValidData = (email, password, name, isSignInForm) => {

    const isNameValid = /^[a-zA-Z]+(?:[ -][a-zA-Z]+)*$/.test(name);
    const isEamilValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

    if (!isSignInForm && !isNameValid) {return "Name is not valid!";
}
    if(!isEamilValid) return "Email Id is not valid!";
    if(!isPasswordValid) return "Password is not valid!";

    return null;
};