import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "./ButtonArrow";
import Button from "@material-ui/core/Button";
import infoBackground from "../../assets/infoBackground.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
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
}));

const InformationBlock = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container style={{ height: "80em" }} alignItems='center'>
            <Grid item container style={{ position: "absolute" }} sm>
                <Grid item>
                    <Grid
                        container
                        direction='column'
                        style={{ marginLeft: !matchSM ? "5em" : "2em" }}
                    >
                        <Typography variant='h2' style={{ color: "white" }}>
                            {" "}
                            About Us{" "}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {" "}
                            Let's go personal
                        </Typography>
                        <Grid item>
                            <Button
                                variant='outlined'
                                className={classes.learnButton}
                                style={{ color: "white", borderColor: "white" }}
                            >
                                <span style={{ marginRight: 10 }}>
                                    Leanr More
                                </span>
                                <ButtonArrow
                                    width={10}
                                    height={10}
                                    fill='white'
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    sm
                    style={{
                        marginRight: !matchSM ? "5em" : "2em",
                        textAlign: "right",
                    }}
                >
                    <Grid container direction='column'>
                        <Typography variant='h2' style={{ color: "white" }}>
                            {" "}
                            Contact Us{" "}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {" "}
                            Let's go personal
                        </Typography>
                        <Grid item>
                            <Button
                                variant='outlined'
                                className={classes.learnButton}
                                style={{ color: "white", borderColor: "white" }}
                            >
                                <span style={{ marginRight: 10 }}>
                                    Leanr More
                                </span>
                                <ButtonArrow
                                    width={10}
                                    height={10}
                                    fill='white'
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classes.infoBackground}></div>
        </Grid>
    );
};

export default InformationBlock;
