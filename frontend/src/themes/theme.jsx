import { ThemeProvider as StyledThemeProvider } from "styled-components";

const bodyColor = 'linear-gradient(#141a3bd1, #000d31ab)',
    modalColor = '#49495c',
    buttonColor = '#178102';

const theme = {
    color: {
        bodyColor,
        modalColor,
        buttonColor,
    }
}

export const Theme = ({ children }) => {
    return (
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    );
}
