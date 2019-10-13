import { Component } from "react";
interface PInitials {
    name: any;
    size?: string;
    dark?: boolean;
}
export default class InitialsAvatar extends Component<PInitials> {
    state: {};
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
    };
    /**
     * Letra
     */
    initials: string;
    /**
     * Colors
     */
    colorList: string[];
    getLetter(): void;
    render(): JSX.Element;
}
export {};
