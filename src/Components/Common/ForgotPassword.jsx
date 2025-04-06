import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send the email to backend to initiate reset
    console.log('Password reset email submitted for:', email);
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
            />
          </div>
          <button type="submit">Send Reset Link</button>
        </form>
      ) : (
        <p>
          If the email is registered, a reset link has been sent. Please check
          your inbox.
        </p>
      )}
    </div>
  );
};

export default ForgotPassword;
