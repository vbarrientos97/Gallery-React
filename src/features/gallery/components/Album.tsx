import { useHistory } from 'react-router-dom';

interface AlbumProps {
    albumName: string;
    albumId: number;
}

export default function Album({ albumName, albumId }: AlbumProps) {
    const history = useHistory();

    function clickAlbum() {
        history.push(`/photoslist/${albumId}`);
    }

    return (
        <button type="button" onClick={clickAlbum} className="main-album-btn">
            <div className="album-container">
                <h2>{albumName}</h2>
            </div>
        </button>
    );
}
