import React from "react";
import SkillsCard from "./SkillsCard";
import { Jumbotron } from "./migration";
import { Container, Row } from "react-bootstrap";

const Skills = ({ skills }) => {
  return (
    <section className="section bg-light">
      <Container>
        <Jumbotron>
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
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Skills;
