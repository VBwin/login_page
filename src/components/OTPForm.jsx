import React, { useState } from "react";

const OTPForm = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    const otpRegex = /^\d{6}$/;

    if (otpRegex.test(otp)) {
      alert("OTP Verified!");
    } else {
      setError("Invalid OTP. Please enter a 6-digit number.");
    }
  };

  return (
    <div className="form-section">
      <h1>Verify Your Account</h1>
      <p>Enter the OTP sent to your email</p>
      <form onSubmit={handleOTPSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          maxLength="6"
          inputMode="numeric"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default OTPForm;
