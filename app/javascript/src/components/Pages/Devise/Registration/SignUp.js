import React from 'react';

const SignUp = ({toggleRegistration, handleSignUpChange, handleSignUpSubmit, newUserData}) => {
	return (
		<>
			<div className='sign-header'>
				<h1>Sign Up</h1>
			</div>
			<form onSubmit={handleSignUpSubmit} className="sign-form">
				<div className="field">
					<label>Name: </label>
					<input onChange={handleSignUpChange} type="text" name="name"  value={newUserData.name}/>
				</div>
				<div className="field">
					<label>Email: </label>
					<input onChange={handleSignUpChange} type="email" name="email" value={newUserData.email}/>
				</div>
				<div className="field">
					<label>Password:</label>
					<input onChange={handleSignUpChange} type="password" name="password" value={newUserData.password}/>
				</div>
				<div className="field">
					<label>Password Confirmation:</label>
					<input onChange={handleSignUpChange} type="password" name="password_confirmation" value={newUserData.password_confirmation}/>
				</div>
				<button className='submit' type='submit'>Sign Up</button>
				<div className="switcher">
					<button onClick={toggleRegistration}>Sign In </button>
				</div>
			</form>
			</>
	)
}

export default SignUp;
