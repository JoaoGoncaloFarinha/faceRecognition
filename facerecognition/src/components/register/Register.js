import React from 'react';

const Register = ({onRouteChange}) => {
	return(
		<article className="mw5 center br3 pa3 pa4-ns mv3 ba b--black-80 shadow-5">
		<main className="pa4 black-80">
		  <form className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f2 fw6 ph0 mh0">Register</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" for="name">Name</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-200" type="text" name="name"  id="name" />
		      </div>
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
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={ () => onRouteChange('main')} />
		    </div>
		</main>
		</article>
	);
}

export default Register;