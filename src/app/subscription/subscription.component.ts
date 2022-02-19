import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { COMMON_GENRES } from '../models/genrer.interface';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  public genders: Array<string> = [
    COMMON_GENRES.Feminine,
    COMMON_GENRES.Masculine,
    COMMON_GENRES.NonBinary
  ];
  public interests = [
    'Podcasts', 'Músicas antigas', 'Hits da internet'
  ];

  get form() { 
    return this.subscriptionForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private liveAnnouncer: LiveAnnouncer
  ) { }

  public subscriptionForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    secretKeyword: ['', Validators.required],
    gender: ['', Validators.required],
    interest: ['', Validators.required],
  });

  

  public ngOnInit(): void {
  }

  public registerNewUser() {
    if(this.subscriptionForm.valid) {
      this.openSuccessDialog();
    } else {
      this.subscriptionForm.markAllAsTouched();
    }
  }

  public openSuccessDialog() {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      data: {
        name: this.subscriptionForm.get('name')?.value, 
        email: this.subscriptionForm.get('email')?.value,
        password: this.subscriptionForm.get('secretKeyword')?.value,
        gender: this.subscriptionForm.get('gender')?.value,
        interest: this.subscriptionForm.get('interest')?.value,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.liveAnnouncer.announce('Modal fechada.');
    });
  }
 
}
