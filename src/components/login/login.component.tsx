import * as React from "react";
import Logo from "../../../assets/logo-big.png";

export interface PLogin {}
interface SLogin {}

export default class Login extends React.Component<PLogin, SLogin> {
    state = {};

    constructor(props: PLogin) {
        super(props);
    }

    /**
     * Render
     */
    render(): JSX.Element {
        return (
            <div className={"login"}>
                <div className="login-container">
                    <img src={Logo} alt="" />
                </div>
            </div>
        );
    }
}
