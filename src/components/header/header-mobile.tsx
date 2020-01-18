import * as React from 'react';
import { NavLink } from 'react-router-dom';
import UserAvatar from '../user-avatar/user-avatar';
import { PHeader } from './header.interface';

const HeaderMobile: React.FunctionComponent<PHeader> = props => {
    const isSubRoute = (location, subMenu: any): boolean => {
        return !subMenu.every(item => item.route !== location.pathname);
    };
    const { logo, menu } = props;
    const { user } = props;

    return (
        <div className="ds-menu-mobile">
            <div className="ds-table username-info">
                <div className="ds-cell ds-cell-min">
                    <UserAvatar user={user} size="m" />
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
                            exact
                        >
                            {item.title}
                        </NavLink>
                    )}

                    {/* //-------- MENU DEFAULT --------  */}

                    {/* -------- SUBMENU --------  */}
                    {!!item.subMenu && (
                        <div className="ds-menu-category">
                            <NavLink
                                className="ds-menu-item"
                                activeClassName="ds-menu-item-active"
                                to={{ pathname: item.route }}
                                onClick={e => e.preventDefault()} // Desabilita link
                                isActive={(match, location) =>
                                    isSubRoute(location, item.subMenu)
                                }
                            >
                                {item.title}
                            </NavLink>

                            <div className="ds-menu-subcategory">
                                {item.subMenu.map((subItem, i): any => (
                                    <NavLink
                                        key={subItem.route}
                                        className="ds-item"
                                        activeClassName="active"
                                        to={{
                                            pathname: subItem.route
                                        }}
                                        exact
                                    >
                                        {subItem.title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* //-------- SUBMENU --------  */}
                </>
            ))}
        </div>
    );
};

export default HeaderMobile;
