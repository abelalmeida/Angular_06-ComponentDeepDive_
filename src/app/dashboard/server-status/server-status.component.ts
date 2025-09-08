import { Component, OnDestroy, OnInit, DestroyRef,inject, signal, effect } from '@angular/core';
import { DUMMY_TRAFFIC_DATA } from '../../../DummyTrafficData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit{

  readonly dummyTrafficData = DUMMY_TRAFFIC_DATA;
  readonly maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));

  //currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
currentStatus = signal< 'online' | 'offline' | 'unknown'>('offline');
  // inject special value into components

  private destroyRef = inject(DestroyRef);

  //private interval?: ReturnType<typeof setInterval>;

  constructor(){
    effect(() => {
    //  console.log('Current status changed:', this.currentStatus());
    });
  }
  private intervalId: any;

  // ngOnDestroy(): void {
  //   if (this.interval) {
  //     clearTimeout(this.interval);
  //   }
  // }

  ngOnInit() {
  const interval =  setInterval(() => {
      //this.currentStatus = this.getRandomStatus();
      this.currentStatus.set(this.getRandomStatus());
    }, 2000);
    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  private getRandomStatus(): 'online' | 'offline' | 'unknown' {
    const statuses: ('online' | 'offline' | 'unknown')[] = ['online', 'offline', 'unknown'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }
}
