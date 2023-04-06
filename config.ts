export type ConfigProps = {
    Sidebar_drawer: any;
    Customizer_drawer: boolean;
    mini_sidebar: boolean;
    setHorizontalLayout: boolean;
    actTheme: string;
    boxed: boolean;
    setBorderCard: boolean;
};

const config: ConfigProps = {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    mini_sidebar: false,
    setHorizontalLayout: false, // Horizontal layout
    actTheme: 'MAIN_THEME',
    boxed: false,
    setBorderCard: false
};

export default config;
