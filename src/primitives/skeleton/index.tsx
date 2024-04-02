import React from 'react';
import { Skeleton } from 'antd';

interface SkeletonUIPropsI {
    type: string
}

interface widthArrI{
    id: string;
    wid?: any
}

const SkeletonUI: React.FC<SkeletonUIPropsI> = ({type}) => {
    const widthArr = [
        {id: '1', wid:600},
        {id: '2', wid:600},
        {id: '3', wid:1200},
        {id: '4', wid:600},
        {id: '5', wid:600},
        {id: '6', wid:1200},
    ]
    return(
        <>
            { type === 'list' ?
                widthArr?.map((w: widthArrI) => (
                    <Skeleton 
                        active
                        key={w.id}
                        style={{
                            background: 'white', 
                            padding:'16px' , 
                            width:600, 
                            height:200,
                            borderRadius:'10px',
                            margin:'8px'
                        }}
                     />
                ))
              
            :
                <Skeleton 
                    active
                    style={{
                        background: 'white', 
                        padding:'16px' , 
                        width:600, 
                        height:200,
                        borderRadius:'10px'
                    }}
                />
            }
        </>
    )
}
    

export default SkeletonUI;