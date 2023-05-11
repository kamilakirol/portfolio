import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import MenuCircle from "./components/menuCircle/MenuCircle";
import "./scss/main.scss";

function App() {
  return (
    <main className="main">
      <ScrollToTop />
      <MenuCircle />
      <Banner />
      <About />
    </main>
  );
}

export default App;
