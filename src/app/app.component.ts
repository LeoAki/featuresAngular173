import { Component, HostAttributeToken } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './HostAtributeToken/button/button.component';
import { OutputComponent } from './Output-Observables/output/output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, OutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 17.3';

  doSomething() {
    console.log('apla');
  }
}
