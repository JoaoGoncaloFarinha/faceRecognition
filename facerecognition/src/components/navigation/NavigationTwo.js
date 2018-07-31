import React from 'react';

const NavigationTwo = ({onRouteChange}) => {
	return(
		<div style={{display: 'flex', justifyContent:'flex-end'}}>
		<nav className='bt bb tc mw5 mt4 w-100 ' style={{ display: 'flex', justifyContent:'flex-end'}}>
			<a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() => onRouteChange('register') }>Face</a>
			<a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() => onRouteChange('register') }>Object</a>
			<a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() => onRouteChange('register') }>Celebrities</a>
			<a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() => onRouteChange('home') }>Sign Out</a>
		</nav>
		</div>
	);
}

export default NavigationTwo;