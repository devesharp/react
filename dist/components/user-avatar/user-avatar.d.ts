import { Component } from "react";
interface PUserAvatar {
    size?: "xs" | "s" | "m" | "l" | "xl";
    user: {
        name: string;
        image?: string;
    };
}
export default class UserAvatar extends Component<PUserAvatar> {
    state: {};
    /**
     * Class utilizadas no componente
     */
    classStyle: string;
    /**
     * Configurar componente
     */
    configure(): void;
    /**
     * Render
     */
    render(): JSX.Element;
}
export {};
