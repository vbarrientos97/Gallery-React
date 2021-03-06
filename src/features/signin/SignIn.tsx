import { Stack, Text, getTheme } from '@fluentui/react';

const theme = getTheme();
const boldStyle = { root: { color: theme.palette.themePrimary } };

export default function SignIn() {
    return (
        <Stack horizontalAlign="center" verticalAlign="center" verticalFill>
            <Text variant="mega" styles={boldStyle}>
                SignIn Screen
            </Text>
        </Stack>
    );
}
