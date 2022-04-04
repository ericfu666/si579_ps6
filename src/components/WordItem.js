import './WordItem.css';


const WordItem = (props) =>{
    const {word, setSavedWordList} = props;

    function saveButtonHandler(e){
        setSavedWordList((currentWordList) =>{
            return [...currentWordList, word];
        })
    }
    

    return (
        <li>
            {word}
            <button onClick={saveButtonHandler} className={'green_btn'} >
            Save
            </button>
        </li>
    )
}
export default WordItem;