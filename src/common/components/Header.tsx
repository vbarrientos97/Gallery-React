import { Text, getTheme } from '@fluentui/react';
import { ReactNode } from 'react';

const theme = getTheme();

interface Props {
    children: ReactNode;
}

export default function Header({ children }: Props) {
    return (
        <div style={{ boxShadow: theme.effects.elevation8, padding: 20 }}>
            <Text variant="xxLarge">{children}</Text>
        </div>
    );
}
