import React from 'react'
import { Button, Layout, Row, Col } from 'antd'

const { Header, Footer, Content } = Layout

interface Props {
  sceneChangeHander: (Function: number) => void
}

const Main = (Props: Props) => {

  return (
    <div>
      <Layout>

        <Header>Sadan Mallhi</Header>

        <Content>
          <Row>
            <Col span={8}>
              <Button type="primary" onClick={() => Props.sceneChangeHander(1)}>Work</Button>
            </Col>
            <Col span={8}>
              <Button type="primary" onClick={() => Props.sceneChangeHander(2)}>Play</Button>
            </Col>
            <Col span={8}>
              <Button type="primary" onClick={() => Props.sceneChangeHander(3)}>Rest</Button>
            </Col>
          </Row>
        </Content>

        <Footer></Footer>

      </Layout>
    </div>
  );
}

export default Main;