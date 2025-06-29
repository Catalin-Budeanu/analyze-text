import { useEffect, useState } from 'react';
import './App.css';
import Textarea from './components/Textarea';
import TextareaSettings from './components/TextareaSettings';
import StatisticsCards from './components/StatisticsCards';
import LetterDensity from './components/LetterDensity';
import LogoNavbar from './assets/logo-navbar.svg';
import LightTheme from './assets/light-theme.svg';
import DarkTheme from './assets/dark-theme.svg';

//----Word Count---
//`Lorem ipsum dolor sit amet consectetur adipisicing elit.
// Odio perferendis exercitationem eum doloribus quod provident!`
// - inlocuim toate punctele, semnele

const App = () => {
  let [text, setText] = useState('');
  let [excludeSpaces, setExcludeSpaces] = useState(false);
  let [hasCharacterLimit, setHasCharacterLimit] = useState(false);
  let [characterLimit, setCharacterLimit] = useState(undefined);
  let [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkTheme]);

  return (
    <>
      <div className="navbar-section">
        <div className="navbar-logo">
          <img src={LogoNavbar} />
          <p>Character Counter</p>
        </div>
        <button
          className="button-switch-theme"
          onClick={() => setDarkTheme((prev) => !prev)}
        >
          <img src={darkTheme ? DarkTheme : LightTheme} />
        </button>
      </div>
      <h1 className="title">Analyze your text in real-time.</h1>
      <Textarea
        text={text}
        setText={setText}
        hasCharacterLimit={hasCharacterLimit}
        characterLimit={characterLimit}
      />

      <TextareaSettings
        text={text}
        excludeSpaces={excludeSpaces}
        setExcludeSpaces={setExcludeSpaces}
        hasCharacterLimit={hasCharacterLimit}
        setHasCharacterLimit={setHasCharacterLimit}
        characterLimit={characterLimit}
        setCharacterLimit={setCharacterLimit}
      />

      <StatisticsCards text={text} excludeSpaces={excludeSpaces} />

      <LetterDensity text={text} />
    </>
  );
};

export default App;
