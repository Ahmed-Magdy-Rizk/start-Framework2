import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  // Nav Bar change padding effect.
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    
    if (window.scrollY > 50) {
      this.isScrolled = true;
      console.log(window.scrollY )
    }else
    {
      this.isScrolled = false
    }
  }

}
