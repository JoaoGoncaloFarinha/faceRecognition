import React from 'react';

const Navigation = ({onRouteChange}) => {
	return(
		<div style={{display: 'flex', justifyContent:'flex-end'}}>
		<nav className='bt bb tc mw5 mt4 w-100 ' style={{ display: 'flex', justifyContent:'flex-end'}}>
			<a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() => onRouteChange('home') }>Sign In</a>
		    <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() => onRouteChange('register') }>Register</a>
		</nav>
		</div>
	);
}

export default Navigation;