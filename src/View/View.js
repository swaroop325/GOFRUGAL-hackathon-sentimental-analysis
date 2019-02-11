import React, { Component } from 'react';
import Note from '../Note/Note';
import { DB_CONFIG } from '../Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import '../App.css';
class View extends Component {
    constructor(props) {
        super(props);
         this.app = firebase.initializeApp(DB_CONFIG); 
         this.database = this.app.database().ref().child('/reports');
        this.state = { notes: [], }
    }
    componentWillMount() {
        const previousNotes = this.state.notes;
        this.database.on('child_added', snap => {
            previousNotes.push({ id: snap.key, noteContent: snap.val().empname,content:snap.val().achievement })
            this.setState({ notes: previousNotes })
        })
        this.database.on('child_removed', snap => { for (var i = 0; i < previousNotes.length; i++) { if (previousNotes[i].id === snap.key) { previousNotes.splice(i, 1); } } this.setState({ notes: previousNotes }) })
    }
   
    render() { return (<div className="notesWrapper">      
      <div className="notesHeader">          
        <h1>GOSURE</h1>        
        </div>      
        <div className="notesBody">   
        {this.state.notes.map((note) => { return (<Note noteContent={note.noteContent} content={note.content} noteId={note.id} key={note.id} removeNote={this.removeNote} />) })}        
        </div>         
        </div>
        ); 
    }
}
export default View;