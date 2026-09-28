import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header-actions',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div style="display: flex; align-items: center; gap: 1rem;">
      <a href="#" style="font-size: 0.85rem; color: #000000; text-decoration: none; font-weight: 400;">Why grid?</a>
      <a href="#" style="font-size: 0.85rem; color: #000000; text-decoration: none; font-weight: 400;">Testimonials</a>
      <a href="#" style="font-size: 0.85rem; color: #000000; text-decoration: none; font-weight: 400;">Demo</a>
      <a href="#" style="font-size: 0.85rem; color: #000000; text-decoration: none; font-weight: 400;">FAQs</a>
    </div>
  `
})
export class HeaderActions {}