import React, {useState} from 'react';



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper Case Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText); 
    }

    const handleLoClick = () => {
        // console.log("Upper Case Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText); 
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText); 
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value )
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>{props.heading} </h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length - 1} words and {text.length}</p>
            <p>{ 0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something to preview it"}</p>
        </div>
    </>
  );
}
