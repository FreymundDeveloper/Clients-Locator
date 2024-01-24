import { ThemeProvider as StyledThemeProvider } from "styled-components";

const bodyColor = 'linear-gradient(#141a3bd1, #000d31ab)',
    modalColor = '#49495c',
    formColor = '#363658',
    buttonActionColor = '#178102',
    buttonMapColor = '#1390a7';

const theme = {
    color: {
        bodyColor,
        modalColor,
        formColor,
        buttonActionColor,
        buttonMapColor,
    }
}

export const Theme = ({ children }) => {
    return (
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    );
}
