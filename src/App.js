import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SubAccordion from "./SubAccordion";
import ReactCheckBoxTree from "./ReactCheckBoxTree";
import WidgetTree from "./MyFuncCheckBoxTree";

function App() {
  return (
    <div className="App">
      {/* <MyAccordion /> */}
      {/* <ReactCheckBoxTree /> */}
      <WidgetTree />
    </div>
  );
}
const sites = [
  {
    site_name: "Alice Mulga",
    site_plots: [
      { plot_name: "Asm" },
      { plot_name: "Asn" },
      { plot_name: "Callitris" },
      { plot_name: "Core1ha" },
    ],
  },
  {
    site_name: "Boya",
    site_plots: [
      { plot_name: "Floodplain" },
      { plot_name: "Gimlet" },
      { plot_name: "Nadir" },
      { plot_name: "Hummock_oblique" },
    ],
  },
  {
    site_name: "Cowbay",
    site_plots: [
      { plot_name: "Redgum" },
      { plot_name: "Tte" },
      { plot_name: "Tussock_oblique" },
      { plot_name: "Vivotech_overstorey" },
    ],
  },
];
function MyAccordion() {
  return (
    <div style={{ marginLeft: "1%" }} key="key">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              Sites
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {sites.map((site) => (
                <div>
                  <SubAccordion
                    key={site.site_name}
                    label={site.site_name}
                    site_plots={sites.site_plots}
                  />
                </div>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
              Image Type
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Panorama</Card.Body>
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
}
export default App;
