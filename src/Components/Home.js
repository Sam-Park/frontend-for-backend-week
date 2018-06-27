import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Button, Card, CardBody, Container, CardTitle, Row } from "reactstrap";

const Home = () => {
  return (
    <div>
      <NavBar />

      <h1>Welcome to the site</h1>
    
      <Link to="/login">
        <Button
          color="danger"
          size="lg"
          style={{ boxShadow: "1px 1px 3px black", marginBottom: "20px", marginTop: '10px' }}
        >
          Log in here to get started!
        </Button>
      </Link>
      <br />
      <h3>Don't have an Account?</h3>
      <Link to="/register">
        <Button
          color="danger"
          size="lg"
          style={{ boxShadow: "1px 1px 3px black", marginTop: "10px" }}
        >
          Click here to Register
        </Button>
      </Link>
      <Row>
        <Container
          style={{ display: "flex", maxWidth: "45%", justifyContent: "center" }}
        >
          <Card
            style={{
              marginTop: "40px",
              padding: "30px",
              boxShadow: "2px 2px 4px black"
            }}
          >
            <CardTitle>Stuff About Things</CardTitle>
            <CardBody>
              2pa 3p 3pa assist percentage (available since the 1964-65 season
              in the nba); the formula is 100 * ast / (((mp / (tm mp / 5)) * tm
              fg) - fg). assist percentage is an estimate of the percentage of
              teammate field goals a player assisted while he was on on the
              floor. blk% fg% field goal attempts (includes both 2-point field
              goal attempts and 3-point field goal attempts) ft g gmsc pace per
              36 minutes a statistic (e.g., assists) divided by games. pprod stl
              steal percentage (available since the 1973-74 season in the nba);
              the formula is 100 * (stl * (tm mp / 5)) / (mp * opp poss). steal
              percentage is an estimate of the percentage of opponent
              possessions that end with a steal by the player while he was on
              </CardBody>
          <img src="http://bit.ly/2jxzVXo"  style={{ padding: '30px'}}/>
          <CardBody>
              the floor. stops; dean oliver's measure of individual defensive
              stops. please see dean's book for details. tov tsa true shooting
              attempts; the formula is fga + 0.44 * fta. usage percentage
              (available since the 1977-78 season in the nba); the formula is
              100 * ((fga + 0.44 * fta + tov) * (tm mp / 5)) / (mp * (tm fga +
              0.44 * tm fta + tm tov)). usage percentage is an estimate of the
            </CardBody>
            
          </Card>
        </Container>

      </Row>
          <br />
          <br />
    </div>
  );
};

export default Home;
