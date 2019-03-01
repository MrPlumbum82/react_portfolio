import React from 'react';
import { Button, Empty } from 'antd';

interface Props {
  sceneChangeHander: (Function: number) => void
}

const Work = (Props: Props) => {
    return (
      <div>

      <Button type="primary" onClick={() => Props.sceneChangeHander(0)}>Main</Button>
      <Button type="primary" onClick={() => Props.sceneChangeHander(2)}>Play</Button>
      <Button type="primary" onClick={() => Props.sceneChangeHander(3)}>Rest</Button>

        <Empty
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
          description={
            <span>
              Customize Me Please
            </span>
          }
        >
        </Empty>
      </div>
    );
  }

export default Work;