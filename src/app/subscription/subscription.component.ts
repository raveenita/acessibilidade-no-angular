import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { COMMON_GENRES } from '../models/genrer.interface';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  public selectedGender: string | undefined;
  public genders: Array<string> = [
    COMMON_GENRES.Feminine,
    COMMON_GENRES.Masculine,
    COMMON_GENRES.NonBinary
  ];

  public subscriptionForm: FormGroup = new FormGroup({
    email: new FormControl([]),
    secretKeyword: new FormControl([]),
    socialName: new FormControl([]),
    birthday: new FormControl([]),
    genrer: new FormControl([]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public registerNewUser() {
  }
 
}
