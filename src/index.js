import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {marked} from 'marked';
function App(){
  const data="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\nAnd if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n!"
const[markdown,setmarkdown]=useState(data);
const[showmark,setmark]=useState(true);
const[showprev,setprev]=useState(true);
const divstyle1={
  display:showmark? "inline-block":"none"
};
const divstyle2={
  display:showprev? "inline-block":"none"
};
const togglemark=()=>{setmark(!showmark)}
const toggleprev=()=>{setprev(!showprev)}
 function handlechange(event){
  setmarkdown(event.target.value);
 }
  return(
    <div>
      <div id="btn-wrapper">
        <button id="mark" class="btn btn-primary" style={divstyle2}onClick={togglemark}><i class="bi bi-vector-pen "></i></button>
        <button id="view" class="btn btn-primary" style={divstyle1}onClick={toggleprev}><i class="bi bi-binoculars "></i></button>
      </div>
    <div id="wrapper">
      <textarea id="editor" value={markdown} style={divstyle2} onChange={handlechange}/>
      <div id="preview" style={divstyle1} dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>
    </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


