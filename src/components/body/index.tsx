import React from 'react'
import BasicCard from '../../primitives/card'
import './index.css'
import { useArticlesData } from '../../utils/hooks/useArticlesData'
import { ListOfArticlesI } from '../../utils/constant/interface'
import SkeletonUI from '../../primitives/skeleton'
import DetailsDrawer from '../details-drawer'
import ErrorContainer from '../error-container'


const Body: React.FC = () => {
    const { listOfArticles , isListLoading, showDrawer, open, getDetailsOfArticles, detailsOfArticles, listError  } = useArticlesData()

    const handleCardClick = (id: any) => {
        showDrawer()
        getDetailsOfArticles(parseInt(id))
    }
    
    return(
        <div className='body_container'>
            {!listError ? 
               !isListLoading ? 
                listOfArticles?.map((article: ListOfArticlesI) => (
                    <BasicCard 
                        key={article?.id} 
                        title={article?.title} 
                        summary={article?.summary}
                        isBordered={false} 
                        style={{ width: 600, height:200, margin:8, cursor:'pointer', border:'0.5px solid gray' }} 
                        onClick={() => handleCardClick(article?.id)}
                    />
                ))
                :
                    <SkeletonUI type='list'/>
                :
                <ErrorContainer message='Getting server error, sorry for inconvenience, Just reload'/>
            }
         
            {open && 
                <DetailsDrawer
                    drawerTitle='Article Details'
                    detailsOfArticles = {detailsOfArticles}
                />}
        </div>
    )
}
export default Body