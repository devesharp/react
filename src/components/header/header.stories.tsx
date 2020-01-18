import * as React from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserCircle,
    faCogs,
    faLayerGroup,
    faTable,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import Header from './header';
import { PHeader } from './header.interface';
import avatar from '../../../assets/avatar.jpeg';
import logo from '../../../assets/logo.png';

const data: PHeader = {
    logo,
    user: {
        name: 'Verônica',
        image: avatar
    },
    menuUserBar: [
        {
            title: (
                <>
                    <FontAwesomeIcon icon={faUserCircle} /> Meu Perfil
                </>
            ),
            route: '/settings/accounts'
        },
        {
            title: (
                <>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                </>
            ),
            route: '/'
        }
    ],
    menu: [
        {
            title: (
                <>
                    <FontAwesomeIcon icon={faUserCircle} /> Home
                </>
            ),
            route: '/'
        },
        {
            title: (
                <>
                    <FontAwesomeIcon icon={faLayerGroup} /> Components
                </>
            ),
            route: '/components',
            subMenu: [
                { title: 'Base', route: '/components/base' },
                { title: 'Commons', route: '/components/commons' },
                { title: 'Customs', route: '/components/customs' }
            ]
        },
        {
            title: (
                <>
                    <FontAwesomeIcon icon={faTable} /> CRUD
                </>
            ),
            route: '/CRUD',
            subMenu: [
                { title: 'Base', route: '/CRUD/base' },
                { title: 'Commons', route: '/CRUD/commons' },
                { title: 'Customs', route: '/CRUD/customs' }
            ]
        },
        {
            title: (
                <>
                    <FontAwesomeIcon icon={faCogs} /> Settings
                </>
            ),
            route: '/settings'
        }
    ]
};

storiesOf('UI|Header/desktop', module)
    .add('default', () => (
        <Router>
            <Header {...data} />
        </Router>
    ))
    .add('menu active', () => (
        <Router>
            <Header
                {...{
                    logo,
                    user: {
                        name: 'Verônica',
                        image: avatar
                    },
                    menu: [
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: '/iframe.html'
                        }
                    ]
                }}
            />
        </Router>
    ))
    .add('menu active with category', () => (
        <Router>
            <Header
                {...{
                    logo,
                    user: {
                        name: 'Verônica',
                        image: avatar
                    },
                    menu: [
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: '',
                            subMenu: [
                                {
                                    title: (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faUserCircle}
                                            />{' '}
                                            Home
                                        </>
                                    ),
                                    route: '/iframe.html'
                                }
                            ]
                        }
                    ]
                }}
            />
        </Router>
    ))
    .add('submenu open', () => (
        <Router>
            <Header
                {...{
                    logo,
                    user: {
                        name: 'Verônica',
                        image: avatar
                    },
                    menu: [
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: '',
                            opened: true,
                            subMenu: [
                                {
                                    title: (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faUserCircle}
                                            />{' '}
                                            Home 2
                                        </>
                                    ),
                                    route: '/section'
                                },
                                {
                                    title: (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faUserCircle}
                                            />{' '}
                                            Home 12
                                        </>
                                    ),
                                    route: '/section12'
                                }
                            ]
                        }
                    ]
                }}
            />
        </Router>
    ))
    .add('menu user open', () => (
        <Router>
            <Header
                {...{
                    logo,
                    user: {
                        name: 'Verônica',
                        image: avatar
                    },
                    __openUserMenuInfo: true,
                    menu: [
                        {
                            title: 'Home',
                            route: '/'
                        }
                    ]
                }}
            />
        </Router>
    ));

storiesOf('UI|Header/mobile', module)
    .addParameters({
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphone6'
        }
    })
    .add('default', () => (
        <Router>
            <Header {...data} />
        </Router>
    ))
    .add('menu open', () => (
        <Router>
            <Header
                {...{
                    logo,
                    user: {
                        name: 'Verônica',
                        image: avatar
                    },
                    __menuMobileOpen: true,
                    menu: [
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: '',
                            subMenu: [
                                {
                                    title: 'Home',
                                    route: '/'
                                },
                                {
                                    title: 'Home',
                                    route: '/'
                                },
                                {
                                    title: 'Home',
                                    route: '/'
                                }
                            ]
                        },
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: ''
                        }
                    ]
                }}
            />
        </Router>
    ))
    .add('menu open with menu active', () => (
        <Router>
            <Header
                {...{
                    logo,
                    user: {
                        name: 'Verônica',
                        image: avatar
                    },
                    __menuMobileOpen: true,
                    menu: [
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: '/iframe.html'
                        },
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: '',
                            subMenu: [
                                {
                                    title: 'Home',
                                    route: '/'
                                },
                                {
                                    title: 'Home',
                                    route: '/'
                                },
                                {
                                    title: 'Home',
                                    route: '/'
                                }
                            ]
                        },
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: ''
                        }
                    ]
                }}
            />
        </Router>
    ))
    .add('menu open with sub menu active', () => (
        <Router>
            <Header
                {...{
                    logo,
                    user: {
                        name: 'Verônica',
                        image: avatar
                    },
                    __menuMobileOpen: true,
                    menu: [
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: '/'
                        },
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: '',
                            subMenu: [
                                {
                                    title: 'Home',
                                    route: '/iframe.html'
                                },
                                {
                                    title: 'Home',
                                    route: '/'
                                },
                                {
                                    title: 'Home',
                                    route: '/'
                                }
                            ]
                        },
                        {
                            title: (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} /> Home
                                </>
                            ),
                            route: ''
                        }
                    ]
                }}
            />
        </Router>
    ));
