import React, { useState } from 'react';

// import MyImage from './imgs/2.png';
import './SecondPage.css';

const SecondPage = () => {

  const [images] = useState([
    {id: 1, name: 'MyFirstImage', path: require('./imgs/2.png')},
    {id: 2, name: 'MySecondImage', path: require('./imgs/3.png')},
    {id: 3, name: 'MyThirdImage', path: require('./imgs/4.webp')},
    {id: 4, name: 'MyFourthImage', path: require('./imgs/5.webp')},
    {id: 5, name: 'MyFifthImage', path: require('./imgs/6.webp')},
    {id: 6, name: 'MySixthImage', path: require('./imgs/7.webp')},
    {id: 7, name: 'MySeventhImage', path: require('./imgs/8.webp')},
    {id: 8, name: 'MyEightImage', path: require('./imgs/9.webp')},
    {id: 9, name: 'MyNinthImage', path: require('./imgs/10.webp')},
  ])
  // console.table(images);
  return (
  <div className="Page-2">
    <h1>Project</h1>
     {/* <img src= {require('./imgs/2.png')} alt="cool-art11" /> */}
     {/* <img src= {require(images[0].path)} alt="cool-art11" /> */}
     {/* <img src= {require(images[0].path)} alt="cool-art11" /> */}
    <div className="items">
      {images.map((img) =>(
      <div className="item">
        <img key={img.id} src= {img.path} alt="cool-art" />
        <div className="hover-time">
          <h3>{img.id}</h3>
        </div>
      </div>
      ))}
    </div>
  </div>
  )
}
// console.count("allooo");
export default SecondPage;