import React, { useEffect, useState } from 'react';

const PhotoGrid: React.FC = () => {
    const [photos, setPhotos] = useState<string[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadPhotos = async () => {
            const fetchPhotos = async (count: number): Promise<string[]> => {
                const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${count}`);
                const data = await response.json();
                return data.map((item: { download_url: string }) => item.download_url);
            };

            const newPhotos = await fetchPhotos(9);
            setPhotos(newPhotos);
        };

        loadPhotos();
        const intervalId = setInterval(() => {
            setPage(prevPage => prevPage + 1);
            loadPhotos();
        }, 10000);
        return () => clearInterval(intervalId);
    }, [page]);

    return (
        <div className="photo-grid">
            {photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Customer ${index + 1}`} />
            ))}
        </div>
    );
};

export default PhotoGrid;
