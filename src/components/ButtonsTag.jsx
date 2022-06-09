import React from 'react';

 const ButtonsTag =({clickHandler,condition,text})=> {
    return(
<button 
className='button'
onClick={clickHandler}
disabled={condition}
>{text}</button>

    )
    
}
export default ButtonsTag

