import React, { Component } from 'react';
import OperationType from './OperationType.js';
import Rooms from './Rooms.js';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <OperationType/>
        <Rooms/>
      </div>
    );
  }
}

export default Sidebar;
