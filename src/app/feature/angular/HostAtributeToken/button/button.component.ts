import { CommonModule } from '@angular/common';
import { Component, HostAttributeToken, inject } from '@angular/core';

@Component({
  selector: '[app-button]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  primaryLabel = inject(new HostAttributeToken('primaryLabel'));
  secondaryLabel = inject(new HostAttributeToken('secondaryLabel'), { optional: true });
}
