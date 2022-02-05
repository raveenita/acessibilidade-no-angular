export interface Track {
  href: string;
  track: boolean;
  id?: string;
  name: string;
  artists: Array<Artist>;
  album: Album;
  repetitions: number;
}

export interface Artist {
  name: string;
}

export interface Album {
  images: Array<Image>
}

export interface Image {
  url: string;
}