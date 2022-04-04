import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'; 
import SavedWords from './components/SavedWords';
import InputForm from './components/InputForm';
import Output from './components/Output';

function App() {
  const [wordOutputList, setWordOutputList] = useState([]);
  const [savedWordList, setSavedWordList] = useState([]); 
  const [inputWord, setInputWord] = useState('');
  const [isRhyme, setIsRhyme] = useState(true);

  return (
    <main className="container">
    <h1 className ="row">Rhyme Finder React (579 Problem Set 6)</h1>
    <h2><a href = 'https://github.com/ericfu666/si579_ps6'>Link to my repo</a> </h2>
    <SavedWords savedWordList={savedWordList}/>
    <InputForm setWordOutputList={setWordOutputList} setInputWord={setInputWord} setIsRhyme={setIsRhyme}/>
    <Output wordOutputList={wordOutputList} setSavedWordList={setSavedWordList} inputWord={inputWord} isRhyme={isRhyme}/>


    <div className="row">
        <h2 className="col" id="output_description"></h2>
    </div>
    <div className="output row">
        <output id = "word_output" className="col"></output>
    </div>
  </main>
  );
}

export default App;
