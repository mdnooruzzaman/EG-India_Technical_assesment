import React from 'react'
import BasicButton from '../../primitives/button'
import { RedoOutlined } from '@ant-design/icons';

interface ErrorContainerPropsI {
    message: string;
}
const ErrorContainer:React.FC<ErrorContainerPropsI> = ({message}) => {

    const handleReload = () => {
        window.location.reload()
    }
    
    return(
        <div className="error_container">
            <p className="error_message">{message}</p>
                    <BasicButton 
                        title='Reload' 
                        icon={<RedoOutlined />} 
                        onClick={handleReload} 
                        type='default' 
                        size='default'
                    />
        </div>
    )
}
export default ErrorContainer