import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Creators</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Julien Thomas</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Issa Issa</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Hugo Danet</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.futurelienewbversfindtune.com"> FindTune.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;