import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import "./App.css";

const App = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <AboutUs />
    </Container>
  );
};

export default App;
