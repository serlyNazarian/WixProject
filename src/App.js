import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import MainPageThird from "./components/ThirdPage/ThirdPage";
import MainPageFourth from "./components/FourthPage/FourthPage";
import MainPageFifth from "./components/FifthPage/FifthPage";
import ContactForm from "./components/MyForm/ContactForm";
import SecondPage from "./components/SecondPage/SecondPage";

function App() {
  return (
    <div className="App">
      <MainPage />
      <SecondPage />
      <MainPageThird />
      <MainPageFourth />
      <MainPageFifth />
      <ContactForm />
    </div>
  );
}

export default App;
