import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable, of, pipe, map, mergeMap, forkJoin, observable } from 'rxjs';
import { ClassifiedTracks } from '../models/classified-tracks.interface';
import { Playlist } from '../models/playlist.interface';
import { Track } from '../models/track.interface';
import { PlaylistsService } from './services/playlists.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  public highestRepetitions: number = 0;
  public classifiedTracks: ClassifiedTracks | undefined;
  public tracks: Array<Track> = [];
  public accountId: string = '22tk6jgofco56wm3rk3ctx6lq';
  public repetitions = {}

  constructor(
    private readonly playlistsService: PlaylistsService
  ) { }

  ngOnInit(): void {
  }

  public getFavoriteTracksFromUserPlaylists() {
    if (this.accountId !== null) {
      this.resetSavedTracks();

      this.playlistsService.getPlaylists(this.accountId)
      .pipe(
        map((playlists: Array<Playlist>) => this.getPlaylistTracks(playlists))
      ).subscribe();
    }
  }
 
  private getPlaylistTracks(playlists: Array<Playlist>): void {
    const $playlists: Array<Observable<Playlist>> = [];

    playlists.forEach((playlist: Playlist) => {
      const playlistUrlTrack: string = playlist.tracks?.href;

      $playlists.push(this.playlistsService.getPlaylist(playlistUrlTrack));
    });

    forkJoin($playlists).subscribe(
      (playlists) => {
        Object.entries(playlists).forEach(([indexPlaylist, currentPlaylist]) => {
          Object.entries(currentPlaylist).forEach(([indexTrack, currentTrack]) => {
            this.tracks.push(currentTrack.track);
          });
        });

        this.tracks = this.trackRepetitions();
        this.classifiedTracks = this.classifyTracks();
      }
    );
  }

  private resetSavedTracks() { 
    this.classifiedTracks = undefined;
    this.highestRepetitions = 0;
    this.classifiedTracks = undefined
  }

  private trackRepetitions(): Array<Track> {
    const INITIAL_REPETITIONS_NUMBER = 0;
    
    const handledTracks = [...this.tracks.reduce( (trackMap, track) => {
      if (!trackMap.has(track.id)) {
        trackMap.set(track.id, { ...track, repetitions: INITIAL_REPETITIONS_NUMBER });
      }
      trackMap.get(track.id).repetitions++;
      this.highestRepetitions = this.highestRepetitions < trackMap.get(track.id).repetitions ? trackMap.get(track.id).repetitions : this.highestRepetitions;
      
      return trackMap;
    }, new Map).values()];

    return handledTracks;
  }

  private getMostRepeatedTracks(): Array<Track> {
    const favoriteTracks = this.tracks.filter((track) => {
      return track.repetitions === this.highestRepetitions;
    });

    return favoriteTracks;
  }

  private classifyTracks(): ClassifiedTracks {
    const favoritesTracks = this.getMostRepeatedTracks();

    return {  
      favoriteTrack: favoritesTracks[0],
      spotlights: favoritesTracks.slice(-1),
      familiar: []
    };
  }
  
}
