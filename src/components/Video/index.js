import React from "react";
import { Row, Col } from 'reactstrap';

import { connect } from "react-redux";

const Video = ({ activeLesson, activeModule }) => {
  return (
    <div >
      <Row>
        <Col>
          <div>
            <strong>Modelo: {activeModule.title}</strong>
            <br />
            <span>Marca: {activeLesson.title}</span><br></br>
          </div>
        </Col>
        <Col>
            <img src={activeLesson.img} width="350px"/>
        </Col>
      </Row>

      
      

      
    </div>
    
  );
};

export default connect((state) => ({
  // recebemos a licao e modulo ativo com a disparada da action
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
