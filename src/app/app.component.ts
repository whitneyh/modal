import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal';

  isModelOpen: boolean = false;

  toggleModal(): void {
    this.isModelOpen = !this.isModelOpen;
  }
}
