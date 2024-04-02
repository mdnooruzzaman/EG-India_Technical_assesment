import React from 'react';
import { Card } from 'antd';

interface BasicCardPropsI {
    title: string;
    isBordered: boolean;
    style: React.CSSProperties;
    summary: string;
    onClick: () => void
}

const BasicCard: React.FC<BasicCardPropsI> = ({title, isBordered, style, summary, onClick}) => (
  <Card title={title} bordered={isBordered} style={style} onClick={onClick}>
    <p>{summary}</p>
  </Card>
);

export default BasicCard;