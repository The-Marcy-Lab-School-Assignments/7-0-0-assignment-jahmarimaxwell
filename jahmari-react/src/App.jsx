import { useState } from 'react'
import './App.css'
/// Components are capitalized
const SizeButtons = () => {
  return  (
   <>
  <button>Increase Font</button>
  <button>Decrease Font</button>
   </>
  )
}

const Greeting = () => {
  return <h1>Good Morning</h1>
}

const LanguageButtons = () => {
  const [greeting, setGreeting] = useState(0);
  return (
    <>
    <button class="greeting" onClick={HandleButtons}>English</button>
    <button class="greeting" onClick={HandleButtons}>Haitian Creole</button>
    <button class="greeting" onClick={HandleButtons}>Portguese</button>
    <button class="greeting" onClick={HandleButtons}>Spanish</button>
    <button class="greeting" onClick={HandleButtons}>Japanese</button>
    </>
  )
}
const HandleButtons = () => {
  setGreeting(translations[language])
}


function App() {

    const translations = {
      English: "Good Morning",
      Spanish: "Buenos Días",
      "Haitian Creole": "Bonjou",
      Portuguese: "Bom Dia",
      Japense: "Ohayō",
    };

    return (
      <>
      <SizeButtons />
      <Greeting />
      <LanguageButtons />
    </>
  )
}

export default App
