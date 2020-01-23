import React from "react";
import '../Loader/Loader.scss';


import Row from 'react-bootstrap/Row';

class Loader extends React.Component {

  render = () => {
    return (
        <Row className="pokeball_container d-flex justify-content-center align-items-center">
          <div className="pokeball">
            <div className="pokeball_button"></div>
          </div>
          <p>Loading...</p>
        </Row>
    );
  };
}

export default Loader;
