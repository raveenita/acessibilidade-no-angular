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

  public toggleLightMode(): void {
    const bodyElement = document.querySelector('body');
    this.isHighContrastEnabled = this.isHighContrastEnabled === false ? true : false;

    if (this.isHighContrastEnabled == true) {
      this.setCssVariables();
      bodyElement?.classList.add('mode--high-contrast');
      this.highContrastAction = 'Desabilitar';
    } else {
      this.resetCssVariables();
      bodyElement?.classList.remove('mode--high-contrast');
      this.highContrastAction = 'Habilitar';
    }
 }

  private setCssVariables() {
    const root: HTMLElement = document.documentElement;

    root.style.setProperty('--color-white', "#000");
    root.style.setProperty('--color-black', "#fff");
    root.style.setProperty('--color-blue', "#ffcb6e");
    root.style.setProperty('--color-medium-blue', "#fff94e");
    root.style.setProperty('--color-orange', "#1330ff");
    root.style.setProperty('--color-medium-orange', "#0018c1");
    root.style.setProperty('--color-green', "#00ff5b");
    root.style.setProperty('--color-medium-green', "#00ff5b");
    root.style.setProperty('--color-pink', "#d50465");
    root.style.setProperty('--color-medium-pink', "#ffbaea");
  }

  private resetCssVariables() {
    const root: HTMLElement = document.documentElement;
    root.style.removeProperty('--color-white');
    root.style.removeProperty('--color-black');
    root.style.removeProperty('--color-blue');
    root.style.removeProperty('--color-medium-blue');
    root.style.removeProperty('--color-orange');
    root.style.removeProperty('--color-medium-orange');
    root.style.removeProperty('--color-green');
    root.style.removeProperty('--color-medium-green');
    root.style.removeProperty('--color-pink');
    root.style.removeProperty('--color-medium-pink');
  }
}
