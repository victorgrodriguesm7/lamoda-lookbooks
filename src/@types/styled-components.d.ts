import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            grey: string;
            "dark-gray": string;
            white: string;
            black: string;
        },
        fontSize: {
            xLarge: string; // 58 3rem
            large: string; // 32 2rem
            medium: string; // 16 1rem
            small: string; // 12 .75rem
        },
        fontWeight: {
            bold: number;
            default: number;
            light: number;
        }
    }
}