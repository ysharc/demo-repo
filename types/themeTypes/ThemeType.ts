export type ThemeTypes = {
    name: string;
    dark: boolean;
    variables?: object;
    colors: {
        primary?: string;
        secondary?: string;
        info?: string;
        success?: string;
        accent?: string;
        warning?: string;
        error?: string;
        lightprimary?: string;
        lightsecondary?: string;
        lightsuccess?: string;
        lighterror?: string;
        lightinfo?: string;
        lightwarning?: string;
        textPrimary?: string;
        textSecondary?: string;
        borderColor?: string;
        hoverColor?: string;
        inputBorder?: string;
        containerBg?: string;
        background?: string;
        surface?: string;
        'on-surface-variant'?: string;
        grey100?: string;
        grey200?: string;
        darkbg?: string;
        noti?: string;
        graphPrimary?: string,
        graphSecondary?: string,
        graphTertiary?: string,
        mediumPrimary?: string,
        greyCyan?: string
    };
};
