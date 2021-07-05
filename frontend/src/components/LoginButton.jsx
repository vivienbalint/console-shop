import React, { useState } from "react";

const ClickedComponent = (props) => {
  if (!props.clicked) {
    return null;
  }
  return (
    <form method="POST" className="login-form smooth-click">
      <label htmlFor="email-input" className="primary-color">
        Email
      </label>
      <input
        id="email-input"
        type="email"
        name="email"
        className="input-secondary primary-color"
      />
      <label htmlFor="password-input" className="primary-color">
        Password
      </label>
      <input
        id="password-input"
        type="password"
        name="password"
        className="input-secondary primary-color"
      />
      <div className="link-wrapper">
        <a
          href="/"
          className="link link-secondary underline after primary-color focus"
        >
          Forgot your password?
        </a>
      </div>
      <button type="submit" className="btn-primary secondary-color focus">
        Login
      </button>
    </form>
  );
};

const LoginButton = (props) => {
  const [isClicked, setClicked] = useState(false);
  return (
    <div className="login-container">
      <button
        onClick={() => setClicked(!isClicked)}
        className="btn-primary login-btn secondary-color focus"
      >
        Log me in
      </button>
      <ClickedComponent clicked={isClicked} />
    </div>
  );
};

export default LoginButton;
