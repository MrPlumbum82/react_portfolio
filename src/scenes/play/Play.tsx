import React from 'react';
import { Button, Card, Row, Col } from 'antd';
import MyCard from '../../components/MyCard';

interface Props {
  sceneChangeHander: (Function: number) => void
}

const Play = (Props: Props) => {
  return (
    <div>

      <Button type="primary" onClick={() => Props.sceneChangeHander(0)}>Main</Button>
      <Button type="primary" onClick={() => Props.sceneChangeHander(1)}>Work</Button>
      <Button type="primary" onClick={() => Props.sceneChangeHander(3)}>Rest</Button>

      <Row type="flex" justify="space-around">
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
          <MyCard title="Conways Game of Life" content="Conways Game of Life"/>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <MyCard title="Forest Fire Simulator" content="Forest Fire Simulator" />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <MyCard title="Voroni Generator" content="Voroni Generator" />
        </Col>
      </Row>

      <Row type="flex" justify="space-around">
      {/* <Row> */}
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <MyCard title="Frogs And Toads" content="Frogs And Toads" />
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <MyCard title="Java Pong" content="Java Pong" />
        </Col>
      </Row>

      <Row type="flex" justify="space-around">
      {/* <Row> */}
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <MyCard title="My Asteroids" content="My Asteroids" />
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <MyCard title="My Racing" content="My Racing" />
        </Col>
      </Row>

    </div>
  );
}

export default Play;