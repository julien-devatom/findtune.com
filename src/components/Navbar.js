import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from 'react-router-dom';
import { Drawer} from '@material-ui/core';
import './navbar.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function NavBar() {

  const TabsOrDrawer = useMediaQuery('(min-width:800px)');

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [isDrawerOpen, setDrawer] = React.useState(false)

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [value, setValue] = useLocalStorage("value", 0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawer = () => {
    setDrawer(current => !current)
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={5} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      {!TabsOrDrawer ? <Drawer
        variant="persistent"
        width={1/4}
        classes={{
          paper: classes.drawerPaper,
        }}
        open={isDrawerOpen}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.drawerInner}>
            <Tabs orientation="vertical" class="tabs" value={value} onChange={handleChangeTabs}>
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Bands" component={Link} to="/bands" />
                <Tab label="Artists" component={Link} to="/artists" />
            </Tabs>
        </div>
      </Drawer> : null }
      <AppBar position="static">
        <Toolbar>
          {!TabsOrDrawer ? <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton> : null}
          {TabsOrDrawer ? <Tabs class="tabs" value={value} onChange={handleChangeTabs}>
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Bands" component={Link} to="/bands" />
                <Tab label="Artists" component={Link} to="/artists" />
            </Tabs> : null}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <Badge badgeContent={5} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
        <ul class="dropdown-menu dropdown-menu">
        <li>
          <a href="#" class="top-text-block">
            <div class="top-text-heading">You have <b>3 new themes</b> trending</div>
            <div class="top-text-light">15 minutes ago</div>
          </a> 
        </li>
        <li>
          <a href="#" class="top-text-block">
            <div class="top-text-heading">New asset recommendation <b>Electronic Synth ZX3LK</b></div>
            <div class="top-text-light">2 hours ago</div>
          </a> 
        </li>
        <li>
          <a href="#" class="top-text-block">
            <div class="top-text-heading">New friends recommendations</div>
            <div class="top-text-light">4 hours ago</div>
          </a> 
        </li>
        <li>
          <a href="#" class="top-text-block">
            <div class="top-text-heading">Band request received</div>
            <div class="top-text-light">4 hours ago</div>
          </a> 
        </li>
        <li>
          <a href="#" class="top-text-block">
            <div class="top-text-heading">Julia Thomas is On Air</div>
            <div class="top-text-light">5 hours ago</div>
          </a> 
        </li>
       <li>
        <div class="loader-topbar"></div>
       </li>
      </ul>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
