import { Component } from '@angular/core'

@Component({
  selector:'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls:['dashboard.component.css']
})
export class DashboardComponent {
dash: boolean = false;
showDash(): void {
    this.dash = !this.dash;
}
}
