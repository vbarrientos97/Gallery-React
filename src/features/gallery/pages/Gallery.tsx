import { useState } from 'react';
import { useGetAllAlbumsQuery } from '../services/galleryApi';
import Album from '../components/Album';
import '../gallery.css';

export default function Gallery() {
    const albumList = useGetAllAlbumsQuery();
    const listData = albumList.data;
    const [loadingMore, setLoadingMore] = useState(10);

    return (
        <>
            <div className="gallery-container">
                {listData?.map((item, index) => {
                    if (index < loadingMore) {
                        return <Album albumName={item.title} key={item.id} albumId={item.id} />;
                    }
                    return console.log('necesitamos hacer loading more');
                })}
            </div>
            {listData && loadingMore < listData?.length && (
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
