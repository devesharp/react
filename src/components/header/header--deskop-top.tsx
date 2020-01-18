import * as React from 'react';
import { PHeader, PHeaderChild } from './header.interface';
import HeaderDesktopUserMenu from './header--deskop-user-menu';

const HeaderDesktopTop: React.FunctionComponent<PHeaderChild> = props => {
    return (
        <div className="ds-header-top">
            <div className="width-max">
                <div className="ds-table w-100 table-header">
                    {/* Menu Hamburguer */}
                    <div
                        className={`ds-menu-hamburger ${
                            props.menuMobile ? 'open' : ''
                        }`}
                        onClick={props.toggleMenuMobile}
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                    {/* Menu Hamburguer */}

                    {/* -------- Logo --------  */}
                    <div className="ds-cell vertical-align-middle ds-logo-cell">
                        <div className="ds-logo">
                            <img src={props.logo} alt="" />
                        </div>
                    </div>
                    {/* //-------- Logo --------  */}

                    {/* -------- Content before --------  */}
                    <div className="ds-cell text-right vertical-align-middle">
                        {props.contentBeforeUser}
                    </div>
                    {/* //-------- Content before --------  */}

                    {/* -------- Usuário --------  */}
                    <div className="ds-cell text-right vertical-align-middle ds-user-cell">
                        <HeaderDesktopUserMenu {...props} />
                    </div>
                    {/* //-------- Usuário --------  */}
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktopTop;
