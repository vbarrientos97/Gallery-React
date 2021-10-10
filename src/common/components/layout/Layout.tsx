import { ReactNode } from 'react';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles } from '@fluentui/react/lib/Stack';
import { DefaultPalette, DefaultEffects } from '@fluentui/react/lib/Styling';
import AppBar from './AppBar';
import TopBar from './TopBar';

// Styles definition
const parantStackStyles: IStackStyles = {
    root: {
        background: DefaultPalette.neutralLighter,
        height: '100vh',
        overflow: 'auto',
    },
    inner: {
        height: '100%',
    },
};

const navStyles: IStackItemStyles = {
    root: {
        backgroundColor: DefaultPalette.neutralLight,
    },
};

const contentStyles: IStackItemStyles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        height: '100%',
        boxShadow: DefaultEffects.elevation16,
    },
};

// Tokens definition

const parentTokens: IStackTokens = {
    maxHeight: '100vh',
    maxWidth: '100vw',
};

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <Stack styles={parantStackStyles} tokens={parentTokens}>
            <TopBar />
            <Stack horizontal grow>
                <Stack.Item styles={navStyles}>
                    <AppBar />
                </Stack.Item>
                <Stack.Item grow styles={contentStyles}>
                    {children}
                </Stack.Item>
            </Stack>
        </Stack>
    );
}
