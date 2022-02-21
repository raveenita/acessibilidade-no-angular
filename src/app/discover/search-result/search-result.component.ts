import { Component, Input, OnInit } from '@angular/core';
import { ClassifiedTracks } from 'src/app/models/classified-tracks.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() tracks: ClassifiedTracks | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
