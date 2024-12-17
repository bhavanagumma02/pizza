import logo from "./logo.svg";
import "./App.css";
import Menu from "./Menu";
import Header from "./hdf/Header";
import Details from "./hdf/Details";
import Footer from "./hdf/Footer";

function App() {
  // pizzaDat(map (i) => {
  //    const pizzai ={i}
  // })
  return (
    <div className="container">
      <Header />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
