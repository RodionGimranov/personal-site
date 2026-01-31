export interface Song {
    id?: number | string;
    song_url: string;
    album_cover: string;
    song_name: string;
    artist_name: string;
    explicit_content?: boolean;
}

export interface SongsJson {
    songs: Song[];
}
