import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  sidebarToggle: boolean = true;
  isMobile: boolean = true;

  constructor(private observer: BreakpointObserver) { }

  sidebarToggler() {
    if (this.isMobile) {
      this.sidenav?.toggle();
      this.isMobile = false;
    } else {
      this.sidenav?.open();
      this.isMobile = !this.isMobile;
    }
  }

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
}
