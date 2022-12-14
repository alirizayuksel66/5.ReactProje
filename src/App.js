import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {

  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('TR')

  return(
    <div className="App">
      <Header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} ></Header>
      App
      <Footer theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} ></Footer>
    </div>
  );
}

export default App;