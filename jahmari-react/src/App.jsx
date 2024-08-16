import { useState } from 'react'
import './App.css'
///// Components are capitalized

const SizeButtons = () => {
  const [fontSize, setFontSize] = useState(24);
  return  (
   <>
  <button onClick={increaseFontSize}>Increase Font</button>
  <button onClick={decreaseFontSize}>Decrease Font</button>
   </>
  )
}
const increaseFontSize = () => {
  setFontSize(fontSize + 2);
};

const decreaseFontSize = () => {
  setFontSize(fontSize - 2);
};


const LanguageButtons = () => {
  const [language, setLanguage] = useState('English');

  const translations = {
    English: "Good Morning",
    Spanish: "Buenos Días",
    "Haitian Creole": "Bonjou",
    Portuguese: "Bom Dia",
    Japanese: "Ohayō",
  }

  const Greeting = () => {
    return <h1>{translations[language]}</h1>
  }

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <>
      <Greeting />
      <button onClick={() => changeLanguage("English")}>English</button>
      <button onClick={() => changeLanguage("Spanish")}>Haitian Creole</button>
      <button onClick={() => changeLanguage("Haitian Creole")}>Portguese</button>
      <button onClick={() => changeLanguage("Portuguese")}>Spanish</button>
      <button onClick={() => changeLanguage("Japanese")}>Japanese</button>
   </>
    /*
    {Object.keys(translations).map((language) => (
        <button key={language} onClick={() => changeLanguage(language)}>
          {language}
        </button>
    ))}
    */
  )
}

function App() {
    return (
      <>
        <SizeButtons />
        <LanguageButtons />
      </>
  )
}

export default App
