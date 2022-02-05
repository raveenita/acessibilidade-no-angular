import { Playlist } from "./playlist.interface";
import { Track } from "./track.interface";

export interface Response {
    href: string;
    limit?: number;
    offset?: number;
    total?: number;
    items: Array<Playlist | Track>;
 }