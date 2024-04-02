import React from 'react';
import { Button, Tooltip } from 'antd';

interface CustomButtonPropsI {
    title: string;
    icon: React.ReactNode; // React.ReactNode accepts any JSX element
    onClick: () => void;
    type: any;
    size: any;
  }

const BasicButton: React.FC<CustomButtonPropsI> = ({title  , icon , onClick, type, size} : any) => {
    console.log('hi')
    return (
        <>
        <Tooltip title={title}>
            <Button size={size} style={type === 'primary'? {backgroundColor:'rgb(54, 159, 201)'}:{backgroundColor:'white'} } type={type} icon={icon} onClick={onClick}>
                {title}
            </Button>
        </Tooltip>
        </>
    )
};

export default BasicButton;