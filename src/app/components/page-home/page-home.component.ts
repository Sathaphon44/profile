import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
  title = "my app page home"
  name = "คุณชื่ออะไร"

  show_username(value: string) {
    if (value.length == 0) {
      this.name = "คุณชื่ออะไร"
    } else {
      this.name = "สวัสดี "+value
    }
  }
}
