import { Component } from '@angular/core';
// Import DUMMY_TRAFFIC_DATA from its file
import { DUMMY_TRAFFIC_DATA } from '../../../DummyTrafficData'; // Adjust the path as needed

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent {
  readonly dummyTrafficData = DUMMY_TRAFFIC_DATA;
readonly maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
