import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent {
  @Input() previousPage: string = "";
 @Input() title: string = "";
}
