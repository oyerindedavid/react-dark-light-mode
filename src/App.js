import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import { useState } from "react";


function App() {
  
  const [isLight, setMode] = useState(true)

  const theme = {
   color: isLight ? "black" : "white",
   backgroundColor: isLight ? "white" : "black",
  }

function switchTheme(){
  setMode(prevData => !prevData)
}
  
 return (
   <div className="wrapper" style={theme}>
      <Navbar 
         theme={theme}
         switchTheme={switchTheme} 
      />
      <Main  />
   </div>
 )
}

export default App;
