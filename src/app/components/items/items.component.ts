import { Component, inject, Input } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { IhomeDatafavTrips } from '../../core/interfaces/ihome-datafav-trips';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  item=[1,2,3,4]
  @Input({required:true})FirstTitle!:string
  @Input()imgsrc!:string
  @Input({required:true})seconedTitle!:string
  @Input()INputNumber!:number
  @Input()lastNumber!:number
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
