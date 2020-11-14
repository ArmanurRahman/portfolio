import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import HeroBlock from "./HeroBlock";
import ServiceChildComponent from "./ServiceChildComponent";

const useStyles = makeStyles((theme) => ({
    mainConteiner: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down("xm")]: {
            marginTop: "2em",
        },
    },
}));

const LandingPage = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid
                container
                direction='column'
                className={classes.mainConteiner}
            >
                <Grid item>
                    <HeroBlock />
                </Grid>
                <Grid item>
                    <ServiceChildComponent />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default LandingPage;
