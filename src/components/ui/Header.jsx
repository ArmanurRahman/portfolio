import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em",
        },
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em",
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em",
        },
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: 25,
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: 50,
        marginRight: 25,
        height: 45,
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: 0,
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1,
        },
    },
    buttonContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    drawerIcon: {
        height: "50px",
        width: "50px",
    },
    drawer: {
        backgroundColor: theme.palette.common.blue,
    },
    draweItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7,
    },
    selectedDrawerItem: {
        opacity: 1,
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange,
    },
}));

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Header = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabChangeHandler = (event, index) => {
        setSelectedTab(index);
    };
    const [anchorEl, setAncorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectMenu, setSelectedMenu] = useState(0);

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const menuData = [
        { label: "services", link: "/services" },
        { label: "Custom Development", link: "/customsoftware" },
        { label: "Mobile App Development", link: "/mobiledevelopment" },
        { label: "Website Development", link: "/webdevelopment" },
    ];

    const opneMenuHandler = (event) => {
        setAncorEl(event.currentTarget);
        setMenuOpen(true);
    };

    const closeMenuHandler = () => {
        setAncorEl(null);
        setMenuOpen(false);
    };

    const menuItemClickHandler = (event, index) => {
        setAncorEl(null);
        setMenuOpen(false);
        setSelectedMenu(index);
    };

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                if (selectedTab !== 0) {
                    setSelectedTab(0);
                }
                break;
            case "/services":
                if (selectedTab !== 1) {
                    setSelectedTab(1);
                    setSelectedMenu(0);
                }
                break;
            case "/revolution":
                if (selectedTab !== 2) {
                    setSelectedTab(2);
                }
                break;
            case "/about":
                if (selectedTab !== 3) {
                    setSelectedTab(3);
                }
                break;
            case "/contact":
                if (selectedTab !== 4) {
                    setSelectedTab(4);
                }
                break;
            case "/estimate":
                if (selectedTab !== 5) {
                    setSelectedTab(5);
                }
                break;
            case "/customsoftware":
                if (selectedTab !== 1) {
                    setSelectedTab(1);
                    setSelectedMenu(1);
                }
                break;
            case "/mobiledevelopment":
                if (selectedTab !== 1) {
                    setSelectedTab(1);
                    setSelectedMenu(2);
                }
                break;
            case "/webdevelopment":
                if (selectedTab !== 1) {
                    setSelectedTab(1);
                    setSelectedMenu(3);
                }
                break;
            default:
                break;
        }
    }, [selectedTab]);

    const tabs = (
        <React.Fragment>
            <Tabs
                value={selectedTab}
                className={classes.tabContainer}
                onChange={tabChangeHandler}
                indicatorColor='primary'
            >
                <Tab
                    className={classes.tab}
                    component={Link}
                    to='/'
                    label='Home'
                />
                <Tab
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup={anchorEl ? "simple-menu" : undefined}
                    className={classes.tab}
                    component={Link}
                    to='/services'
                    label='Services'
                    onMouseOver={(event) => opneMenuHandler(event)}
                />
                <Tab
                    className={classes.tab}
                    component={Link}
                    to='/revolution'
                    label='The Revolution'
                />
                <Tab
                    className={classes.tab}
                    component={Link}
                    to='/about'
                    label='About Us'
                />
                <Tab
                    className={classes.tab}
                    component={Link}
                    to='/contact'
                    label='Contact Us'
                />
                <Button
                    variant='contained'
                    color='secondary'
                    className={classes.button}
                >
                    Free Estimate
                </Button>
                <Menu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={closeMenuHandler}
                    MenuListProps={{
                        onMouseLeave: closeMenuHandler,
                    }}
                    classes={{ paper: classes.menu }}
                    elevation={0}
                >
                    {menuData.map((item, index) => (
                        <MenuItem
                            key={item.label}
                            onClick={() => {
                                closeMenuHandler();
                                setSelectedTab(1);
                            }}
                            component={Link}
                            to={item.link}
                            classes={{ root: classes.menuItem }}
                            onClick={(event) => {
                                menuItemClickHandler(event, index);
                                setSelectedTab(1);
                            }}
                            selected={index === selectMenu && selectedTab === 1}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
                </Menu>
            </Tabs>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                onOpen={() => setDrawerOpen(true)}
                classes={{ paper: classes.drawer }}
            >
                <List disablePadding>
                    <ListItem
                        divider
                        button
                        onClick={() => {
                            setDrawerOpen(false);
                            setSelectedTab(0);
                        }}
                        component={Link}
                        to='/'
                        selected={selectedTab === 0}
                    >
                        <ListItemText
                            className={
                                selectedTab === 0
                                    ? [
                                          classes.draweItem,
                                          classes.selectedDrawerItem,
                                      ]
                                    : classes.draweItem
                            }
                            disableTypography
                        >
                            Home
                        </ListItemText>
                    </ListItem>
                </List>

                <List disablePadding>
                    <ListItem
                        divider
                        button
                        onClick={() => {
                            setDrawerOpen(false);
                            setSelectedTab(1);
                        }}
                        component={Link}
                        to='/services'
                        selected={selectedTab === 1}
                    >
                        <ListItemText
                            className={
                                selectedTab === 1
                                    ? [
                                          classes.draweItem,
                                          classes.selectedDrawerItem,
                                      ]
                                    : classes.draweItem
                            }
                            disableTypography
                        >
                            Services
                        </ListItemText>
                    </ListItem>
                </List>

                <List disablePadding>
                    <ListItem
                        divider
                        button
                        onClick={() => {
                            setDrawerOpen(false);
                            setSelectedTab(2);
                        }}
                        component={Link}
                        to='/revolution'
                        selected={selectedTab === 2}
                    >
                        <ListItemText
                            className={
                                selectedTab === 2
                                    ? [
                                          classes.draweItem,
                                          classes.selectedDrawerItem,
                                      ]
                                    : classes.draweItem
                            }
                            disableTypography
                        >
                            Revolution
                        </ListItemText>
                    </ListItem>
                </List>

                <List disablePadding>
                    <ListItem
                        divider
                        button
                        onClick={() => {
                            setDrawerOpen(false);
                            setSelectedTab(3);
                        }}
                        component={Link}
                        to='/about'
                        selected={selectedTab === 3}
                    >
                        <ListItemText
                            className={
                                selectedTab === 3
                                    ? [
                                          classes.draweItem,
                                          classes.selectedDrawerItem,
                                      ]
                                    : classes.draweItem
                            }
                            disableTypography
                        >
                            About Us
                        </ListItemText>
                    </ListItem>
                </List>

                <List disablePadding>
                    <ListItem
                        divider
                        button
                        onClick={() => {
                            setDrawerOpen(false);
                            setSelectedTab(4);
                        }}
                        component={Link}
                        to='/contact'
                        selected={selectedTab === 4}
                    >
                        <ListItemText
                            className={
                                selectedTab === 4
                                    ? [
                                          classes.draweItem,
                                          classes.selectedDrawerItem,
                                      ]
                                    : classes.draweItem
                            }
                            disableTypography
                        >
                            Contact Us
                        </ListItemText>
                    </ListItem>
                </List>
                <List disablePadding>
                    <ListItem
                        divider
                        button
                        onClick={() => {
                            setDrawerOpen(false);
                            setSelectedTab(5);
                        }}
                        component={Link}
                        to='/estimate'
                        className={classes.drawerItemEstimate}
                        selected={selectedTab === 5}
                    >
                        <ListItemText
                            className={
                                selectedTab === 5
                                    ? [
                                          classes.draweItem,
                                          classes.selectedDrawerItem,
                                      ]
                                    : classes.draweItem
                            }
                            disableTypography
                        >
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.buttonContainer}
                onClick={() => setDrawerOpen((prevState) => !prevState)}
                disableRipple
            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar color='primary'>
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            to='/'
                            className={classes.logoContainer}
                            onClick={() => setSelectedTab(0)}
                            disableRipple
                        >
                            <img
                                className={classes.logo}
                                src={Logo}
                                alt='Sky Development'
                            />
                        </Button>
                        {!matches ? tabs : drawer}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
};

export default Header;
