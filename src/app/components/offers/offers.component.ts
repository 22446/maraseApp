import { Component, inject } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { Ioffers } from '../../core/interfaces/ioffers';
import { ReuseAbleHeaderComponent } from '../reuse-able-header/reuse-able-header.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [ReuseAbleHeaderComponent,CurrencyPipe],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  _homeSrevices=inject(HomeService)
  offersData:Ioffers={} as Ioffers
  ngOnInit(): void {
    this._homeSrevices.getOffers().subscribe({
      next:(res)=>{
        this.offersData=res
        console.log(res)
      }
    })
  }
}
