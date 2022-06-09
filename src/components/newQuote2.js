
import React,{useState} from 'react';



const NewQuote2 =()=>  {
    
    
    return (fetch('https://api.quotable.io/random').then((response) =>
        response.json().then((data) => {
            const tempArray ={ quote: data.content, author: data.author };
            return tempArray.author;
        })
    ));
    
};

export default NewQuote2;