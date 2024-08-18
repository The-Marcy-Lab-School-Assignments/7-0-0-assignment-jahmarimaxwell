import { useState } from 'react'
import './App.css'

///// Components are capitalized
const SizeButtons = ({ fontSize, setFontSize }) => {
  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };
  
  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <>
      <button onClick={increaseFontSize}>Increase Font</button>
      <button onClick={decreaseFontSize}>Decrease Font</button>
    </>
  );
};

// LanguageButtons Component
const translations = {
  English: "Good Morning",
  Spanish: "Buenos Días",
  "Haitian Creole": "Bonjou",
  Portuguese: "Bom Dia",
  Japanese: "Ohayō",
};

const LanguageButtons = ({ fontSize }) => {
  const [language, setLanguage] = useState('English');

  const Greeting = () => {
    return <h1 style={{ fontSize: `${fontSize}px` }}>{translations[language]}</h1>;
  };

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  return (
    /// Iterates through the object[keys] of 'translations'
    /// match the current languages value to view translated version
    <>
      <Greeting />
      <ul>
        {Object.keys(translations).map((language) => (
          <button key={language} onClick={() => changeLanguage(language)}>
            {language}
          </button>
        ))}
      </ul>
    </>
  );
};

// App Component
function App() {
  const [fontSize, setFontSize] = useState(24);

  return (
    <>
      <SizeButtons fontSize={fontSize} setFontSize={setFontSize} />
      <LanguageButtons fontSize={fontSize} />
    </>
  );
}


export default App
