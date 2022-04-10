import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormFormat]'
})
export class FormFormatDirective {
  @Input('appFormFormat') format: string = 'uppercase';

  constructor(private ef: ElementRef) { }


  @HostListener('blur') onBlur() {
    let value: string = this.ef.nativeElement.value;
    if (this.format === 'uppercase')
      this.ef.nativeElement.value = value.toUpperCase();
    else
      this.ef.nativeElement.value = value.toLowerCase();
  }



}
