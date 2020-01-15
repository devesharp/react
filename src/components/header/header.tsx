import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../user-avatar/user-avatar';
import ClickOutside from '../click-outside/click-outside';
import { PHeader, SHeader } from './header.interface';
import HeaderMobile from './header-mobile';

export default class Header extends React.Component<PHeader, SHeader> {
    constructor(props: PHeader) {
        super(props);

        this.state = {
            openUserMenuInfo: false,
            menuOpen: false
        };

        this.closeUserMenuInfo = this.closeUserMenuInfo.bind(this);
        this.toggleUserMenuInfo = this.toggleUserMenuInfo.bind(this);
        this.toggleUserMenuMobile = this.toggleUserMenuMobile.bind(this);

        /**
         * Apenas para testes do storybook
         */
        if (this.props.__openUserMenuInfo) {
            this.state = { ...this.state, ...{ openUserMenuInfo: true } };
        }
        if (this.props.__menuMobileOpen) {
            this.state = { ...this.state, ...{ menuOpen: true } };
        }
    }

    /**
     * Verifica se rota é uma subrota do 'menu' atual
     *
     * @param location
     * @param subMenu
     */
    isSubRoute(location, subMenu: any): boolean {
        for (const x in subMenu) {
            if (subMenu[x].route === location.pathname) {
                return true;
            }
        }
        return false;
    }

    toggleUserMenuInfo(): any {
        this.setState((state, props) => ({
            openUserMenuInfo: !state.openUserMenuInfo
        }));
    }

    toggleUserMenuMobile(): void {
        this.setState((state, props) => ({
            menuOpen: !state.menuOpen
        }));
    }

    /**
     * Fecha Menu do usuário
     */
    closeUserMenuInfo(): void {
        this.setState({ openUserMenuInfo: false });
    }

    /**
     * Renderiza o menu do usuario
     */
    renderUserMenu(): JSX.Element {
        const { user } = this.props;
        const { openUserMenuInfo } = this.state;
        const menuUserBar = this.props.menuUserBar || [
            {
                title: 'Meu Perfil',
                route: '/settings/accounts'
            },
            {
                title: 'Sair',
                route: '/logout'
            }
        ];

        return (
            <ClickOutside onClickOutside={this.closeUserMenuInfo}>
                <div
                    className="container-user"
                    onClick={this.toggleUserMenuInfo}
                    onBlur={this.closeUserMenuInfo}
                >
                    <div className="username-container">
                        <div className="user-image-container">
                            <UserAvatar user={user} size="s" />
                        </div>
                        Olá, <span className="username">{user.name}</span>{' '}
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            flip="horizontal"
                        />
                        <div
                            className={`username-container-popup ${!openUserMenuInfo ||
                                'opened'}`}
                        >
                            <div
                                className="ds-table"
                                onClick={this.closeUserMenuInfo}
                            >
                                <div className="ds-cell">
                                    <UserAvatar user={user} size="m" />
                                </div>
                                <div className="ds-cell pl-2">
                                    <div className="name">{user.name}</div>
                                    <div className="role">Usuário</div>
                                </div>
                            </div>
                            <div className="ds-menu">
                                {!!menuUserBar &&
                                    menuUserBar.map((item, i) => (
                                        <NavLink
                                            key={item.route}
                                            className="ds-item"
                                            to={{ pathname: item.route }}
                                            exact
                                        >
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
     * Render Menu Desktop
     */
    renderMenuDesktop(): JSX.Element {
        const { menu } = this.props;
        return (
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
                                        exact
                                    >
                                        {item.title}
                                    </NavLink>
                                )}
                                {/* //-------- MENU DEFAULT --------  */}

                                {/* -------- SUBMENU --------  */}
                                {!!item.subMenu && (
                                    <div
                                        className={`ds-menu-category ${!item.opened ||
                                            'hover'}`}
                                    >
                                        <NavLink
                                            key={item.route}
                                            className={`ds-menu-item ${!item.opened ||
                                                'hover'}`}
                                            activeClassName="ds-menu-item-active"
                                            to={{
                                                pathname: item.route
                                            }}
                                            onClick={e => e.preventDefault()}
                                            isActive={(match, location) =>
                                                this.isSubRoute(
                                                    location,
                                                    item.subMenu
                                                )
                                            }
                                        >
                                            {item.title}{' '}
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                flip="horizontal"
                                            />
                                        </NavLink>

                                        <div className="ds-menu-subcategory">
                                            {item.subMenu.map(
                                                (subItem, i): any => (
                                                    <NavLink
                                                        key={subItem.route}
                                                        className="ds-item"
                                                        activeClassName="active"
                                                        to={{
                                                            pathname:
                                                                subItem.route
                                                        }}
                                                        exact
                                                    >
                                                        {subItem.title}
                                                    </NavLink>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                                {/* //-------- SUBMENU --------  */}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Render
     */
    render(): JSX.Element {
        const { logo } = this.props;
        const { menuOpen } = this.state;

        return (
            <>
                <div className="ds-header-mobile-space" />
                <div
                    className={`ds-header ${
                        menuOpen ? 'ds-menu-mobile-opened' : ''
                    }`}
                >
                    <div className="ds-header-top">
                        <div className="width-max">
                            <div className="ds-table w-100 table-header">
                                {/* Menu Hamburguer */}
                                <div
                                    className={`ds-menu-hamburger ${
                                        menuOpen ? 'open' : ''
                                    }`}
                                    onClick={this.toggleUserMenuMobile}
                                >
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                {/* Menu Hamburguer */}

                                {/* -------- Logo --------  */}
                                <div className="ds-cell vertical-align-middle ds-logo-cell">
                                    <div className="ds-logo">
                                        <img src={logo} alt="" />
                                    </div>
                                </div>
                                {/* //-------- Logo --------  */}

                                {/* -------- Content before --------  */}
                                <div className="ds-cell text-right vertical-align-middle">
                                    {this.props.contentBeforeUser}
                                </div>
                                {/* //-------- Content before --------  */}

                                {/* -------- Usuário --------  */}
                                <div className="ds-cell text-right vertical-align-middle ds-user-cell">
                                    {this.renderUserMenu()}
                                </div>
                                {/* //-------- Usuário --------  */}
                            </div>
                        </div>
                    </div>
                    {/* -------- Menu Desktop --------  */}
                    {this.renderMenuDesktop()}
                    {/* //------ Menu Desktop  ------//  */}

                    <HeaderMobile
                        {...this.props}
                        closeUserMenuInfo={this.closeUserMenuInfo}
                        isSubRoute={this.isSubRoute}
                    />
                </div>
            </>
        );
    }
}
