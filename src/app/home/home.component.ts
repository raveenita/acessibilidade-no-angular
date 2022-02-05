import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const fragment = this.activatedRoute.snapshot.fragment;
    const accessToken = fragment ? fragment.split('=')[1] : null; 
    
    sessionStorage.setItem('access_token', accessToken as string);
  }

}
