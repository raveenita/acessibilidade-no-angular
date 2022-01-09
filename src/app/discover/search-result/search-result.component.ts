import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/songs.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public mostPlayedSong: Song = {
    title: 'Lean On',
    artist: 'Mo',
    repetitions: 147,
    coverImage: 'i dont have it'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
