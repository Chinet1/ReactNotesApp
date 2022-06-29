import React,{useState} from "react";

function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('');
    const charLimit = 144;

    const handleChange = (event) => {
        if (charLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return (
        <div className="note new">
            <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
             bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
              m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    name="note" id="note" cols="30" rows="5" placeholder="Type here..."
    onChange={handleChange} value={noteText}/>
            <div className="mb-2">
                <small>{charLimit - noteText.length} char remaining</small><br/>
                <button className="mt-2 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs
                 leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600
                  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg
                  transition duration-150 ease-in-out"
                        onClick={handleSaveClick}>Add</button>
            </div>
        </div>
    )
}

export default AddNote