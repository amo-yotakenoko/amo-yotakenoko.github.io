import { useState } from 'react';
import Thumbnail from './Thumbnail';
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Thumbnail src="images/thumbnail/sotuken.jpg" id="sotuken" alt="研究" />
          <Thumbnail src="images/thumbnail/pompom_pattern.jpg" id="pompom_pattern" alt="ポンポンパターン" />
          <Thumbnail src="images/thumbnail/3Dbeads.jpg" id="3Dbeads" alt="3Dビーズ" />
          <Thumbnail src="images/thumbnail/colorSeggester.jpg" id="colorSeggester" alt="カラーサジェスチャー" />
        </Row>
      </Container>
    </>
  );
}

export default App;