import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/models/songs.interface';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {
  @Input() spotlightedSong: Song | undefined; 

  constructor() { }

  ngOnInit(): void {
  }

}
