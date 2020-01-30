import React from "react";
import '../Loader/Loader.scss';

import Row from 'react-bootstrap/Row';

const Loader = () => {
  return (
      <Row className="pokeball_container d-flex justify-content-center">
        <div className="pokeball">
          <div className="pokeball_button"></div>
        </div>
        <p className="loading-text">Loading...</p>
      </Row>
  );
}

export default Loader;
