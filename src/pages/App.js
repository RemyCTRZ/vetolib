import Footer from "../components/Footer";
import Header from "../components/Header";
import Accueil from '../pages/Accueil';
import Carnet from '../pages/Carnet';
import Contact from '../pages/Contact';
import Inscription from '../pages/Inscription';
import Profil from '../pages/Profil';
import ProgRDV from '../pages/ProgRDV';
import RdvVet from '../pages/RdvVet';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../style/All.css";

function App() {
    return (
        <div className="App">
            <Router >
            <Header />
                <Routes>
                    <Route path='/' element={<Accueil />}></Route>
                    <Route path='/carnet' element={<Carnet />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/inscription' element={<Inscription />}></Route>
                    <Route path='/profil' element={<Profil />}></Route>
                    <Route path='/programmer-rdv' element={<ProgRDV />}></Route>
                    <Route path='/rdv-veterinaire' element={<RdvVet />}></Route>
                </Routes>
            <Footer />
            </Router>
        </div>
    );
}

export default App;
