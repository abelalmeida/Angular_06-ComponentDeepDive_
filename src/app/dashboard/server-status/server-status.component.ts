import { Component } from '@angular/core';
import { DUMMY_TRAFFIC_DATA } from '../../../DummyTrafficData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent {

  readonly dummyTrafficData = DUMMY_TRAFFIC_DATA;
  readonly maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
}
