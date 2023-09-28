// local imports
import Care from "./containers/Care";
import Hero from "./containers/Hero";
import Products from "./containers/Products";
import Reference from "./containers/Reference";
import Services from "./containers/Services";
import Footer from "./containers/Footer";

function App() {
  return (
    <>
        <Hero />
        <Services />
        <Products />
        <Reference />
        <Care />
        <Footer />
    </>
  );
}

export default App;
