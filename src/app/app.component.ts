import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-HomeW-3';
  public togglePage = false;

  public toggle(arg: null): void {
    this.togglePage = !this.togglePage;
  }
}
