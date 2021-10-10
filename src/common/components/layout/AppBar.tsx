import { Stack } from '@fluentui/react/lib/Stack';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { mergeStyles, DefaultPalette } from '@fluentui/react/lib/Styling';
import { NavLink } from 'react-router-dom';
import { getTheme, Text } from '@fluentui/react';

const theme = getTheme();

const navClass = mergeStyles({
    display: 'flex',
    flexDirection: 'column;',
    textDecoration: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    color: DefaultPalette.neutralPrimary,
    position: 'relative',
    '&:hover': {
        backgroundColor: DefaultPalette.white,
    },
    paddingLeft: 5,
    paddingRight: 5,
});

const activeClass = mergeStyles({
    color: theme.palette.themePrimary,
    '&::before': {
        content: '""',
        height: 48,
        left: '.2rem',
        position: 'absolute',
        top: '.4rem',
        borderLeft: `2px solid ${theme.palette.themePrimary}`,
        borderTopLeftRadius: '0.3rem',
        borderTopRightRadius: '0.3rem',
        borderBottomRightRadius: '0.3rem',
        borderBottomLeftRadius: '0.3rem',
        background: theme.palette.themePrimary,
    },
    '& span': {
        color: theme.palette.themePrimary,
    },
});

const iconClass = mergeStyles({
    fontSize: '1.2rem',
    margin: '0 25px',
});

interface App {
    name: string;
    icon: string;
    path: string;
}

const apps: Array<App> = [
    {
        name: 'profile',
        icon: 'AccountManagement',
        path: '/profile',
    },
    {
        name: 'gallery',
        icon: 'Album',
        path: '/gallery',
    },
];

export default function AppBar() {
    return (
        <Stack>
            {apps.map(app => (
                <NavLink
                    key={app.name}
                    to={app.path}
                    className={navClass}
                    activeClassName={activeClass}
                >
                    <FontIcon
                        aria-label={`Go to ${app.name}`}
                        iconName={app.icon}
                        className={iconClass}
                    />
                    <Text variant="small">{app.name}</Text>
                </NavLink>
            ))}
        </Stack>
    );
}
