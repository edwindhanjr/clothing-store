import ShopActionTypes from './shop_types';

export const updateCollections = (collectionsMap)=>({
    type : ShopActionTypes.UPDATE_COLLECTIONS,
    payload : collectionsMap
})