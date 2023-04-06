import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const MAIN_THEME: ThemeTypes = {
    name: 'MAIN_THEME',
    dark: false,
    variables: {
        'border-color': '#e5eaef'
    },
    colors: { 
        info: '#539BFF',
        success: '#13DEB9',
        accent: '#FFAB91',
        warning: '#FFAE1F',
        error: '#FA896B',
        lightsecondary: '#E8F7FF',
        lightsuccess: '#E6FFFA',
        lighterror: '#FDEDE8',
        lightwarning: '#FEF5E5',
        textPrimary: '#2A3547',
        textSecondary: '#2A3547',
        borderColor: '#e5eaef',
        inputBorder: '#DFE5EF',
        containerBg: '#ffffff',
        hoverColor: '#f6f9fc',
        'on-surface-variant': '#fff',
        grey100: '#F2F6FA',
        darkbg:'#2a3447',
        /*------------ MS -------------*/
        background: '#fff',
        surface: '#fff',
        noti: '#D32A97',
        primary: '#3584F7',
        secondary: '#01AFB2',
        lightprimary: '#AECEFC',
        graphPrimary: '#FF6E4E',
        graphSecondary: '#D42A8C',
        graphTertiary: '#FFB815',
        mediumPrimary: '#67A3F9',
        grey200: '#8A8F9C',
        greyCyan: "#383D3B"
    }
};

export { MAIN_THEME };
