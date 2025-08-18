import React from "react";
import SkillsCard from "./SkillsCard";
import { Jumbotron } from "./migration";
import { Container, Row } from "react-bootstrap";

const Skills = ({ skills }) => {
  return (
    <Jumbotron id="skills" className="bg-white">
      <Container>
        <h2 className="display-4 mb-5 text-center">
          {skills.heading}
        </h2>
        <Row>
          {
            skills.data.map((data, index) => {
              return <SkillsCard key={index} data={data} />
            })
          }
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
