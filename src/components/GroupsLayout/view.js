import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MediaControlCard from './card';

import { getAllGroups } from '../../actions/groups_actions';


class CardSection extends Component {

state = ({
  grp: [],
  isLoading: true,
  cardAvail: 50,
  skip: 100,
  pageNum: 1,
  groupSearch: null
})

componentDidMount(){

  this.setState({groupSearch: this.props.search})
}


loadPage = (pageNum) => {
  this.props.dispatch(getAllGroups(this.state.groupSearch, this.state.cardAvail ,pageNum));
  this.setState({pageNum})
}

  render() {
    const Group = this.props.groups;
    
    return (
      
      Group.group ?

      <div className="container">
        <div className="col-md-12">
          <div className="row">
            {
              Group.group.map((card, i) => 
                <div className="col-md-4" style={{marginBottom: 16, paddingLeft: 0}} key={i}>
                  <div>
                       <Link to={`/gallery/${card.nsid}`} >
                        <MediaControlCard 
                          title={card.name ? card.name : null} 
                          iconfarm={card.iconfarm ? card.iconfarm : 0}
                          iconserver={card.iconserver ? card.iconserver : null}
                          nsid={card.nsid ? card.nsid : null}
                          members={card.members ? card.members : 0}
                          pool_count={card.pool_count ? card.pool_count : 0}
                          topic_count={card.topic_count ? card.topic_count : 0}
              
                        />
                       </Link> 
                  </div>
                </div>
              )
            }
          </div>
        </div>
    
    {/* These buttons are basically use for next and prev page and also conditions applied on these buttons so that user can feel better experience */}

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
            Group ? <b>Page : {Group.page}</b> : null
          }
    
        {
            Group ? 
                (
                    ((Group.pages -1) > this.state.pageNum)
                    ?
                        <button style={{marginLeft: '1%'}} className="btn-primary" onClick={() => this.loadPage(this.state.pageNum + 1)}> Next <i className="fa fa-angle-right" ></i></button>
                    :
                    null
                )
                :null
        }

        {
            Group ? 
                (
                    ((Group.pages -1) > this.state.pageNum)
                    ?
                    <button className="btn-primary" style={{marginLeft: '1%'}} onClick={() => this.loadPage(Group ? (Group.pages - 1) : 1)}> <i className="fa fa-forward"></i> Last</button>  
                    :
                    null
                )
                :null
        }

      </center>
   
   </div>

   </div>

      :
      
       
        <center>
          <h3>
            Flickr Groups 
            Search from search bar to view your desire groups and their photo gallery pool.
          </h3>
        </center>
      
     
     

    );
  }
}

const styles = {
  bgColor: {
    backgroundColor: '#F3F5F6'
  }
}

function mapStateToProps(state) {
  return {
     groups: state.groupData,
     search: state.searchGroupText
  };
 }

export default connect(
  mapStateToProps,
)(CardSection);