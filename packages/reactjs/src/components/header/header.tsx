import React, { Component } from "react";

interface Props {}
interface State {}

export default class Header extends Component<Props, State> {
    state = {};

    /**
     * Renderiza o menu do usuario
     */
    renderUserMenu(): JSX.Element {
        let username = "sdasd";

        return (
            <div className="container-user">
                <div
                    className="open-menu"
                    // onBlur={(): any => this.closeUserMenu()}
                    // onFocus={(): any => this.closeUserMenu()}
                    // onClick={this.openUserMenu}
                    // tabIndex={1000}
                >
                    <div
                        className="username-container"
                        // onClick={this.openAndClose}
                    >
                        <div className="user-image-container">
                            {/* <img src={data.user.image} /> */}
                        </div>
                        Olá,
                        <span className="username">{username}</span>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Render
     */
    render(): JSX.Element {
        return (
            <div className="ds-header">
                <div className="ds-header-top">
                    <div className="width-max">
                        <div className="ds-table w-100 table-header">
                            {/* -------- Logo --------  */}
                            <div className="ds-cell vertical-align-middle ds-logo-cell">
                                <div className="ds-logo">
                                    <img
                                        src={
                                            "https://app2.bancodosimoveis.com.br/assets/images/logo.png"
                                        }
                                        alt=""
                                    />
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
            </div>
        );
    }
}
