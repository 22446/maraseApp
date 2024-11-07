import { Component } from '@angular/core';
import { ReuseAbleHeaderComponent } from '../reuse-able-header/reuse-able-header.component';
import { ReuseabledisplayitemsComponent } from '../reuseabledisplayitems/reuseabledisplayitems.component';



@Component({
  selector: 'app-honey-moon-trips',
  standalone: true,
  imports: [ReuseAbleHeaderComponent,ReuseabledisplayitemsComponent],
  templateUrl: './honey-moon-trips.component.html',
  styleUrl: './honey-moon-trips.component.css'
})
export class HoneyMoonTripsComponent {
 
}
