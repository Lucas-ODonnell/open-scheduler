import React from 'react';

const SignIn = ({handleSignInChange, handleSignInSubmit, userData}) => {
	return (
		<section>
		<div className='signin-header'>
			<h1>Sign In</h1>
		</div>
		<form onSubmit={handleSignInSubmit} className="signin-form">
			<div className="field">
				<label>Email: </label>
				<input onChange={handleSignInChange} type="email" name="email" value={userData.email} />
			</div>
			<div className="field">
				<label>Password:</label>
				<input onChange={handleSignInChange} type="password" name="password" value={userData.password} />
			</div>
			<button className='submit' type='submit'>Sign In</button>
		</form>
		</section>
	)
}

export default SignIn;
