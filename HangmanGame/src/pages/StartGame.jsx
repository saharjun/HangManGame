import { Link } from "react-router-dom";
import TextInputFromContainer from '../components/TextInputForm/TextInputFormContainer'


// Function to Start the game
function StartGame() {

    // React Fragment
    return (
        <>
            <h1>Start Game</h1>
            <TextInputFromContainer />
            <Link to="/play" className="text-blue-500">Play Game Link</Link>

        </>
    );
}

export default StartGame;