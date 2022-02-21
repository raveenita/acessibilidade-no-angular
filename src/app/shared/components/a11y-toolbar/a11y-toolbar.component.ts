import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-a11y-toolbar',
  templateUrl: './a11y-toolbar.component.html',
  styleUrls: ['./a11y-toolbar.component.scss']
})
export class A11yToolbarComponent implements OnInit {
  public isHighContrastEnabled = false;
  public highContrastAction = 'Habilitar';
  public skipLinkPath: string | undefined;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const currentPath = (event as NavigationEnd).url.split('#')[0];
        this.skipLinkPath = `${currentPath}#main-content`;
      });
  }

  private getElementFontSize(element: HTMLElement) {
    const DEFAULT_MEASURE = 'px';
    const EMPTY_STRING = '';
    const currentFontSize = getComputedStyle(element!, null).fontSize;
    const fontSizeWithoutMeasure = currentFontSize.replace(DEFAULT_MEASURE, EMPTY_STRING);

    return Number(fontSizeWithoutMeasure);
  }

  public increaseFontSize() {
    const htmlElement = document.querySelector('html');

    if (htmlElement !== null) {
      let fontSize = this.getElementFontSize(htmlElement);
      this.renderer.setStyle(htmlElement, 'font-size', `${++fontSize}px`);
    }
  }

  public decreaseFontSize() {
    const htmlElement = document.querySelector('html');

    if (htmlElement !== null) {
      let fontSize = this.getElementFontSize(htmlElement);
      this.renderer.setStyle(htmlElement, 'font-size', `${--fontSize}px`);
    }
  }

  public toggleContrastMode(): void {
      // TODO #8: Contraste de cores
  }
}
