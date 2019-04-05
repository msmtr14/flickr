import React, { Component, Suspense } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import Loader from '../../hoc/loader';

import { getAllGroupPoolPhoto } from '../../actions/gallery_actions';

const Photo = React.lazy(() => import('./photo'));

class GallerySection extends Component {
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
  
  return (

        (urlParam.nsid) ? 
        <div>

        <div className='col-md-12' >
            <div className='row'>
            <div className="gallery1">
               
            
{/* GRID 1 */}

             {
                 gallery ? 
                 
                    gallery.photo.map((photo, i) => 
                        <figure key={i}>
                                <Suspense fallback={<Loader />}>    
                                <Photo 
                                    key = {i}
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
                      </figure>
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

export default connect(mapStateToProps)(GallerySection);
