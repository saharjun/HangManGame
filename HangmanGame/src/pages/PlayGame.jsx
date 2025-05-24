import { Link, useLocation, } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LettersButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/Hangman";

function PlayGame() {
    const { state } = useLocation()

    // when variable changed the UI should also changed || State Variable 
    const [guessedLetters, setGuessedLetters] = useState([]);

    // variable to set the step for the images
    const [step, setStep] = useState(0);

    // FUnction to handle the letter Click 
    function handleLetterClick(letter) {
        if (state?.wordSelected?.toUpperCase().includes(letter)) {
            console.log("Correct");
        } else {
            console.log("Wrong");
            setStep(step + 1)
        }
        setGuessedLetters([...guessedLetters, letter])
    }

    return (
        <>
            <h1>Play Game</h1>
            {/* Text Of the StartGame  */}
            {/* <h1>{state.wordSelected}</h1> <br /> */}

            {/* Hint for the Word  */}
            <p>Hint : {state.wordHint}</p>


            {/* If the stateWord have some value then only executed the game*/}
            {state?.wordSelected && (
                <>
                    {/* Masked Function for the guessing the Letters */}
                    <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} /> <br />

                    {/* HangMan Image */}
                    <div>

                        <HangMan step={step} />
                    </div>

                    <div>
                        <LettersButtons text={state.wordSelected} guessedLetters={[guessedLetters]} onLetterClick={handleLetterClick} />
                    </div>
                </>
            )}
            <Link to='/' className="text-blue-400" mt-2>Home</Link> <br />
            <Link to='/start' className="text-blue-500 m-2">Start Game Link</Link>
        </>
    );
}

export default PlayGame;   