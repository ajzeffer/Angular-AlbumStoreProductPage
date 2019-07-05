import {Track} from './track';

export interface AlbumInfo {
  id: number;
  artist: string;
  album: Album;
}
export interface Album {
  name: string;
  releaseDate: Date;
  coverImage: string;
  tracks: Track[];
}
