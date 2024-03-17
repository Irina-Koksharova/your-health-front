import Container from './components/Container';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import ButtonUp from './components/ButtonUp';
import './App.css';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <AboutUs />
        <HowItWorks />
      </Container>
      <ButtonUp />
    </>
  );
};

export default App;
