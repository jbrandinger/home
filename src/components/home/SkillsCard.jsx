import React from 'react';
import { Col } from "react-bootstrap";

const SkillsCard = ({ data }) => {
  return (
    <Col lg="3">
      <div className="pb-5 text-center">
        <img className="m-0" src={data.logo} alt="" />
        <p className="lead">
          {data.name}
          <br />
        </p>

      </div>
    </Col>
  );
}

export default SkillsCard;