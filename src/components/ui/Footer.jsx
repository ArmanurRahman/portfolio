import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import footerAdorment from "../../assets/Footer Adornment.svg";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative",
    },
    footerAdorment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em",
        },
        [theme.breakpoints.down("md")]: {
            width: "15em",
        },
    },
    mainContainer: {
        position: "absolute",
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none",
    },
    gridItem: {
        margin: "3em",
    },
    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em",
        },
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.5em",
            marginTop: "-4em",
        },
    },
}));

const Footer = (props) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid
                    container
                    className={classes.mainContainer}
                    justify='center'
                >
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/'
                                onClick={() => props.setSelectedTab(0)}
                            >
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/services'
                                onClick={() => {
                                    props.setSelectedTab(1);
                                    props.setSelectedMenu(0);
                                }}
                            >
                                Services
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/customsoftware'
                                onClick={() => {
                                    props.setSelectedTab(1);
                                    props.setSelectedMenu(1);
                                }}
                            >
                                Software Development
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/mobiledevelopment'
                                onClick={() => {
                                    props.setSelectedTab(1);
                                    props.setSelectedMenu(2);
                                }}
                            >
                                IOS/ANDROID development
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/webdevelopment'
                                onClick={() => {
                                    props.setSelectedTab(1);
                                    props.setSelectedMenu(3);
                                }}
                            >
                                Web Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/revolution'
                                onClick={() => props.setSelectedTab(2)}
                            >
                                The Revolution
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/revolution'
                                onClick={() => props.setSelectedTab(2)}
                            >
                                Vision
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/revolution'
                                onClick={() => props.setSelectedTab(2)}
                            >
                                Tecnology
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/revolution'
                                onClick={() => props.setSelectedTab(2)}
                            >
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/about'
                                onClick={() => props.setSelectedTab(3)}
                            >
                                Ablout Us
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/about'
                                onClick={() => props.setSelectedTab(3)}
                            >
                                History
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/about'
                                onClick={() => props.setSelectedTab(3)}
                            >
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to='/contact'
                                onClick={() => props.setSelectedTab(4)}
                            >
                                Contact Us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img
                alt='footer'
                src={footerAdorment}
                className={classes.footerAdorment}
            />
            <Grid
                container
                justify='flex-end'
                spacing={2}
                className={classes.socialContainer}
            >
                <Grid
                    item
                    component={"a"}
                    href='http://www.facebook.com'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <img
                        src={facebook}
                        alt='facebook'
                        className={classes.icon}
                    />
                </Grid>
                <Grid
                    item
                    component={"a"}
                    href='http://www.twitter.com'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <img src={twitter} alt='twitter' className={classes.icon} />
                </Grid>
                <Grid
                    item
                    component={"a"}
                    href='http://www.instagram.com'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <img
                        src={instagram}
                        alt='instagram'
                        className={classes.icon}
                    />
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;
