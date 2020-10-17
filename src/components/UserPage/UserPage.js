import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import ItemTable from '../ItemTable/ItemTable';
import Header from '../Header/Header';
import FooterNav from '../FooterNav/FooterNav';


class UserPage extends Component {




  render(props) {
    console.log(this.props.store);
    return (
      <div>
        {/* <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1> */}
        <h2>THIS IS HOME</h2>
        <p>Daily Events will Render Here</p>
        <ItemTable />
        <Link to="/addevent">
          <button>Add Event</button>
        </Link>
        {/* <p>Your ID is: {this.props.store.user.id}</p> */}
        {/* <LogOutButton className="log-in" /> */}
      </div>
    )
  }
};

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
