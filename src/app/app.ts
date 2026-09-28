import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    Header
  ],
  styles: [`
    .main-wrapper {
      max-width: 1250px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    .hero-section {
      text-align: center;
      padding: 3.5rem 1rem 2.5rem 1rem;
    }
    .hero-title {
      font-size: 3.2rem;
      font-weight: 400;
      color: #111;
      line-height: 1.15;
      max-width: 780px;
      margin: 0 auto;
      letter-spacing: -0.03em;
    }
    .highlight-green {
      background-color: #d1fae5;
      color: #031d15;
      padding: 0.1rem 0.5rem;
      border-radius: 4px;
    }
    .tabs-bar {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      border-top: 1px solid #e5e5df;
      border-bottom: 1px solid #e5e5df;
      max-width: 1250px;
      margin: 2rem auto;
      background: rgba(255, 255, 255, 0.4);
    }
    .tab-item {
      text-align: center;
      padding: 1rem 0.5rem;
      font-size: 0.85rem;
      color: #777;
      background: transparent;
      border: none;
      border-right: 1px solid #e5e5df;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
      &:last-child {
        border-right: none;
      }
      &.active {
        color: #111;
        font-weight: 500;
        background: #ffffff;
      }
      &:hover {
        color: #000;
        background: rgba(255, 255, 255, 0.8);
      }
    }
    .feature-card {
      background: #ffffff;
      border-radius: 14px;
      border: 1px solid #e5e5df;
      padding: 2.5rem;
      max-width: 1250px;
      margin: 0 auto;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
    }
  `],
  template: `
    <div class="min-h-screen grid-layout-bg pb-12">
      
      <app-header></app-header>

      <main class="main-wrapper">
        
        <div style="text-align: center; font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 2px; margin-top: 2rem; margin-bottom: 1rem;">
          The Grid Platform
        </div>

        <section class="hero-section">
          <h1 class="hero-title">
            Grid was built from the ground-up to <span class="highlight-green">improve every aspect</span> of utility management.
          </h1>
        </section>

        <div class="tabs-bar">
          <button class="tab-item active">Invoice & Confidence</button>
          <button class="tab-item">Pre-Bill Exception Queue</button>
          <button class="tab-item">Portal & Payments</button>
          <button class="tab-item">Compliance Engine</button>
          <button class="tab-item">Anomaly Detection</button>
          <button class="tab-item">Lower All-in Cost</button>
        </div>

        <section class="feature-card">
          <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 3.5rem; align-items: center;">
            
            <div>
              <div style="font-size: 0.7rem; background: #f0fdf4; color: #043817; border: 1px solid #bbf7d0; padding: 2px 8px; border-radius: 4px; display: inline-block; margin-bottom: 1.2rem; font-weight: 500;">
                00-01
              </div>
              <h2 style="font-size: 1.8rem; font-weight: 500; color: #111; margin-bottom: 1rem; letter-spacing: -0.01em; line-height: 1.2;">
                Invoice Ingestion & Confidence Scoring
              </h2>
              <p style="color: #666; line-height: 1.6; font-size: 0.9rem; margin-bottom: 2rem;">
                Grid automatically pulls every bill via email, portals, or EDI, extracts line items with field-level confidence, re-duplicates, tracks due dates, and preserves all PDFs so nothing is missed or double-posted.
              </p>
              <a matButton="outlined" routerLink="." style="display: inline-flex; align-items: center; gap: 6px; color: #111; border-color: #d1d1cb; font-size: 0.85rem; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px;">
                Details <span style="font-size: 14px;">→</span>
              </a>
            </div>
            
            <!-- Contenedor simple para la imagen desde public -->
            
              <img src="IMAGEN ALEX.jpg"style="width: 100%; height: auto; border-radius: 10px; display: block;" />
            </div>

          
        </section>

      </main>

    </div>

    <router-outlet />
  `,
})
export class App {
  protected readonly title = signal('Grid Platform');
}