import React, { useState } from "react";
import quotes from "../db/quotes.json";
import colors from "../db/colors.json"


const random = ( json ) => {
    const idx = Math.floor( Math.random() * json.length )
    return idx
}



const QuoteBox = () => {

    // General Functions
    const getRandomQuote = () => {
        const randomQuote = quotes[ random( quotes ) ]
        return randomQuote
    },
        getRandomColor = () => {
        const randomColor = colors[ random( colors ) ]
        return randomColor.code.hex
    },
    // Create quote/author const
        newQuote = getRandomQuote(),
    // Hooks
        [ actualColor, setNewColor ] = useState( getRandomColor ),
        [ actualQuote, setNewQuote ] = useState( newQuote.quote ),
        [ actualAuthor, setNewAuthor ] = useState( newQuote.author )
    
    return(
        <div className="App" style={{background: `${ actualColor }` }}>
            <div className='quote-wrap' > 
                <blockquote>
                    <i 
                        style={{color: `${ actualColor }` }} 
                        className="fa-solid fa-quote-left fa-6x" 
                    ></i>
                    <p style={{color: `${ actualColor }` }}>
                        " { actualQuote } "
                    </p>
                </blockquote>

                <cite style={{color: `${ actualColor }` }}>
                    { actualAuthor }
                </cite>

                <button 
                    onClick={ () => {
                        setNewColor( getRandomColor )
                        setNewQuote( newQuote.quote )
                        setNewAuthor( newQuote.author )
                    }}
                    style={ {background: `${ actualColor }` } }
                > 
                    <i className="fa-solid fa-shuffle fa-xl"></i>
                </button>
            </div>
        </div>
    )
};

export default QuoteBox;