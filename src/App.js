import "./App.css";
import MainPage from './MainPage/MainPage';
import MainPageSecond from './SecondPage/SecondPage';
import MainPageThird from './ThirdPage/ThirdPage';
import MainPageFourth from './FourthPage/FourthPage';
import MainPageFifth from './FifthPage/FifthPage';
import ContactForm from './MyForm/ContactForm';

function App() {
  return <div className="App">
  <MainPage />
  <MainPageSecond />
  <MainPageThird />
  <MainPageFourth />
  <MainPageFifth />
  <ContactForm />
  </div>;
}

export default App;
