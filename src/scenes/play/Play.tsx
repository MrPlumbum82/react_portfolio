import React from 'react';
import { Button, Card, Row, Col } from 'antd';

interface Props {
  sceneChangeHander: (Function: number) => void
}

const Play = (Props: Props) => {
  return (
    <div>

      <Button type="primary" onClick={() => Props.sceneChangeHander(0)}>Main</Button>
      <Button type="primary" onClick={() => Props.sceneChangeHander(1)}>Work</Button>
      <Button type="primary" onClick={() => Props.sceneChangeHander(3)}>Rest</Button>

      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            title="Conways Game of Life"
            style={{ width: 300 }}
          >
            <p>Conways Game of Life</p>
          </Card>

        </Col>

        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            title="Forest Fire Simulator"
            style={{ width: 300 }}
          >
            <p>Forest Fire Simulator</p>
          </Card>

        </Col>

        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

          <Card
            title="Voroni Generator"
            style={{ width: 300 }}
          >
            <p>Voroni Generator</p>
          </Card>

        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            title="Frogs And Toads"
            style={{ width: 300 }}
          >
            <p>Frogs And Toads</p>
          </Card>

        </Col>

        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            title="Java Pong"
            style={{ width: 300 }}
          >
            <p>Java Pong</p>
          </Card>

        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            title="My Asteroids"
            style={{ width: 300 }}
          >
            <p>My Asteroids</p>
          </Card>

        </Col>

        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            title="My Racing"
            style={{ width: 300 }}
          >
            <p>My Racing</p>
          </Card>

        </Col>

      </Row>

    </div>
  );
}

export default Play;