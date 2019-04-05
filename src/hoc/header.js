import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { getAllGroups, searchGroupKeyword } from '../actions/groups_actions';


class Header extends Component {

    state={
        searchInput: '',
        isSearching: false
      }

     
      handleSearch = (e) => {

// THis method is used for searching the groups.

        e.preventDefault();
        
        this.props.dispatch(getAllGroups(this.state.searchInput));         // this method gets the api data (groups info)
        
        this.props.dispatch(searchGroupKeyword(this.state.searchInput)); //this method is used for setting the user typed value in global states so that we can manage other operations easily.
    
        // this.setState({isSearching: this.state.isSearching}) // it is for throbber when fetching the data

    }

    render() {
        return (
            <div className="header">
                  <Link to="/">Flickr</Link>
                <div className="header-right">
                <div className="search">
                   <form method='GET' onSubmit={this.handleSearch}>
                   <input type="text" className="form-control input-sm" placeholder="Photos, People, or Groups" 
                    onChange={(e) => {this.setState({searchInput: e.target.value})}}
                    />
                    <button onClick={this.handleSearch} type="submit" className="btn btn-primary btn-sm"><i className="fa fa-search"></i></button>        
                   </form>
            
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
       groups: state.groupData // get the states from store to props
    };
  }

export default connect(mapStateToProps)(Header);