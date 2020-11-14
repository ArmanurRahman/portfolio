import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        padding: 5,
        height: 35,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em",
        },
    },
    subtitle: {
        marginBottom: "1em",
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
    },
    serviceContainer: {
        marginTop: "25em",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
            marginTop: "10em",
        },
    },
    otherServiceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
            marginTop: "10em",
        },
    },
}));

const ServiceChildComponent = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container direction='column'>
            <Grid item>
                <Grid
                    container
                    className={classes.serviceContainer}
                    justify={matchSM ? "center" : undefined}
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchSM ? 0 : "5em",
                            textAlign: matchSM ? "center" : undefined,
                        }}
                    >
                        <Typography variant='h4'>
                            Custom Software Development
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            className={classes.subtitle}
                        >
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant='subtitle1'>
                            Complete digital solutions, from invertigation to{" "}
                            <span className={classes.specialText}>
                                celebration
                            </span>
                        </Typography>
                        <Button
                            variant='outlined'
                            className={classes.learnButton}
                        >
                            <span style={{ marginRight: 10 }}>Leanr More</span>
                            <ButtonArrow
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img
                            alt='custom software icon'
                            src={customSoftwareIcon}
                            className={classes.icon}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid
                    container
                    className={classes.otherServiceContainer}
                    justify={matchSM ? "center" : "flex-end"}
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchSM ? 0 : "5em",
                            textAlign: matchSM ? "center" : undefined,
                        }}
                    >
                        <Typography variant='h4'>
                            iOS/Android App Development
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            className={classes.subtitle}
                        >
                            Extend Functionality. Extend Access. Increase
                            Engagement
                        </Typography>
                        <Typography variant='subtitle1'>
                            Integrated your web experience or create a
                            standalone app{matchSM ? null : <br />} with rither
                            mobile platform
                        </Typography>
                        <Button
                            variant='outlined'
                            className={classes.learnButton}
                        >
                            <span style={{ marginRight: 10 }}>Leanr More</span>
                            <ButtonArrow
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                    <Grid
                        item
                        style={{
                            marginRight: matchSM ? 0 : "5em",
                        }}
                    >
                        <img
                            alt='mobile icon'
                            src={mobileAppIcon}
                            className={classes.icon}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid
                    container
                    className={classes.otherServiceContainer}
                    justify={matchSM ? "center" : undefined}
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchSM ? 0 : "5em",
                            textAlign: matchSM ? "center" : undefined,
                        }}
                    >
                        <Typography variant='h4'>
                            Website Development
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            className={classes.subtitle}
                        >
                            Reach More. Discover More. Sell More
                        </Typography>
                        <Typography variant='subtitle1'>
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button
                            variant='outlined'
                            className={classes.learnButton}
                        >
                            <span style={{ marginRight: 10 }}>Leanr More</span>
                            <ButtonArrow
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img
                            alt='website icon'
                            src={websiteIcon}
                            className={classes.icon}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ServiceChildComponent;
