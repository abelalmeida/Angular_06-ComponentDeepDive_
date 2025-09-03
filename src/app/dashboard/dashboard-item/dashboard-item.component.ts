import { Component, input, Input , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css'],
  // encapsulation: ViewEncapsulation.None,
  host: {
    class: 'dashboard-item'
  }
})
export class DashboardItemComponent {
  // Set the image source, alternative text, and title for the dashboard item.
  // These properties are decorated with @Input to allow data binding from parent components.
  // @Input({required: true}) image!: {src: string, alt:string};
  // @Input({required: true}) title!: string;


  // Using the 'input' function from Angular's standalone components feature
  // to declare input properties with type safety and required validation.
  image = input.required<{ src: string, alt: string }>();
  title = input.required<string>();

}
