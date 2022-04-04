import './Output.css'
import WordItem from './WordItem';


const Output = (props) => {
    const {wordOutputList, setSavedWordList, inputWord, isRhyme} = props;

    function ShowDescription(inputWord, isRhyme){
        if (isRhyme) {
            return 'Words that rhyme with ' + inputWord + ':';
        }
        else {
            return 'Words with a similar meaning to ' + inputWord + ':'
        }
    }

    function groupBy(objects, property) {
        // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
        // value for property (obj[property])
        if(typeof property !== 'function') {
            const propName = property;
            property = (obj) => obj[propName];
        }
    
        const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
        for(const object of objects) {
            const groupName = property(object);
            //Make sure that the group exists
            if(!groupedObjects.has(groupName)) {
                groupedObjects.set(groupName, []);
            }
            groupedObjects.get(groupName).push(object);
        }
    
        // Create an object with the results. Sort the keys so that they are in a sensible "order"
        const result = {};
        for(const key of Array.from(groupedObjects.keys()).sort()) {
            result[key] = groupedObjects.get(key);
        }
        return result;
    }


    function showWordList(myList){
        const outputList = [];
        for (let id in myList){
            let word = myList[id]['word'];
            outputList.push(<WordItem word={word} setSavedWordList={setSavedWordList}/>)
        }
        return outputList;
    }

    function showRhymeWords(wordOutputList, setSavedWordList) {

        if (wordOutputList.length==0){   
            return '(no results)';
        }
        else{
            const outputToShow = [];
            const syllableList = groupBy(wordOutputList, 'numSyllables');
            for (let key in syllableList){
                outputToShow.push(<h3>Syllables: {key}</h3>);
                outputToShow.push(<ul>{showWordList(syllableList[key])}</ul>);
            }
            return outputToShow;
    
        }
    }
    
    function showSimilarWords(wordOutputList, setSavedWordList) {
        if (wordOutputList.length==0){   
            return '(no results)';
        }
        else{
            const outputToShow = [];
            outputToShow.push(<ul>{showWordList(wordOutputList)}</ul>)
            return outputToShow;
    
        }
    }



    return (
    <>
        <div className="row">
            <h2 className="col" id="output_description">{ShowDescription(inputWord, isRhyme)}</h2>
        </div>
        <div className="output row">
            <output id = "word_output" className="col">{isRhyme ? showRhymeWords(wordOutputList, setSavedWordList) : showSimilarWords(wordOutputList, setSavedWordList)}</output>
        </div>
    </>
    );
}

export default Output;