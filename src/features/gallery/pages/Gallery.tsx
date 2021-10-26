import { useState } from 'react';
import { useParams } from 'react-router-dom';
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

export default function Gallery() {
    const albumList = useGetAllAlbumsQuery();
    const listData = albumList.data;
    const [loadingMore, setLoadingMore] = useState(10);
    const id = useParams<RouteParams>();

    return (
        <>
            <div className="gallery-container">
                {listData
                    ?.filter(item => Number(id.id) === item.userId)
                    .map((item, index) => {
                        if (index < loadingMore) {
                            return <Album albumName={item.title} key={item.id} albumId={item.id} />;
                        }
                        return console.log('');
                    })}
            </div>
            {listData &&
                loadingMore < listData?.filter(item => Number(id.id) === item.userId).length && (
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
