import { ThemeProvider as StyledThemeProvider } from "styled-components";

const bodyColor = 'linear-gradient(#141a3bd1, #000d31ab)',
    modalColor = '#49495c',
    formColor = '#363658',
    buttonColor = '#178102';

const theme = {
    color: {
        bodyColor,
        modalColor,
        formColor,
        buttonColor,
    }
}

export const Theme = ({ children }) => {
    return (
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    );
}
