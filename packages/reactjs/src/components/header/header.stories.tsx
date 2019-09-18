import * as React from "react";
import { storiesOf, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Header, { PHeader } from "./header";
import avatar from "../../../assets/avatar.jpeg";
import logo from "../../../assets/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCogs, faLayerGroup, faTable, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

let data: PHeader = {
    data: {
        logo,
        user: {
            name: "Verônica",
            image: avatar
        },
        menuUserBar: [
            {
                title: (
                    <>
                        <FontAwesomeIcon icon={faUserCircle} /> Meu Perfil
                    </>
                ),
                route: "/settings/accounts"
            },
            {
                title: (
                    <>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                    </>
                ),
                route: "/"
            }
        ],
        menu: [
            {
                title: (
                    <>
                        <FontAwesomeIcon icon={faUserCircle} /> Home
                    </>
                ),
                route: "/"
            },
            {
                title: (
                    <>
                        <FontAwesomeIcon icon={faLayerGroup} /> Components
                    </>
                ),
                route: "/components",
                subMenu: [
                    { title: "Base", route: "/components/base" },
                    { title: "Commons", route: "/components/commons" },
                    { title: "Customs", route: "/components/customs" }
                ]
            },
            {
                title: (
                    <>
                        <FontAwesomeIcon icon={faTable} /> CRUD
                    </>
                ),
                route: "/CRUD",
                subMenu: [
                    { title: "Base", route: "/CRUD/base" },
                    { title: "Commons", route: "/CRUD/commons" },
                    { title: "Customs", route: "/CRUD/customs" }
                ]
            },
            {
                title: (
                    <>
                        <FontAwesomeIcon icon={faCogs} /> Settings
                    </>
                ),
                route: "/settings"
            }
        ]
    }
};
storiesOf("Header", module)
    .add("default", () => (
        <Router>
            <Header {...data} />
        </Router>
    ))
    .addParameters({
        viewport: {
            viewports: {
                ...INITIAL_VIEWPORTS,
                ...{
                    mobile: {
                        name: "Kindle Fire 2",
                        styles: {
                            width: "420px",
                            height: "500px"
                        }
                    }
                }
            }
        }
    })
    .add(
        "mobile",
        () => (
            <Router>
                <Header {...data} />
            </Router>
        ),
        { viewport: { defaultViewport: "mobile" } }
    );
