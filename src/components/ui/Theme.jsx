import { blue } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const Blue = "#0B72B9";
const Orange = "#FFBA60";
const Gray = "#868686";
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
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: Blue,
            lineHeight: 1.5,
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: Blue,
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: Blue,
            fontWeight: 700,
        },
        subtitle1: {
            fontWeight: 300,
            fontSize: "1.25rem",
            color: Gray,
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: "1.25rem",
            color: "white",
        },
        learnButton: {
            borderColor: Blue,
            color: Blue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
    },
});

export default theme;
