import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ItemsComponent } from "../items/items.component";
import { FooterComponent } from "../footer/footer.component";
import { HomeService } from '../../core/services/home.service';
import { IhomeDataCategory } from '../../core/interfaces/ihome-data-category';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, ItemsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  item=[1,2,3,4]

  _homeServices=inject(HomeService)
  dataCategoryHome:IhomeDataCategory={} as IhomeDataCategory

  ngOnInit(): void {
   this._homeServices.getSomeTrips().subscribe({
    next:(res)=>{
      this.dataCategoryHome=res
      console.log(this.dataCategoryHome)
    }
   })
    
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
