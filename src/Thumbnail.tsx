import React from "react";
import { Card, Col } from "react-bootstrap";

function Thumbnail(props: any) {
  return (
    <Col lg={3} md={4} sm={6}> {/* lg=3で1行に4つ並べる */}
      <Card>
        <Card.Img
          variant="top"
          src={props.src}
          id={props.id}
          alt={props.alt}
          style={{ width: "100%", height: "auto" }}
        />
      </Card>
    </Col>
  );
}

export default Thumbnail;