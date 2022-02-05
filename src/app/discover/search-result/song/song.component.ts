import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track.interface';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() track: Track | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
