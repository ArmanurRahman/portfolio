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

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
    },
    logo: {
        height: "8em",
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
    const classes = useStyles();
    const [selectMenu, setSelectedMenu] = useState(0);

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
                                aria-haspopup={
                                    anchorEl ? "simple-menu" : undefined
                                }
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
                                        selected={
                                            index === selectMenu &&
                                            selectedTab === 1
                                        }
                                    >
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
};

export default Header;
