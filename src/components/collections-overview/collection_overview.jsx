import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collection_overview.styles.scss';

import CollectionPreview from '../collection-preview/collection_preview';
import { selectCollectionsForPreview } from '../../Redux/shop/shop_selector';

const CollectionOverview = ({collections})=>(
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);

