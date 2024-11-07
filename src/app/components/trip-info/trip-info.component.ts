import { HomeService } from './../../core/services/home.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, ElementRef, HostListener, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Data, Ielement } from '../../core/interfaces/ielement';


@Component({
  selector: 'app-trip-info',
  standalone: true,
  imports: [CarouselModule,DatePipe],
  templateUrl: './trip-info.component.html',
  styleUrl: './trip-info.component.css'
})
export class TripInfoComponent {
  _homeservices=inject(HomeService)
  _Routes=inject(ActivatedRoute)
  data:Data={} as Data
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    rtl:true,
    dots: true,
    items:1,
    navSpeed: 700,

   
  }

  ngOnInit(): void {
    this._Routes.paramMap.subscribe({
      next:(p)=>{
        let id=p.get('id')
        this._homeservices.getById(id).subscribe({
          next:(res)=>{
            this.data=res.data
            console.log(this.data);
            
          }
        })
      }
    })

    
  }

    @ViewChild('imgOld') elOld!: ElementRef;
    @ViewChildren('img') elList!: QueryList<ElementRef>;
  
    old: any = '';
    new: any = '';
  
    @HostListener('click', ['$event'])
    click(event: MouseEvent) {
      const clickedImg = event.target as HTMLImageElement;
      
      this.old = this.elOld.nativeElement.getAttribute('src');
      this.new = clickedImg.getAttribute('src');
  
      console.log(this.new);
      console.log(this.old);
      if(this.new!==null){
      this.elOld.nativeElement.setAttribute('src', this.new);
      }
    
  }
  
  
}
