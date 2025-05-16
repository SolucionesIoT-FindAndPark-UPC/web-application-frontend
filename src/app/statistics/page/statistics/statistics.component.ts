import {AfterViewInit, Component} from '@angular/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-statistics',
  imports: [HeaderComponent],
  templateUrl: './statistics.component.html',
  standalone: true,
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Destroy charts if already created (in case of HMR or repeated loads)
    if (Chart.getChart("dailyActivityChart")) {
      Chart.getChart("dailyActivityChart")?.destroy();
    }
    if (Chart.getChart("revenueBreakdownChart")) {
      Chart.getChart("revenueBreakdownChart")?.destroy();
    }

    // 1. Line Chart for Daily Activity
    new Chart('dailyActivityChart', {
      type: 'line',
      data: {
        labels: ['6AM', '12PM', '8PM', '11PM'],
        datasets: [
          {
            label: 'Vehicles Entered',
            data: [20, 60, 100, 40],
            borderColor: '#60a5fa',
            backgroundColor: 'rgba(96, 165, 250, 0.2)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Average Parking',
            data: [10, 40, 60, 20],
            borderColor: '#a78bfa',
            backgroundColor: 'rgba(167, 139, 250, 0.2)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#fff' } }
        },
        scales: {
          x: { ticks: { color: '#fff' }, grid: { color: '#444' } },
          y: { ticks: { color: '#fff' }, grid: { color: '#444' } }
        }
      }
    });

    // 2. Donut Chart for Revenue Breakdown
    new Chart('revenueBreakdownChart', {
      type: 'doughnut',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          data: [1300, 1200, 1400, 1500, 900, 800, 1000],
          backgroundColor: [
            '#fbbf24', '#60a5fa', '#f87171', '#a78bfa', '#34d399', '#f472b6', '#facc15'
          ]
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: { color: '#fff' }
          }
        }
      }
    });
  }
}
