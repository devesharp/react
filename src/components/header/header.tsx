import * as React from 'react';
import { PHeader, SHeader } from './header.interface';
import HeaderMobile from './header-mobile';
import HeaderDesktopTop from './header--deskop-top';
import HeaderDesktopMenuBar from './header--deskop-menu-bar';

/**
 * Component Header
 * @param props
 * @constructor
 */
const Header: React.FunctionComponent<PHeader> = props => {
    //
    const [menuMobile, setMenuMobile] = React.useState(
        !!props.__menuMobileOpen
    );
    const [openUserMenuInfo, setOpenUserMenuInfo] = React.useState(
        !!props.__openUserMenuInfo
    );

    //
    const toggleMenuMobile = (): any => setMenuMobile(!menuMobile);
    const closeUserMenuInfo = (): any => setOpenUserMenuInfo(false);
    const toggleUserMenuInfo = (): any =>
        setOpenUserMenuInfo(!openUserMenuInfo);

    //
    const sharedProps = {
        ...props,
        menuMobile,
        openUserMenuInfo,
        toggleMenuMobile,
        closeUserMenuInfo,
        toggleUserMenuInfo
    };

    return (
        <>
            <div className="ds-header-mobile-space" />
            <div
                className={`ds-header ${
                    menuMobile ? 'ds-menu-mobile-opened' : ''
                }`}
            >
                <HeaderDesktopTop {...sharedProps} />
                <HeaderDesktopMenuBar {...props} />
                <HeaderMobile {...sharedProps} />
            </div>
        </>
    );
};

Header.defaultProps = {
    menuUserBar: [
        {
            title: 'Meu Perfil',
            route: '/settings/accounts'
        },
        {
            title: 'Sair',
            route: '/logout'
        }
    ]
};

export default Header;
