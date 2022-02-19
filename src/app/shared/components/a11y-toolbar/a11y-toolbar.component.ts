import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-a11y-toolbar',
  templateUrl: './a11y-toolbar.component.html',
  styleUrls: ['./a11y-toolbar.component.scss']
})
export class A11yToolbarComponent implements OnInit {
  public isHighContrastEnabled = false;
  public highContrastAction = 'Habilitar';
  public DEFAULT_MEASURE = 'px';
  public EMPTY_STRING = '';

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    
  }

  private getElementFontSize(element: HTMLElement) {
    const currentFontSize = getComputedStyle(element!, null).fontSize;
    const fontSizeWithoutMeasure = currentFontSize.replace(this.DEFAULT_MEASURE, this.EMPTY_STRING);

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
    this.isHighContrastEnabled = this.isHighContrastEnabled === false ? true : false;
    console.log(this.isHighContrastEnabled);

    if (this.isHighContrastEnabled == true) {
      this.setCssVariables();
      this.highContrastAction = 'Desabilitar';
    } else {
      this.resetCssVariables();
      this.highContrastAction = 'Habilitar';
    }
 }

  private setCssVariables() {
    const root: HTMLElement = document.documentElement;

    root.style.setProperty('--color-white', "#000");
    root.style.setProperty('--color-black', "#fff");
    root.style.setProperty('--color-blue', "#ffcb6e");
    root.style.setProperty('--color-orange', "#1330ff");
    root.style.setProperty('--color-green', "#00ff5b");
    root.style.setProperty('--color-medium-green', "#00ff5b");
    
  }

  private resetCssVariables() {
    const root: HTMLElement = document.documentElement;
    root.style.removeProperty('--color-white');
    root.style.removeProperty('--color-black');
    root.style.removeProperty('--color-blue');
    root.style.removeProperty('--color-orange');
    root.style.removeProperty('--color-green');
    root.style.removeProperty('--color-medium-green');
  }
}
