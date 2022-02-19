import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track.interface';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {
  @Input() spotlightedTrack: Track | undefined; 
  constructor() { }

  ngOnInit(): void {
  console.log(this.spotlightedTrack);
  }

}
