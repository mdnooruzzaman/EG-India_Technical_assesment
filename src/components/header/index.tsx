import React from 'react'
import SearchInput from '../../primitives/search-input'
import BasicAvatar from '../../primitives/basic-avatar'
import './index.css'
import BasicButton from '../../primitives/button'
import { SearchOutlined } from '@ant-design/icons';
import { useArticlesData } from '../../utils/hooks/useArticlesData'

const Header: React.FC = () => {
    const {handleSearch} = useArticlesData()

    return(
            <div className='header_container'>
                <div className="header_logo"><h2>EG-India Article </h2></div>
                <div className="header_search">
                    <SearchInput 
                        style={{width: 350, height: 40, marginRight:10}} 
                        placeholder='Search articles...' 
                    />
                    <BasicButton 
                        title='Search' 
                        icon={<SearchOutlined/>} 
                        onClick={handleSearch} 
                        type='primary' 
                        size='large'
                    />
                </div>
                <div className="header_avatar">
                    <BasicAvatar size='large' style={{}} src='https://api.dicebear.com/7.x/miniavs/svg?seed=1'/>
                </div>
            </div>
    )
}
export default Header