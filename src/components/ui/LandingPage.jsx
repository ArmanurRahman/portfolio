import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import HeroBlock from "./HeroBlock";

const useStyles = makeStyles((theme) => ({}));

const LandingPage = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <HeroBlock />{" "}
        </React.Fragment>
    );
};

export default LandingPage;
