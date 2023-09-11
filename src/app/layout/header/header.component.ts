import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidebarStatus = new EventEmitter<boolean>();
  @Input() isMobileScreen: boolean = false;

  toggleSidebar() {
    this.toggleSidebarStatus.emit();
  }
}
