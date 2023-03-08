import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Destinations from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";
import ImageCarousel from "./components/imageCarousel/ImageCarousel";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Destinations />
      <Search />
      <Selects />
      <ImageCarousel />
      <Footer />
    </div>
  );
}

export default App;
