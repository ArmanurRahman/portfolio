import { createMuiTheme } from "@material-ui/core/styles";

const Blue = "#0B72B9";
const Orange = "#FFBA60";
const theme = createMuiTheme({
    palette: {
        common: {
            blue: Blue,
            orange: Orange,
        },
        primary: {
            main: Blue,
        },
        secondary: {
            main: Orange,
        },
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 700,
        },
        estimate: {
            fontFamily: "Pacifico",
            textTransform: "none",
            color: "white",
        },
    },
});

export default theme;
