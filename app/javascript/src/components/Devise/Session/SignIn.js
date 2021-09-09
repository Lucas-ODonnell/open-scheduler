import React from 'react';

const SignIn = ({handleSignInChange, handleSignInSubmit, userData, toggleRegistration, toggleReset, passwordReset, handleEmailChange, email, handlePasswordResetSubmit}) => {
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
					<div className="switcher-vert" >
						<button onClick={toggleRegistration}>Sign Up</button>
						<button onClick={toggleReset}>Reset Password</button>
					</div>
				</div>
			</form>
			{passwordReset ?
			<div className="password-reset">
				<form onSubmit={handlePasswordResetSubmit}>
					<input onChange={handleEmailChange} type="email" name="email" value={email.email} placeholder="Email"/>
					<button>Submit</button>
				</form>
			</div>
			:
			<>
				</>
			}
		</section>
	)
}

export default SignIn;
