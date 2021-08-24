import React from 'react';

const SignIn = ({handleSignInChange, handleSignInSubmit, userData, toggleRegistration}) => {
	return (
		<section>
			<div className='sign-header'>
				<h1>Sign In</h1>
			</div>
			<form onSubmit={handleSignInSubmit} className="sign-form">
				<div className="field">
					<label>Email: </label>
					<input onChange={handleSignInChange} type="email" name="email" value={userData.email} />
				</div>
				<div className="field">
					<label>Password:</label>
					<input onChange={handleSignInChange} type="password" name="password" value={userData.password} />
				</div>
				<button className='submit' type='submit'>Sign In</button>
				<div className="switcher">
					<button onClick={toggleRegistration}>Sign Up</button>
				</div>
			</form>
		</section>
	)
}

export default SignIn;
