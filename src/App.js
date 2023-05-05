import "./App.css";
import { Header } from "./comps/Header";
import { themeContext } from "./context/themeContext";
import { languageContext } from "./context/languageContext";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("tr");
  return (
    <div className="App">
      <themeContext.Provider value={{ theme, setTheme }}>
        <languageContext.Provider value={{ language, setLanguage }}>
          <Header />
        </languageContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export default App;
