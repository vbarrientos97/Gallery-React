import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { DefaultPalette } from '@fluentui/react';

const navStyles: Partial<INavStyles> = {
    root: {
        boxSizing: 'border-box',
        overflowY: 'auto',
        backgroundColor: DefaultPalette.neutralQuaternaryAlt,
    },
};

const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: 'Demo',
                url: 'http://example.com',
                key: 'demo',
                icon: 'CoffeeScript',
            },
            {
                name: 'Home',
                url: 'http://example.com',
                expandAriaLabel: 'Expand Home section',
                collapseAriaLabel: 'Collapse Home section',
            },
            {
                name: 'Documents',
                url: 'http://example.com',
                key: 'key3',
                target: '_blank',
            },
            {
                name: 'Pages',
                url: 'http://msn.com',
                key: 'key4',
                target: '_blank',
            },
            {
                name: 'Notebook',
                url: 'http://msn.com',
                key: 'key5',
            },
            {
                name: 'Communication and Media',
                url: 'http://msn.com',
                key: 'key6',
                target: '_blank',
            },
            {
                name: 'News',
                url: 'http://cnn.com',
                icon: 'News',
                key: 'key7',
                target: '_blank',
            },
        ],
    },
];

export default function SideNav() {
    return (
        <Nav
            selectedKey="key3"
            ariaLabel="Navigation bar"
            styles={navStyles}
            groups={navLinkGroups}
        />
    );
}
