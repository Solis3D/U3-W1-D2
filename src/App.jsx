import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";

function App() {
  return (
    <div className=" d-flex flex-column min-vh-100">
      <MyNav title="Libreria di Merda" />

      <MyMain />

      <MyFooter text="EpiLibrary" />
    </div>
  );
}

export default App;
