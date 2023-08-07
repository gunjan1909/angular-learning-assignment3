import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Assignment 3';
  displayButton: boolean = false;
  logs: Array<number> = [];

  buttonClicked(): void {
    this.displayButton = !this.displayButton;
    this.logs.push(this.logs.length + 1);
  }
}
