import ShopActionTypes from './shop.types'

import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart=()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess=(collectionsMap)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
});
export const fetchCollectionsFailure=(errorMessage)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
});
export const fetchCollectionsStartAsync=()=>{
    return dispatch=>{
        const collectionRef=firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        // fetch('https://firestore.googleapis.com/v1/projects/ecom-cloths/databases/(default)/documents/').then(response=>response.json());
        collectionRef.get().then( snapshot=>{
        const collectionsMap=  convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap))
        //updateCollections(collectionsMap);
    
        }).catch(error=>dispatch(fetchCollectionsFailure(error.message)));
    }

}

