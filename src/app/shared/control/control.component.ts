import { Component, Host, input, ViewEncapsulation,HostBinding, HostListener, inject, ElementRef, ContentChild, contentChild, AfterContentInit, afterRender, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-control', // host element of this control component
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: { 
    class: 'control',
      '(click)': 'onClick()' // apply a class to the host element for styling
  }
})
export class ControlComponent implements AfterContentInit{
  // For more information on host elements in Angular components, see:
  // https://angular.dev/guide/components/host-elements

  // @HostBinding('class') className = 'control';

  // @HostListener('click')  onClick() {
  // Handle click event
  //   console.log('Control clicked:');
  // }

  // label use a input 
  label = input.required<string>();

  private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement>;

  // signal version
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');


  ngAfterContentInit(): void {
    console.log('Control initialized:');
  }

  constructor(){
    afterRender(() => {console.log('After render')});

    afterNextRender(() => {console.log('After next render')});

  }

  onClick() {
    // Handle click event
    console.log('Control clicked:');
    console.log('Element:', this.el);
     console.log('Control:', this.control());
    // console.log('Control:', this.control);
    // output stuff
  }
}
