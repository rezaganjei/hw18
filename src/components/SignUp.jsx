import React, { useState } from "react";
import classes from "./SignUp.module.css";
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [termsChecked, setTermsChecked] = useState(false);
  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };
  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const checkTermsHandler = () => {
    setTermsChecked((prev) => !prev);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (userName && firstName && lastName && email && termsChecked) {
      const newUser = {
        userName,
        firstName,
        lastName,
        email,
      };
      console.log(newUser);
    } else {
      alert("please complete all the fields");
    }
  };
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <h2>Create acount</h2>
        <h4>
          Already have an account?{" "}
          <span>
            <a className={classes.link}>Sign in</a>
          </span>
        </h4>
        <input placeholder="Username" onChange={usernameHandler} />

        <input placeholder="First Name" onChange={firstNameHandler} />
        <input placeholder="Last Name" onChange={lastNameHandler} />

        <input placeholder="E-mail" type="email" onChange={emailHandler} />
        <input type="submit" value="Sign up" />
        <div className={classes.terms}>
          <input
            type="checkbox"
            checked={termsChecked}
            onChange={checkTermsHandler}
          />{" "}
          <label>
            I have read and agree to the{" "}
            <span>
              <a className={classes.link}>Terms of Service</a>
            </span>
          </label>
        </div>
      </form>
    </>
  );
};
export default SignUp;
