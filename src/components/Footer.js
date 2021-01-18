import React from "react";
import '../assets/css/components/footer.css'

export default function Footer() {

  return(
    <footer class="mainfooter" role="contentinfo">
    <div class="footer-middle">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="footer-pad">
            <h4>Help</h4>
            <ul class="list-unstyled">
              <li><a href="#"></a></li>
              <li><a href="#">Payment Center</a></li>
              <li><a href="#">Contact Directory</a></li>
              <li><a href="#">Forms</a></li>
              <li><a href="#">News and Updates</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="footer-pad">
            <h4>Information</h4>
            <ul class="list-unstyled">
              <li><a href="#">Website Tutorial</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Webmaster</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <h4>Creators</h4>
          <ul class="list-unstyled">
              <li><a href="https://www.linkedin.com/in/julien-thomas-48b227173/" target="_blank">Julien Thomas</a></li>
              <li><a href="https://www.linkedin.com/in/hugo-danet/" target="_blank">Hugo Danet</a></li>
              <li><a href="https://www.linkedin.com/in/issa-issa/" target="_blank">Issa Issa</a></li>
              <li><a href="https://github.com/korrigans84/findtune.com" target="_blank">Github Repositery</a></li>
            </ul>
      </div>
      </div>
    <div class="row">
      <div class="col-md-12 copy">
        <p class="text-center">&copy; Copyright 2021 - FindTune.  All rights reserved.</p>
      </div>
    </div>
    </div>
    </div>
  </footer>

  )
}
