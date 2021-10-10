export interface Country {
    abbreviation: string;
    capital: string;
    currency: string;
    name: string;
    phone: string;
    population: number;
    media: {
        flag: string;
        emblem: string;
        orthographic: string;
    };
    id: number;
}

export interface Album {
    userId: number;
    id: number;
    title: string;
}

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export interface User {
    id: number;
    name: string;
    username: string;
    address: { zipcode: string };
}
