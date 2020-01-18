export interface PHeader {
    logo: string;
    user: {
        name: string;
        image?: string;
    };
    menuUserBar?: {
        title: string | JSX.Element;
        route: string;
    }[];
    menu: {
        title: string | JSX.Element;
        route: string;
        opened?: boolean; // Only test: Ativar menu
        subMenu?: {
            title: string | JSX.Element;
            route: string;
        }[];
    }[];
    contentBeforeUser?: JSX.Element;
    __openUserMenuInfo?: boolean; // Only test: Ativar modal do usuário
    __menuMobileOpen?: boolean; // Only test: Abrir menu mobile
}

export interface PHeaderChild extends PHeader {
    openUserMenuInfo: boolean;
    menuMobile: boolean;
    closeUserMenuInfo: () => any;
    toggleUserMenuInfo: () => any;
    toggleMenuMobile: () => any;
}

export interface SHeader {
    // Menu do usuário aberto
    openUserMenuInfo: boolean;
    menuOpen: boolean;
}
