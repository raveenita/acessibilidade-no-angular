import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Playlist } from '../../models/playlist.interface';
import { Response } from '../../models/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  private tracks: number = 0;

  private BASE_URL_SPOTIFY = 'https://api.spotify.com/v1';


  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getPlaylists(accountId: string): Observable<Array<Playlist>> {
    return this.httpClient.get<Response>(`${this.BASE_URL_SPOTIFY}/users/${accountId}/playlists`)
    .pipe(
      map((response: Response) => response.items as Array<Playlist>)
    );
  }

  public getPlaylist(playlistUrl: string): Observable<Playlist> {
    return this.httpClient.get<Response>(playlistUrl)
    .pipe(
      map((response: Response) => response.items as any)
    );
  }
}
