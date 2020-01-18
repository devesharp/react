import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { PHeader, PHeaderChild } from './header.interface';
import ClickOutside from '../click-outside/click-outside';
import UserAvatar from '../user-avatar/user-avatar';

const HeaderDesktopUserMenu: React.FunctionComponent<PHeaderChild> = props => {
    return (
        <ClickOutside onClickOutside={props.closeUserMenuInfo}>
            <div
                className="container-user"
                onClick={props.toggleUserMenuInfo}
                onBlur={props.closeUserMenuInfo}
            >
                <div className="username-container">
                    <div className="user-image-container">
                        <UserAvatar user={props.user} size="s" />
                    </div>
                    Olá, <span className="username">{props.user.name}</span>{' '}
                    <FontAwesomeIcon icon={faChevronDown} flip="horizontal" />
                    <div
                        className={`username-container-popup ${!props.openUserMenuInfo ||
                            'opened'}`}
                    >
                        {/* User info */}
                        <div
                            className="ds-table"
                            onClick={props.closeUserMenuInfo}
                        >
                            <div className="ds-cell">
                                <UserAvatar user={props.user} size="m" />
                            </div>
                            <div className="ds-cell pl-2">
                                <div className="name">{props.user.name}</div>
                                <div className="role">Usuário</div>
                            </div>
                        </div>
                        {/* User info */}

                        {/* DropMenu User */}
                        <div className="ds-menu">
                            {!!props.menuUserBar &&
                                props.menuUserBar.map((item, i) => (
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
                        {/* DropMenu User */}
                    </div>
                </div>
            </div>
        </ClickOutside>
    );
};

export default HeaderDesktopUserMenu;
