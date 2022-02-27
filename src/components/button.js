

const Button = ( {setNewColor, setNewQuote, setNewAuthor, getRandomColor, newQuote, actualColor} ) => {    
    return(
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
    )   
};

export default Button;