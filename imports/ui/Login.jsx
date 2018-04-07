import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <h1>This is Login component</h1>

    <p>
      <Link to="/links">Log In</Link>
    </p>

    <Link to="/signup">Doesn&apos;t have an account?</Link>
  </div>
);

export default Login;
