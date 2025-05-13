export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Mesa del Chef. Todos los derechos reservados.
                </p>
                <p className="footer-text">
                    Desarrollado por <a href="https://martinsimbana.vercel.app/" target="_blank">Martín Simbaña</a>
                </p>
            </div>
        </footer>
    );
}