import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,DialogModule, ButtonModule, InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
 
  visibleregister: boolean = false;

  showDialogRegister() {
      this.visibleregister = true;
  }
 
}
