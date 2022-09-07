import "../style/Footer.css";

function Footer() {
    return (
        <div className="Footer">
            <div className="liens-footer">
                <a className="footer-carnet" href="/">Mon carnet</a>
                <a className="footer-historique" href="/">Mon historique</a>
                <a className="footer-contact" href="/">Contact</a>
            </div>
            <p className="txt-footer">Développé par Rémy Cottrez | 2022</p>
        </div>
    );
}

export default Footer;