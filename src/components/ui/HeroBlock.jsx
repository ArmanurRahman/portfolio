import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import animationData from "../../animations/landinganimation/data";
import Lottie from "react-lottie";
import ButtonArrow from "./ButtonArrow";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em",
        },
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        width: 145,
        height: 45,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    learButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        width: 145,
        height: 45,
    },
    mainConteiner: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down("xm")]: {
            marginTop: "2em",
        },
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
    },
}));
const HeroBlock = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Grid container direction='row' justify='flex-end' alignItems='center'>
            <Grid sm item className={classes.heroTextContainer}>
                <Typography align='center' variant='h2'>
                    Bring west cost tecnology <br /> to the Midwest
                </Typography>
                <Grid container justify='center'>
                    <Grid item>
                        <Button
                            variant='contained'
                            className={classes.estimateButton}
                        >
                            {" "}
                            Free Estimate
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant='outlined'
                            className={classes.learButtonHero}
                        >
                            {" "}
                            Learn More
                            <span style={{ marginRight: 10 }}></span>
                            <ButtonArrow
                                width={15}
                                height={15}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
                <Lottie
                    options={defaultOptions}
                    height={"100%"}
                    width={"100%"}
                />
            </Grid>
        </Grid>
    );
};

export default HeroBlock;
