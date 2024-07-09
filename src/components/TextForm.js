import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper Case Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Upper Case Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText); 
        props.showAlert("Text cleared", "success");
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value )
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2 className='mb-2'>{props.heading} </h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
        <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
    </>
  );
}
