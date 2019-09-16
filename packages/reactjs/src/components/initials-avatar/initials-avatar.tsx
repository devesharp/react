import React, { Component } from "react";

interface PInitials {
    name: any;
    size?: string;
    dark?: boolean;
}

export default class InitialsAvatar extends Component<PInitials> {
    state = {};

    /**
     * Class utilizadas no componente
     */
    classStyle: string;

    /**
     * Style do componente
     */
    style: {
        background?: string;
        color?: string;
    } = {};

    /**
     * Letra
     */
    initials = "";

    /**
     * Colors
     */
    colorList = [
        "#3ec55d",
        "#00c5d6",
        "#f15588",
        "#ffb229",
        "#8f63ff",
        "#8f63ff",
        "#00b1cd"
    ];

    getLetter() {
        /**
         * Converte nome em um das cores salvas
         */
        let colorNumber = 0;
        for (const key in this.props.name) {
            if (this.props.name.hasOwnProperty(key)) {
                colorNumber += this.props.name[key].charCodeAt(0);
            }
        }
        const color = this.colorList[colorNumber % this.colorList.length];

        // Resgata primeiro caracter
        this.initials = this.props.name[0].toUpperCase();

        // Adicionar color no style
        this.style = {
            color
        };

        /**
         * Caso seja dark muda background
         */
        if (!this.props.dark) {
            this.style.background = `${color}24`;
        }

        /**
         * Tamanho do size
         */
        this.classStyle = "initials-letter";
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
        this.getLetter();
        return (
            <div className={this.classStyle} style={this.style}>
                {this.initials}
            </div>
        );
    }
}
