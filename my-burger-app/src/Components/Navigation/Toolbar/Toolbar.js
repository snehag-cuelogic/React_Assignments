import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={
             props.drawerToggleClicked
        }>
        
        </DrawerToggle>
        <div className={classes.Logo}>
            <Logo height="80%" />
        </div>
        <nav className={classes.DeskstopOnly}>
            <NavigationItems />
        </nav>

    </header>
);
export default toolbar;