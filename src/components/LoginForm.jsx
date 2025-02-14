import React, { useState } from "react";
import OTPForm from "./OTPForm";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("email");
  const [error, setError] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setError("Invalid email format. Please use 'sample@example.com'.");
    } else {
      setError("");
      setStep("otp");
    }
  };

  return step === "email" ? (
    <div className="form-section">
      <h1>Create an account</h1>
      <p>Enter your email below to create your account</p>
      <form onSubmit={handleEmailSubmit}>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign In with Email</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="divider">OR CONTINUE WITH</p>
      <button className="github-button">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub logo"
        />{" "}
        GitHub
      </button>
      <p className="terms">
        By clicking continue, you agree to our{" "}
        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </p>
    </div>
  ) : (
    <OTPForm />
  );
};

export default LoginForm;
