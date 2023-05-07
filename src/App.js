import "./App.css";
import { Header } from "./comps/Header";

import { Skills } from "./comps/Skill";
import { Profile } from "./comps/Profile";
import Projects from "./comps/project/Projects";
import { Footer } from "./comps/Footer";
import { themeContext } from "./context/ThemeContext";
import { languageContext } from "./context/LanguageContext";
import { useEffect, useState } from "react";
import mockData from "./mocks/Data";
import axios from "axios";
function App() {
  const [data, setData] = useState();
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("tr");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          "https://reqres.in/api/users",
          mockData
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <div className="App">
      <themeContext.Provider value={{ theme, setTheme }}>
        <languageContext.Provider value={{ language, setLanguage, data }}>
          <Header />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </languageContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export default App;
