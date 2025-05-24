
const ALPHABET = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

// Function for the Buttons Letters 
function LettersButtons({ text, guessedLetters, onLetterClick }) {
    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters.join('').toUpperCase().split(''));

    // Function for Buttons Styles 
    const buttonStyle = function (letter) {
        if (guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`
        } else {
            return 'bg-blue-500';
        }
    }


    // function for handling click on the buttons 
    function handleLetterClick(event) {
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter)
    }

    const buttons = ALPHABET.map(letter => {
        return (
            <button
                key={`buttons ${letter}`}
                onClick={handleLetterClick}
                value={letter}
                disabled={guessedLettersSet.has(letter)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        );
    });

    return (
        <>
            {buttons}
        </>
    )

}

export default LettersButtons;