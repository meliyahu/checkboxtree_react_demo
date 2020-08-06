import React from "react";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SubAccordion = ({ label, site_plots }) => {
  console.log("site_plots=", site_plots);
  return (
    <div style={{ marginLeft: "1%" }} key="key">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <div>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    style={{ textTransform: "capitalize" }}
                    label={label}
                    //checked={status}
                    // onClick={() => handleFilter(id)}
                    // onChange={(event) => handleChange(event, id)}
                  />
                </Form.Group>
              </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Plot</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <hr
        style={{
          border: "0.5px solid #66b3a6",
          marginTop: "0%",
          marginBottom: "0.5%",
        }}
      ></hr>
    </div>
  );
};

export default SubAccordion;
