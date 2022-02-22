import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-a11y-toolbar',
  templateUrl: './a11y-toolbar.component.html',
  styleUrls: ['./a11y-toolbar.component.scss']
})
export class A11yToolbarComponent implements OnInit {
  public highContrastAction = 'Habilitar';

  constructor() { }

  ngOnInit() {
    // TODO #11: Skip link e navegação por teclado
  }

  public increaseFontSize() {
    // TODO #10: Controle de tamanho da fonte
  }

  public decreaseFontSize() {
    // TODO #10: Controle de tamanho da fonte
  }

  public toggleContrastMode(): void {
      // TODO #9: Contraste de cores
  }
}
