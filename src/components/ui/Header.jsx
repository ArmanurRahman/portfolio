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
        "& .MuiListItemText-root": {
            opacity: 1,
        },
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange,
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1,
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
        { label: "services", link: "/services", activeIndex: 1, selctMenu: 0 },
        {
            label: "Custom Development",
            link: "/customsoftware",
            activeIndex: 1,
            selectMenu: 1,
        },
        {
            label: "Mobile App Development",
            link: "/mobiledevelopment",
            activeIndex: 1,
            selectMenu: 2,
        },
        {
            label: "Website Development",
            link: "/webdevelopment",
            activeIndex: 1,
            selectMenu: 3,
        },
    ];

    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        {
            name: "Services",
            link: "/services",
            activeIndex: 1,
            ariaOwn: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: (event) => opneMenuHandler(event),
        },
        { name: "The Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About Us", link: "/about", activeIndex: 3 },
        { name: "Contact Us", link: "/contact", activeIndex: 4 },
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
        [...menuData, ...routes].forEach((route) => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (selectedTab !== route.activeIndex) {
                        setSelectedTab(route.activeIndex);
                    }
                    if (route.selectMenu) {
                        console.log(selectMenu);
                        if (route.selctMenu !== selectMenu) {
                            setSelectedMenu(route.selectMenu);
                        }
                    }
                    break;
                default:
                    break;
            }
        });
    }, [selectedTab, menuData, routes, selectMenu]);

    const tabs = (
        <React.Fragment>
            <Tabs
                value={selectedTab}
                className={classes.tabContainer}
                onChange={tabChangeHandler}
                indicatorColor='primary'
            >
                {routes.map((route, index) => (
                    <Tab
                        key={`${index}`}
                        aria-owns={route.ariaOwn}
                        aria-haspopup={route.ariaPopup}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        onMouseOver={route.mouseOver}
                    />
                ))}
            </Tabs>
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
                style={{ zIndex: 1302 }}
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
                <div className={classes.toolbarMargin} />
                {routes.map((route, index) => (
                    <List disablePadding key={`${index}`}>
                        <ListItem
                            divider
                            button
                            onClick={() => {
                                setDrawerOpen(false);
                                setSelectedTab(route.activeIndex);
                            }}
                            component={Link}
                            to={route.link}
                            selected={selectedTab === route.activeIndex}
                            classes={{ selected: classes.selectedDrawerItem }}
                        >
                            <ListItemText
                                className={classes.draweItem}
                                disableTypography
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    </List>
                ))}

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
                        classes={{
                            root: classes.drawerItemEstimate,
                            selected: classes.selectedDrawerItem,
                        }}
                        selected={selectedTab === 5}
                    >
                        <ListItemText
                            className={classes.draweItem}
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
                <AppBar color='primary' className={classes.appBar}>
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
