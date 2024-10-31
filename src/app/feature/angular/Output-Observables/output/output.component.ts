import { Component, input, Output, output } from '@angular/core';
import { outputFromObservable, outputToObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  page = output<number>({ alias: 'currentPage' });
  // page$ = outputToObservable(this.page);
  doSomething() {
    this.page.emit(Math.floor(Math.random()*10) + 1);
  }
}
