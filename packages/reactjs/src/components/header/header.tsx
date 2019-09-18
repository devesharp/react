import * as React from "react";
import { NavLink } from "react-router-dom";
import UserAvatar from "../user-avatar/user-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ClickOutside from "../click-outside/click-outside";

export interface PHeader {
    data: {
        logo: string;
        user: {
            name: string;
            image?: string;
        };
        menuUserBar?: {
            title: string | JSX.Element;
            route: string;
        }[];
        menu: {
            title: string | JSX.Element;
            route: string;
            subMenu?: {
                title: string | JSX.Element;
                route: string;
            }[];
        }[];
    };
}
interface SHeader {
    // Menu do usuário aberto
    openMenuInfo: boolean;
    menuOpen: boolean;
}

export default class Header extends React.Component<PHeader, SHeader> {
    state = {
        openMenuInfo: false,
        menuOpen: false
    };

    constructor(props: PHeader) {
        super(props);

        if (!this.props.data.menuUserBar) {
            this.props.data.menuUserBar = [
                {
                    title: "Meu Perfil",
                    route: "/settings/accounts"
                },
                {
                    title: "Sair",
                    route: "/logout"
                }
            ];
        }
        this.closeUserMenuInfo = this.closeUserMenuInfo.bind(this);
        this.toggleUserMenuInfo = this.toggleUserMenuInfo.bind(this);
        this.toggleUserMenuMobile = this.toggleUserMenuMobile.bind(this);
    }

    /**
     * Verifica se rota é uma subrota do 'menu' atual
     * @param location
     * @param subMenu
     */
    isSubRoute(location, subMenu: any) {
        for (let x in subMenu) {
            if (subMenu[x].route == location.pathname) {
                console.log(subMenu[x].route, location.pathname);
                return true;
            }
        }
        return false;
    }

    toggleUserMenuInfo() {
        this.setState((state, props) => ({
            openMenuInfo: !state.openMenuInfo
        }));
    }

    toggleUserMenuMobile() {
        this.setState((state, props) => ({
            menuOpen: !state.menuOpen
        }));
    }

    /**
     * Fecha Menu do usuário
     */
    closeUserMenuInfo() {
        this.setState({ openMenuInfo: false });
    }

    /**
     * Renderiza o menu do usuario
     */
    renderUserMenu(): JSX.Element {
        let { user, menuUserBar } = this.props.data;
        let { openMenuInfo } = this.state;

        return (
            <ClickOutside onClickOutside={this.closeUserMenuInfo}>
                <div className="container-user" onClick={this.toggleUserMenuInfo} onBlur={this.closeUserMenuInfo}>
                    <div className="username-container">
                        <div className="user-image-container">
                            <UserAvatar user={user} size={"s"} />
                        </div>
                        Olá, <span className="username">{user.name}</span>{" "}
                        <FontAwesomeIcon icon={faChevronDown} flip="horizontal" />
                        <div className={"username-container-popup " + (openMenuInfo ? "opened" : "")}>
                            <div className="ds-table" onClick={this.closeUserMenuInfo}>
                                <div className="ds-cell">
                                    <UserAvatar user={user} size={"m"} />
                                </div>
                                <div className="ds-cell pl-2">
                                    <div className="name">{user.name}</div>
                                    <div className="role">Usuário</div>
                                </div>
                            </div>
                            <div className="ds-menu">
                                {!!menuUserBar &&
                                    menuUserBar.map((item, i) => (
                                        <NavLink key={i} className="ds-item" to={{ pathname: item.route }} exact={true}>
                                            {item.title}
                                        </NavLink>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ClickOutside>
        );
    }

    /**
     * Render
     */
    render(): JSX.Element {
        let { logo, menu } = this.props.data;
        let { menuOpen } = this.state;
        let { user } = this.props.data;

        return (
            <>
                <div className="ds-header-mobile-space"></div>
                <div className={"ds-header " + (menuOpen ? "ds-menu-mobile-opened" : "")}>
                    <div className="ds-header-top">
                        <div className="width-max">
                            <div className="ds-table w-100 table-header">
                                <div
                                    className={"ds-menu-hamburger " + (menuOpen ? "open" : "")}
                                    onClick={this.toggleUserMenuMobile}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                {/* -------- Logo --------  */}
                                <div className="ds-cell vertical-align-middle ds-logo-cell">
                                    <div className="ds-logo">
                                        <img src={logo} alt="" />
                                    </div>
                                </div>
                                {/* //-------- Logo --------  */}

                                {/* -------- Usuário --------  */}
                                <div className="ds-cell text-right vertical-align-middle ds-user-cell">
                                    {this.renderUserMenu()}
                                </div>
                                {/* //-------- Usuário --------  */}
                            </div>
                        </div>
                    </div>
                    {/* -------- Menu --------  */}
                    <div className="ds-header-bottom">
                        <div className="width-max">
                            <div className="ds-menu">
                                {menu.map((item): any => (
                                    <>
                                        {/* -------- MENU DEFAULT --------  */}
                                        {!item.subMenu && (
                                            <NavLink
                                                className="ds-menu-item"
                                                activeClassName="ds-menu-item-active"
                                                to={{ pathname: item.route }}
                                                exact={true}
                                            >
                                                {item.title}
                                            </NavLink>
                                        )}
                                        {/* //-------- MENU DEFAULT --------  */}

                                        {/* -------- SUBMENU --------  */}
                                        {!!item.subMenu && (
                                            <div className="ds-menu-category">
                                                <NavLink
                                                    className={"ds-menu-item"}
                                                    activeClassName="ds-menu-item-active"
                                                    to={{ pathname: item.route }}
                                                    onClick={e => e.preventDefault()} // Desabilita link
                                                    isActive={(match, location) =>
                                                        this.isSubRoute(location, item.subMenu)
                                                    }
                                                >
                                                    {item.title}{" "}
                                                    <FontAwesomeIcon icon={faChevronDown} flip="horizontal" />
                                                </NavLink>

                                                <div className="ds-menu-subcategory">
                                                    {item.subMenu.map((subitem, i): any => (
                                                        <NavLink
                                                            className={"ds-item"}
                                                            activeClassName={"active"}
                                                            to={{
                                                                pathname: subitem.route
                                                            }}
                                                            exact={true}
                                                        >
                                                            {subitem.title}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {/* //-------- SUBMENU --------  */}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ///-------- Menu --------  */}

                    {/* ///-------- Menu Mobile --------  */}
                    <div className="ds-menu-mobile">
                        <div className="ds-table username-info" onClick={this.closeUserMenuInfo}>
                            <div className="ds-cell ds-cell-min">
                                <UserAvatar user={user} size={"m"} />
                            </div>
                            <div className="ds-cell pl-2">
                                <div className="name">{user.name}</div>
                                <div className="role">Editar perfil</div>
                            </div>
                        </div>

                        {menu.map((item): any => (
                            <>
                                {/* -------- MENU DEFAULT --------  */}
                                {!item.subMenu && (
                                    <NavLink
                                        className="ds-menu-item"
                                        activeClassName="ds-menu-item-active"
                                        to={{ pathname: item.route }}
                                        exact={true}
                                    >
                                        {item.title}
                                    </NavLink>
                                )}
                                {/* //-------- MENU DEFAULT --------  */}

                                {/* -------- SUBMENU --------  */}
                                {!!item.subMenu && (
                                    <div className="ds-menu-category">
                                        <NavLink
                                            className={"ds-menu-item"}
                                            activeClassName="ds-menu-item-active"
                                            to={{ pathname: item.route }}
                                            onClick={e => e.preventDefault()} // Desabilita link
                                            isActive={(match, location) => this.isSubRoute(location, item.subMenu)}
                                        >
                                            {item.title}
                                        </NavLink>

                                        <div className="ds-menu-subcategory">
                                            {item.subMenu.map((subitem, i): any => (
                                                <NavLink
                                                    className={"ds-item"}
                                                    activeClassName={"active"}
                                                    to={{
                                                        pathname: subitem.route
                                                    }}
                                                    exact={true}
                                                >
                                                    {subitem.title}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {/* //-------- SUBMENU --------  */}
                            </>
                        ))}
                    </div>
                    {/* ///-------- Menu Mobile --------  */}
                </div>
            </>
        );
    }
}
