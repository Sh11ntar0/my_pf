import About from "./components/About";
import Footer from "./components/Footer";
import Works from "./components/Works";
import { Reset } from "styled-reset";
import Hero from "./components/Hero";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Reset />
      <Layout>
        <Hero />
        <About />
        <Works />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
