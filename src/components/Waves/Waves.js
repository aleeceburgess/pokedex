import React from 'react';
import '../Waves/Waves.scss';

export const Waves = props => {
	
	return (
		<div>
			<div className="wave" style={{backgroundColor: props.detailColour}}></div>
			<div className="wave wave-two" style={{backgroundColor: props.detailColour}}></div>
			<div className="wave wave-three" style={{backgroundColor: props.detailColour}}></div>
		</div>			
  	);
}

export default Waves;