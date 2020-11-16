import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "./ButtonArrow";
import Button from "@material-ui/core/Button";
import relovutionBackground from "../../assets/repeatingBackground.svg";

const useStyles = makeStyles((theme) => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        padding: 5,
        height: 35,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em",
        },
    },
    relovutionBackground: {
        backgroundImage: `url(${relovutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        marginLeft: "auto !important",
        marginRight: "auto !important",
        left: 0,
        right: 0,
        textAlign: "center",
        width: "60%",

        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
}));

const RevolutionLand = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid
            container
            style={{ height: "100em" }}
            alignItems='center'
            justify='center'
        >
            <Grid item>
                <Card className={classes.revolutionCard}>
                    <CardContent>
                        <Grid
                            container
                            direction='column'
                            style={{ textAlign: "center" }}
                        >
                            <Grid item>
                                <Typography variant='h3'>
                                    The Revolution
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Vasionary insights coupled with cutting-edge
                                    technology is a recipe for revolution
                                </Typography>
                                <Button
                                    variant='outlined'
                                    className={classes.learnButton}
                                >
                                    <span style={{ marginRight: 10 }}>
                                        Leanr More
                                    </span>
                                    <ButtonArrow
                                        width={10}
                                        height={10}
                                        fill={theme.palette.common.blue}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <div className={classes.relovutionBackground}></div>
        </Grid>
    );
};

export default RevolutionLand;
