import { Component, OnInit } from '@angular/core';
import { Song } from '../../../models/songs.interface';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  public songs: Array<Song> = [
    {
      title: 'ser o parecer',
      artist: 'RBD',
      coverImage: 'https://img.discogs.com/RKWOkZR7BsF-hSDN9-jlld_ZrXA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3343845-1326638689.jpeg.jpg',
      repetitions: 4,
    },
    {
      title: 'ser o parecer',
      artist: 'RBD',
      coverImage: 'https://img.discogs.com/RKWOkZR7BsF-hSDN9-jlld_ZrXA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3343845-1326638689.jpeg.jpg',
      repetitions: 4,
    },
    {
      title: 'ser o parecer',
      artist: 'RBD',
      coverImage: 'https://img.discogs.com/RKWOkZR7BsF-hSDN9-jlld_ZrXA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3343845-1326638689.jpeg.jpg',
      repetitions: 4,
    },
    {
      title: 'ser o parecer',
      artist: 'RBD',
      coverImage: 'https://img.discogs.com/RKWOkZR7BsF-hSDN9-jlld_ZrXA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3343845-1326638689.jpeg.jpg',
      repetitions: 4,
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.songs);
  }

}
