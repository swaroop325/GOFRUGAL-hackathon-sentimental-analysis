import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newNoteContent: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    handleUserInput(e) {
        console.log(e.target.value);
        this.setState({
            newNoteContent: e.target.value
        })
        e.preventDefault();
    }

    writeNote() {
        this.props.addNote(this.state.newNoteContent);

        this.setState({
            newNoteContent: '',
        })
    }
    render() {
        return(
            <div className="formWrapper">
                <input type="text" 
                    className="noteInput" 
                    value={this.state.newNoteContent} 
                    onChange={this.handleUserInput}
                    placeholder="Write a new note..."/>
                <button className="noteButton" onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;