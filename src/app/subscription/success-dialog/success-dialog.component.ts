import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface User {
  name: string;
  email: string;
  password: string;
  genrer: string;
  interest: string;
}

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public newUser: User
  ) {}

  ngOnInit(): void {
    // TODO #7: Anunciar mudanças aos leitores de tela
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
