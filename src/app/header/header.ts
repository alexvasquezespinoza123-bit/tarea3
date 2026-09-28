import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderActions } from '../header-actions/header-actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, HeaderActions],
  template: `
    <header style="max-width: 1250px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 1.2rem 1.5rem; border-bottom: 1px solid #e5e5df;">
      
      <!-- Logotipo -->
      <div style="display: flex; align-items: center; gap: 8px;">
        <img src="/IMAGEN ALEX1.jpg" alt="Logo" style="width: 24px; height: auto;" />
        <span style="font-weight: 700; font-size: 1rem; color: #111; letter-spacing: -0.5px;">GRID</span>
      </div>

      <!-- Enlaces del menú central -->
      <app-header-actions></app-header-actions>

      <!-- Botón de acción final -->
      <div>
        <a routerLink="." style="background: #111; color: white; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.85rem; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
          Get started now <span style="font-size: 13px;">→</span>
        </a>
      </div>

    </header>
  `
})
export class Header {}