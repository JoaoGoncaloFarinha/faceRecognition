import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div>
			<p className='f3'>This magic brain will detect faces in pictures!</p>
			<div>
				<div className='form pa4 br3 shadow-5 center'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 white dib bg-light-purple' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;