import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';


@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  host: {
    class: 'tickets'
  }
})
export class TicketsComponent {
 tickets: Ticket[] = [];
onAdd(ticketData: {title: string; text:string}){

  const ticket: Ticket = {
     title: ticketData.title,
     id: Math.random().toString(),
     request: ticketData.text,
     status: 'open'
  }

  this.tickets.push(ticket);
}

 onCloseTicket(id: string){
   this.tickets = this.tickets.map((ticket) => {
     if (ticket.id === id) {
       return { ...ticket, status: 'closed' };
     }
     return ticket;
   });
 }
}
