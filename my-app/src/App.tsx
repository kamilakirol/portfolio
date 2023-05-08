import Banner from "./components/banner/Banner";
import MenuCircle from "./components/menuCircle/MenuCircle";
import "./scss/main.scss";

function App() {
  return (
    <main className="main">
      <MenuCircle />
      <Banner />
    </main>
  );
}

export default App;
