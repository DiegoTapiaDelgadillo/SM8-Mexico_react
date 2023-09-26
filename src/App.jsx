import Navbar from "./components/navbar";
import Mural from "./components/mural";
import Fondo from "./components/mural/img/home.jpg";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Mural
        title={"Hola mundo"}
        body={"Soy un mural"}
        rutaFondo={Fondo}
      ></Mural>
      <Footer></Footer>
    </div>
  );
}
