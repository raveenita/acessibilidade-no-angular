import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable, of, pipe, map, mergeMap, forkJoin, observable } from 'rxjs';
import { Response } from '../models/api-response.interface';
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
  public highestNumberOfRepetitions: number = 0;
  public classifiedTracks: ClassifiedTracks | undefined;
  public tracks: Array<Track> = [];
  public accountId: string = '22tk6jgofco56wm3rk3ctx6lq';
  public showFavoriteTrack: boolean = false;

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
      (playlist) => {
        Object.entries(playlist).forEach(([key, value]) => {
          console.log(key, value);
          // const track: Track = value.track;
  
          // this.handleTrack(track);
        });
      }
  );
  }

  private resetSavedTracks() { 
    this.classifiedTracks = undefined;
    this.highestNumberOfRepetitions = 0;
  }

  private handleTrack(currentTrack: Track): void {
    this.tracks.push(currentTrack);
    this.setTrackRepetitions(currentTrack);
  };

  private setTrackRepetitions(currentTrack: Track): void {
    const handledTracks = this.tracks.map((track: Track) => {

      if (track.id === currentTrack.id) {
        track.repetitions = (track.repetitions || 0) + 1;
        this.highestNumberOfRepetitions = (track.repetitions >= this.highestNumberOfRepetitions) ? track.repetitions : this.highestNumberOfRepetitions;
      }

      return track;
    });

    this.tracks = handledTracks;
  }

  private getMostRepeatedTracks(): Array<Track> {
    const favoriteTracks = this.tracks.filter((track) => {
      return track.repetitions === this.highestNumberOfRepetitions;
    });

    return favoriteTracks;
  }

  private classifyTracks(): ClassifiedTracks {
    const favoritesTracks = this.getMostRepeatedTracks();

    return {  
      favoriteTrack: favoritesTracks[0],
      spotlights: favoritesTracks.slice(1),
      familiar: []
    };
  }
  
}
