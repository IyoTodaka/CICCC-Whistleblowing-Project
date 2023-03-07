import React,{useState} from 'react';
import PropTypes from 'prop-types';
import '../styles/ProgressBar.css'

const Progress = ({percentage}) =>{
    const [style, setStyle] = useState();
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${percentage}%`
		}
		
		setStyle(newStyle);
	}, 200);


    // you can remove the loading bar toggling after reaching 100%, or setting timeout
    return (
        <div className="progress">
			<div className="progress-done" style={style}>
				{percentage}%
			</div>
		</div>
    )
}

Progress.propTypes = {
    percentage: PropTypes.number.isRequired
}

export default Progress