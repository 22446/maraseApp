import { Component, inject } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { IhomeDatafavTrips } from '../../core/interfaces/ihome-datafav-trips';

@Component({
  selector: 'app-reuseabledisplayitems',
  standalone: true,
  imports: [],
  templateUrl: './reuseabledisplayitems.component.html',
  styleUrl: './reuseabledisplayitems.component.css'
})
export class ReuseabledisplayitemsComponent {
  
  _homeserices=inject(HomeService)
  DataFavTrips:IhomeDatafavTrips[]=[]
  ngOnInit(): void {
    this._homeserices.getFamousTrips().subscribe({
      next:(res)=>{
        this.DataFavTrips=res.data
        console.log(res)
      }
    })
  }
}
