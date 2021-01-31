import React from 'react';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {  Card, Button, CardText, CardBody} from 'reactstrap';
import { Row, Col } from 'reactstrap';


function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className="pricing__section">
        <h3 className="ml-5 pl-3" > Pricing</h3>
        <Row className="mr-5 ml-5">
          <Col lg="4" >
            <Card className="bg-primary pricing__container-card" >
              <CardBody>
                <FaFire className="container" />
                <CardText className="container">
                  <h4 > Starter </h4>
                  <h4 > $8.99 </h4>
                      per month
                  <ul className="mt-2">
                    <li>100 Transactions</li>
                    <li>2% Cash Back</li>
                    <li>$10,000 Limit</li>
                  </ul>
                </CardText>
                <Button color="warning"> Choose Plan</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" >
            <Card className="bg-dark pricing__container-card" >
              <CardBody>
                <BsXDiamondFill className="container" />
                <CardText className="container">
                  <h4 > Gold </h4>
                  <h4 > $29.99 </h4>
                    per month
                  <ul className="mt-2">
                    <li>1000 Transactions</li>
                    <li>3.5% Cash Back</li>
                    <li>$100,000 Limit</li>
                  </ul>
                </CardText>
                <Button color="warning"> Choose Plan</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" >
            <Card className="bg-primary pricing__container-card" >
              <CardBody>
                <GiCrystalize className="container" />
                <CardText className="container">
                  <h4 > Diamond </h4>
                  <h4 > $99.99 </h4>
                     per month
                  <ul className="mt-2">
                    <li>Unlimited Transactions</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                  </ul>
                </CardText>
                <Button color="warning"> Choose Plan</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
