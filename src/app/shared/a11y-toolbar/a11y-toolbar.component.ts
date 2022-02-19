import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-a11y-toolbar',
  templateUrl: './a11y-toolbar.component.html',
  styleUrls: ['./a11y-toolbar.component.scss']
})
export class A11yToolbarComponent implements OnInit {
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
    
  }

}
