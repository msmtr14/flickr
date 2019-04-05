import React, {Component} from 'react';
import {connect } from 'react-redux';

class PhotoAlt extends Component {

    render(){
        const { title, owner, secret, ownername, dateadded, photoId, server, views, description, key } = this.props;
        const date = (new Date((dateadded)*1000)).toDateString();

        // FAKE LIKES AND COMMENTS 

        const likes = Math.floor((Math.random() * 500));
        const comments = Math.floor((Math.random() * 50));
    

        const photoImgURL = `https://live.staticflickr.com/${server}/${photoId}_${secret}.jpg`;

    return (<div className="gallery-img-container">
                    <img src={photoImgURL} title={description ? description : title} alt={ownername} />
            <div className="gallery-img-content">
            <b>
              {title}
            </b>
            <br />
             <span style={{fontSize: '80%'}}>
                 by {ownername} <br /> on {date}
            </span> 
        </div>
        <div className='gallery-img-content-right' >
            
            <b>
             {likes} <i className="fa fa-thumbs-up" ></i> {comments} <i className="fa fa-comments-o" ></i> {views} <i className="fa fa-eye" ></i>
            </b> 

        </div>

            </div>
        
        );
    }
}

function mapStateToProps(state) {
    return {
       gallery: state.galleryData.photos,
       addValue: state.addValue
    };
  }

export default connect(mapStateToProps)(PhotoAlt);