import { Track } from "./track.interface";

export interface ClassifiedTracks {
    favoriteTrack:  Track
    spotlights: Array<Track>;
    familiar: Array<Track>;
}