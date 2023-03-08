import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Destinations from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
    </div>
  );
}

export default App;
