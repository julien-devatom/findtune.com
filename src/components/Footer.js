import React from "react";
import '../assets/css/components/footer.css'

export default function Footer() {

  return(
    <footer className="mainfooter" role="contentinfo">
    <div className="footer-middle">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="footer-pad">
            <h4>Help</h4>
            <ul className="list-unstyled">
              <li><a href="#"></a></li>
              <li><a href="#">Payment Center</a></li>
              <li><a href="#">Contact Directory</a></li>
              <li><a href="#">Forms</a></li>
              <li><a href="#">News and Updates</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="footer-pad">
            <h4>Information</h4>
            <ul className="list-unstyled">
              <li><a href="#">Website Tutorial</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Webmaster</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <h4>Creators</h4>
          <ul className="list-unstyled">
              <li><a href="https://www.linkedin.com/in/julien-thomas-48b227173/" target="_blank">Julien Thomas</a></li>
              <li><a href="https://www.linkedin.com/in/hugo-danet/" target="_blank">Hugo Danet</a></li>
              <li><a href="https://www.linkedin.com/in/issa-issa/" target="_blank">Issa Issa</a></li>
              <li><a href="https://github.com/korrigans84/findtune.com" target="_blank">Github Repositery</a></li>
            </ul>
      </div>
      </div>
    <div className="row">
      <div className="col-md-12 copy">
        <p className="text-center">&copy; Copyright 2021 - FindTune.  All rights reserved.</p>
      </div>
    </div>
    </div>
    </div>
  </footer>

  )
}
