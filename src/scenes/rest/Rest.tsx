import React from 'react';
import { Button, Empty } from 'antd';

interface Props {
  sceneChangeHander: (Function: number) => void
}

const Rest = (Props: Props) => {
    return (
      <div>

      <Button type="primary" onClick={() => Props.sceneChangeHander(0)}>Main</Button>
      <Button type="primary" onClick={() => Props.sceneChangeHander(1)}>Work</Button>
      <Button type="primary" onClick={() => Props.sceneChangeHander(2)}>Play</Button>

        <Empty></Empty>
      </div>
    );
  }

export default Rest;