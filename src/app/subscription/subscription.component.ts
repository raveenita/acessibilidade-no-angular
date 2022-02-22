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
export class SubscriptionComponent {
  public genders: Array<string> = [
    COMMON_GENRES.Feminine,
    COMMON_GENRES.Masculine,
    COMMON_GENRES.NonBinary
  ];
  public plans = [
    'Individual', 'Família', 'Universitário'
  ];

  get form() { 
    return this.subscriptionForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) { }

  public subscriptionForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    secretKeyword: ['', Validators.required],
    gender: ['', Validators.required],
    plan: ['', Validators.required],
  });

  public registerNewUser() {
    if(this.subscriptionForm.valid) {
      this.openSuccessDialog();
    } else {
      alert('Preencha todos os campos!');
      // TODO #6: Formulário acessível
      // TODO #7: Anunciar mudanças aos leitores de tela
    }
  }

  public onSelectionChange() {
    // TODO #7: Anunciar mudanças aos leitores de tela
  }

  public openSuccessDialog() {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      data: {
        name: this.subscriptionForm.get('name')?.value, 
        email: this.subscriptionForm.get('email')?.value,
        password: this.subscriptionForm.get('secretKeyword')?.value,
        gender: this.subscriptionForm.get('gender')?.value,
        plan: this.subscriptionForm.get('plan')?.value,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      // TODO #7: Anunciar mudanças aos leitores de tela
    });
  }
 
}
