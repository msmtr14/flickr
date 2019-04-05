import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


import GallerySection from './view';
import GallerySectionAlt from './viewAlt';
import { getAllGroupPoolPhoto } from '../../actions/gallery_actions';


class GalleryLayout extends Component {

    state = {
        photoAvail: 20,
        skip: 100,
        pageNum: 1,
        btnClicked: 0,
        grid: true
    }


    componentDidMount (){
        const galTopNavBtn = [
            {
                value: 20
            },
            {
                value: 50
            },
            {
                value: 100
            },
            {
                value: 500
            }
        ];
    }

    loadPage = (pageNum) => {
        this.props.dispatch(getAllGroupPoolPhoto(this.props.match.params.nsid, this.state.photoAvail ,pageNum));
        this.setState({pageNum})
    }

// Following method called for number of photos shown at a time


    loadMorePhoto = (limit, btn) => {
        
        //this is mentioned because flickr api does not allow to show more than 500 or more items in single hit.
        if(this.state.photoAvail > 500){
            this.setState({pageNum: this.state.pageNum + 1, photoAvail: 100});
        }
        
        const pageNum = this.state.pageNum;
        this.props.dispatch(getAllGroupPoolPhoto(this.props.match.params.nsid, limit, pageNum));
        this.setState({photoAvail: limit, btnClicked: btn})
    }


    gridToggle = () => {
        this.setState({grid: !this.state.grid})
        console.log(this.state.grid)
    }

    render() {
        const { gallery } = this.props;
        const galTopNavBtn = [
            {
                value: 20
            },
            {
                value: 50
            },
            {
                value: 100
            },
            {
                value: 500
            }
        ];

        return (
            <div className="container">

                <div className="col-md-12 flex" style={{ marginBottom: '6%'}}>
                    <div className="col-md-8" style={{float: 'left'}}>
                      {
                          galTopNavBtn.map((val, i) =>
                                <button style={{marginRight: '1%'}} key={i} onClick={() => this.loadMorePhoto(val.value, i)} className={(this.state.btnClicked === i) ? 'btn-success' : 'btn-info'} >
                                
                                    Load {val.value}
                                
                                </button>
                          )
                      }
                        
                    </div>
                    <div className="col-md-4">
                    <div style={{float: 'right'}}>
                    
                    <div className="col-md-2" style={{marginRight: '8px'}}>
                        <i className="fa fa-th fa-2x" style={!this.state.grid ? {color: '#777'} : null} onClick={() => this.setState({grid: true})}></i>
                    </div>
                    <div className="col-md-2">
                        <i className="fa fa-th-list fa-2x" style={this.state.grid ? {color: '#777'} : null} onClick={() => this.setState({grid: false})}></i>
                    </div>
                            
                       
                        </div>
                    </div>
                </div>

                {
                    gallery ? 
                    <div className="col-md-8">
                         Total <b>{gallery.total}</b> images found.
                         <br />
                     </div>
                     :
                     null
                }
               <Link to='/overview'>
              {
                  !this.state.grid ?
                    <GallerySection
                        urlParam = {this.props.match.params}
                        
              />

              :
                <GallerySectionAlt
                    urlParam = {this.props.match.params}
                    
              />
              }
              
               </Link>
              
               <div className="col-md-12" style={{ marginTop: '10%', marginBottom: '15%',align: 'center'}}>
                  <center>
                 {
                     this.state.pageNum !== 1 
                     ?
                         <button className="btn-warning" style={{marginRight: '1%'}} onClick={() => this.loadPage(1)}> <i className="fa fa-backward"></i> Begining</button>
                    :
                    null
                 }
                  {
                      this.state.pageNum !== 1
                        ?
                          <button className="btn-warning" style={{marginRight: '1%'}} onClick={() => this.loadPage(this.state.pageNum - 1)}> <i className="fa fa-angle-left"></i> Back</button>
                          :
                          null

                  }

                
                    {
                        gallery ? 
                            (
                                ((gallery.pages -1) > this.state.pageNum)
                                ?
                                    <button className="btn-primary" onClick={() => this.loadPage(this.state.pageNum + 1)}> Next <i className="fa fa-angle-right" ></i></button>
                                :
                                null
                            )
                            :null
                    }

                    {
                        gallery ? 
                            (
                                ((gallery.pages -1) > this.state.pageNum)
                                ?
                                <button className="btn-primary" style={{marginLeft: '1%'}} onClick={() => this.loadPage(gallery ? (gallery.pages - 1) : 1)}> <i className="fa fa-forward"></i> Last</button>  
                                :
                                null
                            )
                            :null
                    }

                  </center>
               
               </div>
             
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
       gallery: state.galleryData.photos
    };
  }

export default connect(mapStateToProps)(GalleryLayout);