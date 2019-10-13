import { Component } from "react";
interface PHeader {
    data: {
        logo: string;
        user: {
            name: string;
            image?: string;
        };
    };
}
interface SHeader {
}
export default class Header extends Component<PHeader, SHeader> {
    state: {};
    /**
     * Renderiza o menu do usuario
     */
    renderUserMenu(): JSX.Element;
    /**
     * Render
     */
    render(): JSX.Element;
}
export {};
