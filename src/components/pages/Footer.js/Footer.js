import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container } from 'reactstrap';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div >
      <Jumbotron className="bg-dark text-white dark rounded-0">
        <Row>
          <Col className="text-center">
            <h1>Join our exclusive membership to receive the latest news and trends</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="lead">You can unsubscribe at any time</p>
          </Col>
        </Row>
        <Container className="themed-container mr-2 mt-3">
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className=" mr-sm-2">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col lg="4" >
              <p><h2> About Us</h2></p>
              <Nav vertical >
                <NavItem >
                  <NavLink href='/sign-up'>How it works</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Testimonials</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink href="/">Careers</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Investors</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Terms of Service</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg="4" >
              <p> <h2> Contact Us </h2></p>
              <Nav vertical>
                <NavItem>
                  <NavLink href='/'>Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Support</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Destinations</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Sponsorships</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg="4" >
              <p> <h2> Videos</h2></p>
              <Nav vertical>
                <NavItem>
                  <NavLink href='/'>Submit Video</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Ambassadors</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Agency</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Influencer</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
        <Container className="mt-3">
          <Row>
            <Col lg="4" >
              <MdFingerprint className='navbar-icon' />
              LAVISH
            </Col>
            <Col lg="4" >
              LAVISH © 2020
            </Col>
            <Col lg="4" >
              <Nav >
                <NavItem>
                  <NavLink href={
                    'https://www.facebook.com'
                  }><FaFacebook /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={
                    'https://www.instagram.com/?hl=tr'
                  }><FaInstagram /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={
                    'https://www.youtube.com'
                  }><FaYoutube /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={
                    'https://www.linkedin.com/in/volkan-tabanlı-0825721a5/'
                  }><FaLinkedin /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={
                    'https://twitter.com/?lang=tr  '
                  }><FaTwitter /></NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Footer;