import * as React from 'react';
import { useId, useBoolean } from '@fluentui/react-hooks';
import { getTheme, mergeStyleSets, FontWeights, Modal, IIconProps } from '@fluentui/react';
import { DefaultButton, IconButton, IButtonStyles } from '@fluentui/react/lib/Button';

export const ModalPhoto: React.FunctionComponent = () => {
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);

    const titleId = useId('title');

    return (
        <div>
            <DefaultButton onClick={showModal} text="Open Modal" />
            <Modal
                titleAriaId={titleId}
                isOpen={isModalOpen}
                onDismiss={hideModal}
                isBlocking={false}
                containerClassName={contentStyles.container}
            >
                <div className={contentStyles.header}>
                    <span id={titleId}>Lorem Ipsum</span>
                    <IconButton
                        styles={iconButtonStyles}
                        iconProps={cancelIcon}
                        ariaLabel="Close popup modal"
                        onClick={hideModal}
                    />
                </div>
                <div className={contentStyles.body}>
                    <p>
                        Mauris at nunc eget lectus lobortis facilisis et eget magna. venenatis augue
                        venenatis augue sapien, rhoncus faucibus magna semper eget. Proin rutrum
                        libero sagittis sapien aliquet auctor. Suspendisse tristique a magna at
                        magna at facilisis. Duis rhoncus feugiat magna in rutrum. Suspendisse
                        semper, dolor et vestibulum lacinia, nunc felis malesuada ex, nec hendrerit
                        justo ex et massa. Quisque quis mollis nulla. Nam commodo est ornare,
                        rhoncus odio eu, pharetra tellus. Nunc sed velit mi.
                    </p>
                </div>
            </Modal>
        </div>
    );
};

const cancelIcon: IIconProps = { iconName: 'Cancel' };

const theme = getTheme();
const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
    },
    header: [
        theme.fonts.xLargePlus,
        {
            flex: '1 1 auto',
            borderTop: `4px solid ${theme.palette.themePrimary}`,
            color: theme.palette.neutralPrimary,
            display: 'flex',
            alignItems: 'center',
            fontWeight: FontWeights.semibold,
            padding: '12px 12px 14px 24px',
        },
    ],
    body: {
        flex: '4 4 auto',
        padding: '0 24px 24px 24px',
        overflowY: 'hidden',
        selectors: {
            p: { margin: '14px 0' },
            'p:first-child': { marginTop: 0 },
            'p:last-child': { marginBottom: 0 },
        },
    },
});
const iconButtonStyles: Partial<IButtonStyles> = {
    root: {
        color: theme.palette.neutralPrimary,
        marginLeft: 'auto',
        marginTop: '4px',
        marginRight: '2px',
    },
    rootHovered: {
        color: theme.palette.neutralDark,
    },
};
