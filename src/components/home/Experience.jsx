import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <Jumbotron id="experiences" className="bg-light">
      <Container>
        <h2 className="display-4 mb-5 text-center">
          {experiences.heading}
        </h2>
        <Row>
          {
            experiences.data.map((data, index) => {
              return <ExperienceCard key={index} data={data} />
            })
          }
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Experience;