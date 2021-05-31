import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Homescreen from './components/Homescreen';
import Contact from './components/Contact';
import proj1img from './images/logo6.png';
import Nav from './components/Nav';
import FAQ from './components/FAQ';
import Rates from './components/Rates';
import Services from './components/Services';

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">

        <Nav/>

        <div className="content">
          <Route path="/faq" component={FAQ}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/rates" component={Rates}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" component={Homescreen} exact></Route>
          <Footer/>
          <br/>
        </div>
      </div>
  </BrowserRouter>

  );
}

export default App;