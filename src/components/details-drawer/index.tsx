import React from 'react';
import { Drawer } from 'antd';
import { useArticlesData } from '../../utils/hooks/useArticlesData';
import { DetailsOfArticleI } from '../../utils/constant/interface';
import SkeletonUI from '../../primitives/skeleton';
import ErrorContainer from '../error-container';

interface DetailsDrawerPropsI {
    drawerTitle: string;
    detailsOfArticles: DetailsOfArticleI
}
const DetailsDrawer: React.FC<DetailsDrawerPropsI> = ({drawerTitle, detailsOfArticles}) => {
  const {open, onClose, isDetailsLoading, detailsError} = useArticlesData()
   
  return (
      <Drawer title={drawerTitle} onClose={onClose} open={open}>
        {!detailsError ? 
            !isDetailsLoading ?
            <div className="drawer_container">
            <h3>{detailsOfArticles?.title}</h3>
            <p>{detailsOfArticles?.summary}</p>
            <p>{detailsOfArticles?.fullText}</p>
            </div>
            :
            <SkeletonUI type='drawer'/>
            :
            <ErrorContainer message='Getting server error, sorry for inconvenience, Just reload'/>
            }
      
      </Drawer>
  );
};

export default DetailsDrawer;