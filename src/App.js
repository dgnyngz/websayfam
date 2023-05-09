import "./App.css";
import { Header } from "./comps/Header";
import no1 from "./logolar/no1.svg";
import no2 from "./logolar/no2.svg";
import no3 from "./logolar/no3.svg";
import no4 from "./logolar/no4.svg";
import no5 from "./logolar/no5.svg";
import no6 from "./logolar/no6.svg";
import no7 from "./logolar/no7.svg";
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
          <img className="no1" src={no1} alt=""></img>
          <img className="no2" src={no2} alt=""></img>
          <img className="no3" src={no3} alt=""></img>
          <img className="no4" src={no4} alt=""></img>
          <img className="no5" src={no5} alt=""></img>
          <img className="no6" src={no6} alt=""></img>
          <img className="no7" src={no7} alt=""></img>
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
