export const checkValidateDataOnSignIn = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) return "Email Id is not valid";
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
export const checkValidateDataOnSignUp = (
  name,
  email,
  password,
  confirmPassword
) => {
  if (!name) return "Name is empty";
  if (name.length < 2) return "Name must me atleast 2 chars long";
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) return "Email Id is not valid";
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid) return "Password is not valid";
  if (password !== confirmPassword) return "Passwords are not match";
  return null;
};
