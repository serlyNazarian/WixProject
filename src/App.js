import "./App.css";
import MainPage from './components/MainPage/MainPage';
import MainPageSecond from './components/SecondPage/SecondPage';
import MainPageThird from './components/ThirdPage/ThirdPage';
import MainPageFourth from './components/FourthPage/FourthPage';
import MainPageFifth from './components/FifthPage/FifthPage';
import ContactForm from './components/MyForm/ContactForm';

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
