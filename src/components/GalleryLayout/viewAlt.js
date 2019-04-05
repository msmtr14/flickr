import React, { Component, Suspense } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import Loader from '../../hoc/loader';

import { getAllGroupPoolPhoto } from '../../actions/gallery_actions';

const PhotoAlt = React.lazy(() => import('./photoAlt'));

class GallerySectionAlt extends Component {
    state = {
        data: {
            perPage: 20,
            groupId: '',
            page: 1
        }
    }

        componentDidMount(){
                
                this.props.dispatch(getAllGroupPoolPhoto(this.props.urlParam.nsid));


        }

    loadGroupGallery = (data) => {
         this.props.dispatch(getAllGroupPoolPhoto());
        }

    render() {
        const { gallery, urlParam } = this.props;
        // console.log(gallery)
  
  return (

        (urlParam.nsid) ? 
        <div>

            <div className='col-md-12' >
                <div className='row'>
                <div className="gal">
                                
                        {/* GRID 2 */}

                        {
                            gallery ?
                            
                            gallery.photo.map((photo, i) => 
                                <Suspense key={i} fallback={<Loader />}>
                                    <PhotoAlt 
                                        key={i} 
                                        title = {photo.title}
                                        owner = {photo.owner}
                                        secret = {photo.secret}
                                        ownername = {photo.ownername}
                                        dateadded = {photo.dateadded}
                                        photoId = {photo.id}
                                        server = {photo.server}
                                        views = {photo.views}
                                        description = {photo.description._content}
                                       
                                    />
                                    </Suspense>
                            )
                            :
                            null
                        }
                    </div>
            </div>
            </div>
        </div>
          :
          <div>
              <Redirect to='/groups' />
          </div>
        );
    }
}


function mapStateToProps(state) {
    return {
       gallery: state.galleryData.photos
    };
  }

export default connect(mapStateToProps)(GallerySectionAlt);
