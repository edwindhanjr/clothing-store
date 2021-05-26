import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection_item';

import {CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection_preview.styles';


const CollectionPreview =({title, items})=>(
    <CollectionPreviewContainer>
        <TitleContainer>{title}</TitleContainer>
        <PreviewContainer>
        {
            items
            .filter((item,idx)=>idx<4)
            .map((item)=>(
                <CollectionItem key={item.id} item={item} />
            ))
        }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);