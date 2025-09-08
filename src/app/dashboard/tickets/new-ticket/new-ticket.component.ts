import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, viewChild, ViewChild, ViewChildren, output } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit
{

  //@Output() add = new EventEmitter<{title: string; request: string}>();

  enteredTitle = '';
  enteredText = '';

  add = output<{title: string; text: string}>();


  ngOnInit(): void {
    console.log('ON INIT');
    console.log('Form:', this.form().nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log('Form:', this.form().nativeElement);
  }
  // pass in name of template variable
  // ElementRef warper
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit() {

    // console.log(titleInput);
    // console.log(ticketText);

    

    this.add.emit({title: this.enteredTitle, text: this.enteredText});

    this.enteredTitle = '';
    this.enteredText = '';
    //console.log('Submitted  ', {title: titleElement, text: ticketText});
    //console.log('Title:', titleElement.value);
    //console.log('Request:', ticketText);

   // console.dir(titleInput);

    //console.log('Title:', title);

    this.form()?.nativeElement.reset();
    //this.form?.nativeElement.reset();
    
    // console.log('Form submitted');
    // Handle form submission

    // working with templates

  }

}
