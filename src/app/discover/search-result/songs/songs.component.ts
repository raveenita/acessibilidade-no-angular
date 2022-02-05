import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track.interface';
import { Song } from '../../../models/songs.interface';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  @Input() public tracks: Array<Track> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
