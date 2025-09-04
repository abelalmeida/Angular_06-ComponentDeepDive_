import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';


@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  host: {
    class: 'tickets'
  }
})
export class TicketsComponent {
 tickets: Ticket[] = [];
onAdd(ticketData: {title: string; text:string}){

  
}

}
