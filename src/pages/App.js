import Footer from "../components/Footer";
import Header from "../components/Header";
import Accueil from "./Accueil";
import Carnet from "./Carnet";
import Contact from "./Contact";
import Profil from "./Profil";
import "../style/All.css";
import ProgRDV from "./ProgRDV";

function App() {
    return (
        <div className="App">
            <Header />
            <ProgRDV />
            <Footer />
        </div>
    );
}

export default App;
