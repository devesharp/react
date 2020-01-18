import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { PHeader } from './header.interface';

const HeaderDesktopMenuBar: React.FunctionComponent<PHeader> = props => {
    return (
        <div className="ds-header-bottom">
            <div className="width-max">
                <div className="ds-menu">
                    {props.menu.map((item): any => (
                        <span key={item.route}>
                            {!item.subMenu && <Menu {...item} />}
                            {!!item.subMenu && <SubMenu {...item} />}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Menu: React.FunctionComponent<any> = props => {
    return (
        <NavLink
            className="ds-menu-item"
            activeClassName="ds-menu-item-active"
            to={{ pathname: props.route }}
            exact
        >
            {props.title}
        </NavLink>
    );
};

const SubMenu: React.FunctionComponent<any> = props => {
    const isSubRoute = (location, subMenu: any): boolean => {
        return !subMenu.every(item => item.route !== location.pathname);
    };

    return (
        <div className={`ds-menu-category ${!props.opened || 'hover'}`}>
            <NavLink
                key={props.route}
                className={`ds-menu-item ${!props.opened || 'hover'}`}
                activeClassName="ds-menu-item-active"
                to={{
                    pathname: props.route
                }}
                onClick={e => e.preventDefault()}
                isActive={(match, location) =>
                    isSubRoute(location, props.subMenu)
                }
            >
                {props.title}{' '}
                <FontAwesomeIcon icon={faChevronDown} flip="horizontal" />
            </NavLink>

            <div className="ds-menu-subcategory">
                {props.subMenu.map((subItem, i): any => (
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
    );
};

export default HeaderDesktopMenuBar;
