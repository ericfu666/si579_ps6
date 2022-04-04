import './SavedWords.css'

const SavedWords = (props) =>{
    const {savedWordList} = props;

    const showSavedWords = ()=>{
        return savedWordList.join(', ');
    }


    return (
        <div className="row">
            <div className="col">Saved words: <span id="saved_words">{showSavedWords()}</span></div>
        </div>
    );
}

export default SavedWords;