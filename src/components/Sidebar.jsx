import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar className="hide" />
      <Search className="hide" />
      <Chats className="hide" />
    </div>
  );
};

export default Sidebar;
