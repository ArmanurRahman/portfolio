import React, { useState } from "react";
import Header from "./components/ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/ui/Footer";
import LandingPage from "./components/ui/LandingPage";

function App() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectMenu, setSelectedMenu] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                    selectMenu={selectMenu}
                    setSelectedMenu={setSelectedMenu}
                />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
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
                <Footer
                    setSelectedTab={setSelectedTab}
                    setSelectedMenu={setSelectedMenu}
                />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
