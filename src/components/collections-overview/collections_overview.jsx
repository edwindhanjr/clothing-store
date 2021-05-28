import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection_preview';
import { selectCollectionsForPreview } from '../../Redux/shop/shop_selector';

import {CollectionsOverviewContainer} from './collection_overview.styles';

const CollectionOverview = ({collections})=>(
    <CollectionsOverviewContainer>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);

