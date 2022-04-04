import './InputForm.css';
import { useState } from 'react';
const InputForm = (props) =>{
    const {setWordOutputList, setInputWord, setIsRhyme} = props;

    const [inputVal, setInputVal] = useState('');

    
    function datamuseRequest(url) {
            fetch(url)
              .then((response) => response.json())
                .then((json) => {
                    setWordOutputList(Object.values(json)); 
                    setInputWord(inputVal);
                    console.log(inputVal);
                });
    }

    function getDatamuseRhymeUrl() {
        return `https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': inputVal})).toString()}`;  
    }

    function getDatamuseSimilarToUrl() {
        return `https://api.datamuse.com/words?${(new URLSearchParams({'ml': inputVal})).toString()}`;
    }





    return (
        <div className="row">
            <div className="input-group col">
                <input className="form-control" type="text" placeholder="Enter a word" id="word_input" onChange={(e) => setInputVal(e.target.value) } 
                onKeyPress={(e) => {
                    if (e.key === 'Enter'){
                        datamuseRequest(getDatamuseRhymeUrl());
                        setIsRhyme(true);
                    }
                }}/>
                <button id="show_rhymes" type="button" className="btn btn-primary" onClick={(e)=>{
                    datamuseRequest(getDatamuseRhymeUrl());
                    setIsRhyme(true);
                }}>Show rhyming words</button>
                <button id="show_synonyms" type="button" className="btn btn-secondary" onClick={(e) => {
                            datamuseRequest(getDatamuseSimilarToUrl());
                            setIsRhyme(false);
                }

                }>Show synonyms</button>
            </div>
        </div>
    );

}

export default InputForm;