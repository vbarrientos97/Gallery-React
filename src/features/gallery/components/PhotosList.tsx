/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router';
import { useId, useBoolean } from '@fluentui/react-hooks';
import { getTheme, mergeStyleSets, FontWeights, Modal, IIconProps } from '@fluentui/react';
import { IconButton, IButtonStyles, PrimaryButton } from '@fluentui/react/lib/Button';
import { useGetAllPhotosQuery } from '../services/galleryApi';
import '../gallery.css';

const cancelIcon: IIconProps = { iconName: 'Cancel' };

interface RouteParams {
    id: string;
}

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

export default function PhotosList() {
    const id = useParams<RouteParams>();
    const albumList = useGetAllPhotosQuery();
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalImageUrl, setModalImageUrl] = useState('');

    const titleId = useId('title');

    function modalData(title: string, imageUrl: string) {
        setModalTitle(title);
        setModalImageUrl(imageUrl);
        showModal();
    }

    return (
        <>
            {console.log('aquiiii', id)}
            <div className="flex-photo-container gallery-container">
                {albumList.data
                    ?.filter(item => Number(id.id) === item.albumId)
                    .map(item => (
                        <div className="photo-container" key={item.id}>
                            <img src={item.thumbnailUrl} alt={item.title} />
                            <h3>{item.title}</h3>
                            <PrimaryButton
                                onClick={() => modalData(item.title, item.url)}
                                text="See more"
                            />
                        </div>
                    ))}
            </div>
            <Modal
                titleAriaId={titleId}
                isOpen={isModalOpen}
                onDismiss={hideModal}
                isBlocking={false}
                containerClassName={contentStyles.container}
            >
                <div className={contentStyles.header}>
                    <span id={titleId}>{modalTitle}</span>
                    <IconButton
                        styles={iconButtonStyles}
                        iconProps={cancelIcon}
                        ariaLabel="Close popup modal"
                        onClick={hideModal}
                    />
                </div>
                <div className={contentStyles.body}>
                    <p>Dónde está la mamá de Luismi?</p>
                    <img src={modalImageUrl} alt={modalTitle} />
                </div>
            </Modal>
        </>
    );
}