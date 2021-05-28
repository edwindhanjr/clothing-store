import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionsLoaded } from "../../Redux/shop/shop_selector";
import WithSpinner from '../../components/with-spinner/with_spinner';
import  CollectionPage from './collection';


const mapStateToProps = createStructuredSelector({
    isLoading : (state)=> !selectIsCollectionsLoaded(state)
});


const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer ;