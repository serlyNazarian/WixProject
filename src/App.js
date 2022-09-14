import "./App.css";
import MyImage from './img/2.png';
import MySecondImage from './img/3.png';
import MyThirdImage from './img/4.webp';
import MyFourthImage from './img/5.webp';
import MyFifthImage from './img/6.webp';
import MySixthImage from './img/7.webp';
import MySeventhImage from './img/8.webp';
import MyEightImage from './img/9.webp';
import MyNinthImage from './img/10.webp';
const MainPage = () => {
  return(
    <div className="MainPage">
    <div className="ContentPage1">
      <div className="logo">UA</div>
      <ul>
        <li>Projects.</li>
        <li>About.</li>
        <li>Contact.</li>
      </ul>
    </div>
    </div>
  )
}

const MainPageSecond = () => {
  return (
  <div className="Page-2">
    <h1>Project</h1>
    <div className="items">
      <div className="item">
        <img src= {MyImage} alt="cool-art" />
        <div className="hover-time">
          <h3>Project 01</h3>
        </div>
      </div>
      <div className="item">
        <img src= {MySecondImage} alt="cool-art" />
        <div className="hover-time">
          <h3>Project 02</h3>
        </div>
      </div>
      <div className="item">
        <img src= {MyThirdImage} alt="cool-art" />
        <div className="hover-time">
          <h3>Project 03</h3>
        </div>
      </div>
       <div className="item">
        <img src= {MyFourthImage} alt="cool-art" />
        <div className="hover-time">
          <h3>Project 04</h3>
        </div>
      </div>
      <div className="item">
        <img src= {MyFifthImage} alt="cool-art" />
        <div className="hover-time">
          <h3>Project 05</h3>
        </div>
      </div>
      <div className="item">
        <img src= {MySixthImage} alt="cool-art" />
        <div className="hover-time">
          <h3>Project 06</h3>
        </div>
      </div>
      <div className="item">
        <img src= {MySeventhImage} alt="cool-art" />
        <div className="hover-time">
          <h3>Project 07</h3>
        </div>
      </div>
      <div className="item">
        <img src= {MyEightImage} alt="cool-art" />
        <div className="hover-time">
          <h3>Project 08</h3>
        </div>
      </div>
      <div className="item">
        <img src= {MyNinthImage} alt="cool-art" />
        <div className="hover-time">
          <h3>Project 09</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

const MainPageThird = () => {
  return (
    <div className="Page-3"></div>
  )
}

const MainPageFourth = () => {
  return (
    <div className="Page-4">
      <h1>About</h1>
      <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story.</p>
    </div>
  )
}

const MainPageFifth = () => {
  return (
    <div className="Page-5"></div>
  )
}

function App() {
  return <div className="App">
  <MainPage />
  <MainPageSecond />
  <MainPageThird />
  <MainPageFourth />
  <MainPageFifth />
  </div>;
}

export default App;
