import React from 'react';
import '../../Style/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <ul className="list-inline">
              <li className="list-inline-item"><span className="footer_text">Inicio</span></li>
              <li className="list-inline-item"><span className="footer_text">Acerca de</span></li>
              <li className="list-inline-item"><span className="footer_text">Contacto</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


