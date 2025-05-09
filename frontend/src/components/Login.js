import React, { useEffect, useState } from 'react';
import '../css/Login.css';
function LoginMenu() {
	  return (
	<div className="login-menu">
		<div className="login-form">
			<h2>Login</h2>
			<input type="text" placeholder="Username" />
			<input type="password" placeholder="Password" />
			<button type="submit">Login</button>
		</div>
		<div className="register-form">
			<h2>Register</h2>
			<input type="text" placeholder="Username" />
			<input type="password" placeholder="Password" />
			<button type="submit">Register</button>
		</div>
	</div>
	);
}

export default LoginMenu;