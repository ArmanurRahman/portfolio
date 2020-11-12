import React from "react";
import Header from "./components/ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={() => <div>Home</div>} />
                    <Route
                        exact
                        path='/services'
                        component={() => <div>Services</div>}
                    />
                    <Route
                        exact
                        path='/customsoftware'
                        component={() => <div>custom software</div>}
                    />
                    <Route
                        exact
                        path='/mobiledevelopment'
                        component={() => <div>mobile development</div>}
                    />
                    <Route
                        exact
                        path='/webdevelopment'
                        component={() => <div>web development</div>}
                    />
                    <Route
                        exact
                        path='/revolution'
                        component={() => <div>revolution</div>}
                    />
                    <Route
                        exact
                        path='/about'
                        component={() => <div>about</div>}
                    />
                    <Route
                        exact
                        path='/contact'
                        component={() => <div>contact</div>}
                    />
                    <Route
                        exact
                        path='/estimate'
                        component={() => <div>estimate</div>}
                    />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
