import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/models/songs.interface';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() song: Song = {
    title: 'el mundo detras',
    repetitions: 0,
    coverImage: '',
    artist: 'dulce maria'
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.song);
  }

}
