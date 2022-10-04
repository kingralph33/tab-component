import React, { useState } from 'react';

const CreateTabButton = () => {
    const [tabsArrary, updateTabsArray] = useState([])

    const handleClick = ()=> {
        updateTabsArray( arr => [...arr, `$(arr.length)`])
    }

	return (

        // When this button is pressed, it creates a new tab
		<button onClick={ handleClick } className='border-solid border-2 border-gray-400 rounded-full hover:bg-gray-200 p-2'>
			Create New Tab
		</button>
	);
};

export default CreateTabButton;
