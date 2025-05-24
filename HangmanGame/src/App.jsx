import { Route, Routes } from 'react-router-dom';
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame';
import Home from './pages/Home';
import { WordContext } from './Context/WordContext.js'
import { useState } from 'react';

// import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer';

function App() {

  const [wordList, setWordList] = useState([]);

  return (
    <WordContext.Provider value={{ wordList, setWordList }}>
      <Routes>

        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        <Route path='/' element={<Home text="Single Player" />}
        />
      </Routes>
    </WordContext.Provider>



    // <div>
    //   {/* Importing Text Input Form */}
    //   <TextInputFormContainer/>
    // </div>


  )
}

export default App
