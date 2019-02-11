import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
class Note extends Component {
    constructor(props) {
        super(props);
    this.content=props.content;
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id) {
        this.props.removeNote(id);
    }

    handleClick(){
        var s=this.content;
        var Sentiment = require('sentiment');
        var sentiment = new Sentiment();
        var result = sentiment.analyze(s);
        // debugger
        // var x=JSON.stringify(result)
        alert("score="+result.score)
    }

    render(props) {
        return (
            <div className="note fade-in">
                
                <p className="noteContent" onClick={()=>this.handleClick()}>{ this.noteContent } </p>
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;
