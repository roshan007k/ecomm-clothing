import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {firestore,convertCollectionsSnapshotTOMap} from '../../firebase/firebase.utils'

import WithSpinner from '../../components/with-spinner/with-spinner.components';
import {updateCollections} from '../../redux/shop/shop.actions'

const CollectionOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);
class  ShopPage extends React.Component {
  state={
    loading:true
  };
  unsubscribeFromSnapshot=null;

  componentDidMount(){
    const {updateCollections}=this.props
    const collectionRef=firestore.collection('collections');
    // fetch('https://firestore.googleapis.com/v1/projects/ecom-cloths/databases/(default)/documents/').then(response=>response.json());
    collectionRef.get().then( snapshot=>{
    const collectionsMap=  convertCollectionsSnapshotTOMap(snapshot)
    updateCollections(collectionsMap);
    this.setState({loading:false});

    });

  }
  render(){
    const {match}=this.props;
    const {loading}=this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={loading}{...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading}{...props} />}  />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>({
    updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps) (ShopPage);
