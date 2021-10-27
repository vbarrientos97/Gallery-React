import { useState, useCallback, FormEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { useGetAllAlbumsQuery } from '../services/galleryApi';
import Album from '../components/Album';
import '../gallery.css';

interface RouteParams {
    id: string;
}

export function GlobalUser() {
    const id = useParams<RouteParams>();
    return id;
}

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };

export default function Gallery() {
    const albumList = useGetAllAlbumsQuery();
    const listData = albumList.data;
    const [listDataSearch, setListDataSearch] = useState(albumList.data);
    const [loadingMore, setLoadingMore] = useState(10);
    const id = useParams<RouteParams>();
    const [firstTextFieldAlbum, setFirstTextFieldAlbum] = useState('');

    const onChangeFirstTextFieldAlbum = useCallback(
        (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            setFirstTextFieldAlbum(newValue || '');
            console.log(newValue, listData);
            if (newValue === '') {
                setListDataSearch(albumList.data);
            } else {
                setListDataSearch(
                    listData?.filter(item => item.title.includes(newValue as string)),
                );
            }
        },
        [],
    );

    // useEffect(() => {
    //     console.log(listDataSearch, albumList.data);
    //     setListDataSearch(listDataSearch);
    // }, []);

    return (
        <>
            <TextField
                label="Search Album"
                value={firstTextFieldAlbum}
                className="text-field-search"
                onChange={onChangeFirstTextFieldAlbum}
                styles={textFieldStyles}
            />
            <div className="gallery-container">
                {listDataSearch
                    ?.filter(item => Number(id.id) === item.userId)
                    .map((item, index) => {
                        if (index < loadingMore) {
                            return <Album albumName={item.title} key={item.id} albumId={item.id} />;
                        }
                        return console.log('');
                    })}
            </div>
            {listDataSearch &&
                loadingMore <
                    listDataSearch?.filter(item => Number(id.id) === item.userId).length && (
                    <button
                        className="loading-btn"
                        type="button"
                        onClick={() => setLoadingMore(loadingMore + 10)}
                    >
                        Loading More
                    </button>
                )}
        </>
    );
}
