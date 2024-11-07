import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuse-able-header',
  standalone: true,
  imports: [],
  templateUrl: './reuse-able-header.component.html',
  styleUrl: './reuse-able-header.component.css'
})
export class ReuseAbleHeaderComponent {
@Input({required:true})title!:string
}
