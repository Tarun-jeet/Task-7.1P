import './App.css';

import Navbar from './components/Navbar'
import Header from './components/Header'
import ArticleArray from './components/ArticleArray';
import TutorialArray from './components/TutorialArray';

import Bottom from './components/Bottom';

function App() {
  return (
    <>
    <Navbar title="DEV@Deakin" two="POST" one="LOG IN" place="Search..."/>
    <Header />
    <ArticleArray/>
    <TutorialArray/>
    <Navbar title="SIGN UP FOR OUR DAILY INSIDER" two="SUBSCRIBE" place="Enter your email" />
    <Bottom/>
    </>
  );
}

export default App;
