import React from 'react';
import '../Waves/Waves.scss';

export const Waves = props => {
	
	const waveColour = props.waveColour;
	return (
		<div>
			<div className="wave" style={{backgroundColor: waveColour}}></div>
			<div className="wave wave-two" style={{backgroundColor: waveColour}}></div>
			<div className="wave wave-three" style={{backgroundColor: waveColour}}></div>
		</div>			
  	);
}

export default Waves;