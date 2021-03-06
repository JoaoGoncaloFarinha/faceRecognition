import React from 'react';

const SignIn = ({onRouteChange}) => {
	return(
		<article className="mt5 mw5 center br3 pa6 pa4-ns mv3 ba b--black-80 shadow-5">
		<main className="pa4 black-80">
		  <form className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-200" type="email" name="email-address"  id="email-address" />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" for="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
		      </div>
		    </fieldset>
		    </form>
		    <div className="">
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={() => onRouteChange('main')} />
		    </div>
		    <div className="lh-copy mt3">
		      <p className="f6 link dim black db pointer" onClick={ () => onRouteChange('register')} >Register</p>
		    </div>
		</main>
		</article>
	);
}

export default SignIn;