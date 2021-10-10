import { CommandBar } from '@fluentui/react/lib/CommandBar';
import { ThemeProvider, PartialTheme } from '@fluentui/react/lib/Theme';
import { IButtonStyles } from '@fluentui/react/lib/Button';
import { useHistory } from 'react-router-dom';

const titleStyles: Partial<IButtonStyles> = {
    label: { fontSize: 18 },
};

const barTheme: PartialTheme = {
    palette: {
        themePrimary: '#ffffff',
        themeLighterAlt: '#767676',
        themeLighter: '#a6a6a6',
        themeLight: '#c8c8c8',
        themeTertiary: '#d0d0d0',
        themeSecondary: '#dadada',
        themeDarkAlt: '#eaeaea',
        themeDark: '#f4f4f4',
        themeDarker: '#f8f8f8',
        neutralLighterAlt: '#097dd6',
        neutralLighter: '#1282d7',
        neutralLight: '#2089da',
        neutralQuaternaryAlt: '#288edc',
        neutralQuaternary: '#3092dd',
        neutralTertiaryAlt: '#4fa3e3',
        neutralTertiary: '#c8c8c8',
        neutralSecondary: '#d0d0d0',
        neutralPrimaryAlt: '#dadada',
        neutralPrimary: '#ffffff',
        neutralDark: '#f4f4f4',
        black: '#f8f8f8',
        white: '#0078d4',
    },
};

export default function TopBar() {
    const history = useHistory();
    return (
        <ThemeProvider theme={barTheme}>
            <CommandBar
                items={[
                    {
                        key: 'home',
                        text: 'Gallery',
                        buttonStyles: titleStyles,
                        onClick: () => history.push('/'),
                    },
                ]}
                farItems={[
                    {
                        key: 'user',
                        text: 'Verónica Barrientos',
                        // iconProps: { iconName: 'more' },
                        subMenuProps: {
                            items: [
                                {
                                    key: 'profile',
                                    text: 'Profile',
                                    iconProps: { iconName: 'AccountManagement' },
                                    onClick: () => history.push('/profile'),
                                },
                                {
                                    key: 'signout',
                                    text: 'Sign Out',
                                    iconProps: { iconName: 'SignOut' },
                                    onClick: () => history.push('/profile'),
                                },
                            ],
                        },
                    },
                ]}
                ariaLabel="Use left and right arrow keys to navigate between commands"
            />
        </ThemeProvider>
    );
}
