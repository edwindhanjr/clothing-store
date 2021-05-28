import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionFetching} from '../../Redux/shop/shop_selector';
import WithSpinner from '../with-spinner/with_spinner';
import CollectionsOverview from './collections_overview';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
});


const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer ;