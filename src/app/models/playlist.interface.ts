import { Owner } from "./owner.interface";
import { Thumbnail } from "./thumbnail.interface";
import { Track } from "./track.interface";

export interface Playlist {
    collaborative: boolean;
    description: string;
    external_urls: Object;
    href: string;
    id: string;
    images: Array<Thumbnail>;
    name: string;
    owner: Owner;
    public: boolean;
    snapshot_id: string;
    tracks: Track;
    type: string;
    url: string;
    items: Array<Track>;
  }
  