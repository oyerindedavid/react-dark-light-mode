import { json } from "node:stream/consumers";
import { after } from "node:test";
import React , {useEffect, useState } from "react";

//Creating react app in typescript
// npx create-react-app my-app --template typescript
/** Destructuring */
person = {
    img : 'user.jgp',
    name : 'William'
}
var {img, name } = person;

/** Destructuring end*/
localStorage.getItem("key");
localStorage.setItem("key", value);
JSON.stringify(value)
JSON.parse(stringifiedValue);

/** interpolation */
<img src={`../images/${img}`} />
/** interpolation  end*/

/** Using Itenary */
let answer = isGoingOut === true ? "Yes" : "No";

let prevState = true;
//An easier way of if not true then false, i.e opposite
console.log(!prevState) // Will print out false (opposite of current val)

//useEffect
/* Memory leak can occur when the component continue 
api interaction even after has been unmounted, can happen in side effect */
//useEffect clean up

//Typescript
/* interface CoolProps{
  foo? : Number;
  bar? : String;
} */
//import {FC} from 'react';
//const Cool:FC<CoolProps> = (props) => {} gives intellisense

/**
 1. using props in ReactDOM not native DOM
 */
jokeData = [];

//Lazy state loading, note the funtion
const [data, setData] = React.useState(()=>console.log("Hi"))

export default function Note(){
   const [isImportant, setIsImportant] = React.useState("Yes");
   setIsImportant("No") //will update isImportant
   function handleClick(){};
    const jokeElements = jokeData.map(joke => {
        return <Joke  
               key={joke.id}
               setup={joke.setup} 
               punchline={joke.punchline} 
               {...joke} //ES6 array spread syntax
             />
     })
     return (
        <div>
          {jokeData.isSet === 0 && <div>Joke is set</div>} 
          {jokeElements}
          <button onClick={handleClick}></button>
        </div>
     )
}

function demo2() {
  
   const [count, setData] = useState(0);
       
   function Decrease(){
     setData(prevCount => prevCount - 1);
   }
 
   function Increase(){
     setData(function(prevCount){
          return prevCount + 1;
     })
   }
 
   const page = (
     <div className='container'>
         <div className='wrapper'>
           <div onClick={Decrease} className="decrease">-</div>
           <div className="value">{count}</div>
           
           <button onClick={(event)=>props.deleteNote(event, note.id)}
>          </button>

           <div onClick={Increase} className="increase">+</div>
         </div>
     </div>
   );
   return(page);
 }

 function demo3(){
   const [thingsArray, setThingsArray] = useState(["Things 1", "Things 2"]);


   function addThings(){
      setThingsArray(prevThingsArray => {
          return [...thingsArray, `Things ${prevThingsArray.length + 1}`]
        })
   }
 }

 function demo4(){
  const [contact, setContact] = useState({
    firstname:"John",
    lastname: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itemyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite(){
    setContact(prevContact => {
      return {
        //updating object property
       ...prevContact, isFavorite: !prevContact.isFavorite
      }
    })
  }
 }

 const [notes, setNotes] = React.useState(
  JSON.parse(localStorage.getItem("notes")) || [])
  
const [currentNoteId, setCurrentNoteId] = React.useState(
  (notes[0] && notes[0].id) || ""
)

React.useEffect(()=>{
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes])


function createNewNote() {
  const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
  }
  setNotes(prevNotes => [newNote, ...prevNotes])
  setCurrentNoteId(newNote.id)
}

function updateNote(text) {
  //This will not reposition the note
  setNotes(oldNotes => oldNotes.map(oldNote => {
      return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote
  }))


  setNotes((oldNotes)=>{
    const newArray = []
    for(let i = 0; i < oldNotes.length; i++){
      const oldNote = oldNotes[i]
      if(oldNote.id === currentNoteId){
        newArray.unshift({...oldNote, body: text})
      }else{
        newArray.push(oldNote)
      }
    }
    return newArray
  })
}

function findCurrentNote() {
  return notes.find(note => {
      return note.id === currentNoteId
  }) || notes[0]
}



function deleteNote(event, noteId){
  event.stopPropagation()
  setNotes((oldNotes) =>
      oldNotes.filter(note => note !== noteId))
}
