import React, { Component } from 'react';
import { getAllGroups } from '../actions/groups_actions';
import { connect } from 'react-redux';

class SearchBar extends Component {

  state={
    searchInput: '',
    isSearching: false
  }

  handleSearch = () => {
    // console.log("Clicked, state ::: ",this.state.searchInput)
    this.props.dispatch(getAllGroups(this.state.searchInput));

    this.setState({isSearching: this.state.isSearching})
  }
  
  render() {
    // console.log(this.state.searchInput);
    
    return (
      <div>
          <input 
            type="text" 
            value={this.state.searchInput}
            name="search" 
            placeholder="Search Bar ..." 
            onChange={(e) => { this.setState({searchInput: e.target.value})}}
            />
        {
          !this.state.isSearching ? 
       
             <button value="Search" onClick={this.handleSearch} >Search </button>
        :
        // <CircularProgress  />
        null
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
     groups: state.groupData
  };
}

export default connect(mapStateToProps)(SearchBar);