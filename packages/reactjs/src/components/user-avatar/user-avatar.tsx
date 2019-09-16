import React, { Component } from "react";
import InitialsAvatar from "../initials-avatar/initials-avatar";

interface PUserAvatar {
    size?: "xs" | "s" | "m" | "l" | "xl";
    user: {
        name: string;
        image?: string;
    };
}

export default class UserAvatar extends Component<PUserAvatar> {
    state = {};

    /**
     * Class utilizadas no componente
     */
    classStyle: string;

    componentWillMount() {
        /**
         * Tamanho do size
         */
        this.classStyle = "ds-user-avatar";
        switch (this.props.size) {
            case "xs":
            case "s":
            case "m":
            case "l":
            case "xl":
                this.classStyle += " initials-" + this.props.size;
                break;
        }
    }

    render() {
        let { name, image } = this.props.user;

        if (image) {
            return (
                <div className={this.classStyle}>
                    <img src={image} />
                </div>
            );
        } else {
            return <InitialsAvatar name={name} dark={true} />;
        }
    }
}
