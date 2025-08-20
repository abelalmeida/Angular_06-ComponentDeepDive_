import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {


  // Set the image source, alternative text, and title for the dashboard item.
  // These properties are decorated with @Input to allow data binding from parent components.
  // @Input({required: true}) image!: {src: string, alt:string};
  // @Input({required: true}) title!: string;


  // input function //

  image = input.required<{ src: string, alt: string }>();
  title = input.required<string>();

}
