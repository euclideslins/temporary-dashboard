import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Chart } from 'chart.js'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("Canvas", {static: true}) elemento:ElementRef
  ngOnInit(){
    var myChart = new Chart("canvas", {
      type: 'bar',
      data: {
          labels: ['Vulnerabilidade social', 'Distância', 'Gravidez', 'Carga horária', 'Identidade', 'Insassiduidade', 'Apatia', 'Problemas Familiares', 'Defasagem no aprendizado'],
          datasets: [{
              label: '# De Vulnerabilidade',
              data: [0.22224, 0.11111, 0.11111, 0.11110, 0.11111, 0.11109, 0.11113, 0.11111, 0.11111,3,2 ],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });


  var myChart = new Chart("lanvas", {
    type: 'bar',
    data: {
        labels: ['Vulnerabilidade social', 'Distância', 'Gravidez', 'Carga horária', 'Identidade', 'Insassiduidade', 'Apatia', 'Problemas Familiares', 'Defasagem no aprendizado'],
        datasets: [{
            label: '# De Vulnerabilidade',
            data: [0.22224, 0.11111, 0.22224, 0.44448, 0.11111, 0.22224, 0.11113, 0.44448, 0.11111,3,2 ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        ticks: {
          suggestedMin: 0.5,
          suggestedMax: 0.7
      }
    }
});

var myRadarChart = new Chart('ctx', {
  type: 'radar',
  data: {
    labels: ['Vulnerabilidade social', 'Distância', 'Gravidez', 'Carga horária', 'Identidade', 'Insassiduidade', 'Apatia', 'Problemas Familiares', 'Defasagem no aprendizado'],
    datasets: [{
      label: "# De Vulnerabilidade",
      data: [2, 4, 4, 5, 2, 3, 1, 6, 8,3,2 ],
    }]
  },
  options: {
    scale: {
      angleLines: {
          display: false
      },
      ticks: {
          suggestedMin: 5,
          suggestedMax: 10
      }
  }
  }
});

  }

  constructor() {}
}
