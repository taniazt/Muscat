import './App.css';
import { Advantages } from './components/Advantages';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { New } from './components/New';
import { Instagram } from './components/Instagram';
import { Delivery } from './components/Delivery';
import { Reviews } from './components/Reviews';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Advantages />
      <New />
      <Instagram />
      <Delivery />
      <Reviews />
      <About />
      <Footer />
    </>
  );
}

export default App;
