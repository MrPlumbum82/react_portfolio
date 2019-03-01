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
            title="Default size card"
            style={{ width: 300 }}
          >
            <p>One</p>
          </Card>

        </Col>

        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Card
            title="Default size card"
            style={{ width: 300 }}
          >
            <p>Two</p>
          </Card>

        </Col>

        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

          <Card
            title="Default size card"
            style={{ width: 300 }}
          >
            <p>Three</p>
          </Card>

        </Col>
      </Row>
{/* 
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">

            <Card
              title="Default size card"
              style={{ width: 300 }}
            >
              <p>One</p>
            </Card>

          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">

            <Card
              title="Default size card"
              style={{ width: 300 }}
            >
              <p>Two</p>
            </Card>

          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">

            <Card
              title="Default size card"
              style={{ width: 300 }}
            >
              <p>Three</p>
            </Card>

          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">

            <Card
              title="Default size card"
              style={{ width: 300 }}
            >
              <p>Four</p>
            </Card>

          </div>
        </Col>
      </Row> */}
    </div>
  );
}

export default Play;