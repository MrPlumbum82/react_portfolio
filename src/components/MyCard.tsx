import React from 'react';
import { Card } from 'antd';
interface Props {
  title: string,
  content: string,
}

const MyCard = (Props: Props) => {
  return (
    <div>
      <Card
        title={Props.title}
        style={{ width: 300 }}
      >
        <p>{Props.content}</p>
      </Card>
    </div>
  );
}

export default MyCard;