import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cdRef: ChangeDetectorRef) {}

  mapStyles = [
    { name: 'Streets', url: 'mapbox://styles/mapbox/streets-v11' },
    { name: 'Light', url: 'mapbox://styles/mapbox/light-v10' },
    { name: 'Dark', url: 'mapbox://styles/mapbox/dark-v10' },
    { name: 'Outdoors', url: 'mapbox://styles/mapbox/outdoors-v11' },
    { name: 'Satellite', url: 'mapbox://styles/mapbox/satellite-v9' },
    { name: 'Satellite Streets', url: 'mapbox://styles/mapbox/satellite-streets-v11' },
    { name: 'Navigation Day', url: 'mapbox://styles/mapbox/navigation-day-v1' },
    { name: 'Navigation Night', url: 'mapbox://styles/mapbox/navigation-night-v1' },
    { name: 'Traffic Day', url: 'mapbox://styles/mapbox/traffic-day-v2' },
    { name: 'Traffic Night', url: 'mapbox://styles/mapbox/traffic-night-v2' }
  ];

  selectedStyle = this.mapStyles[0].url;


  setMapStyle(url: string) {
    console.log(`Kartenstil wird gesetzt auf: ${url}`);
    this.selectedStyle = url;
    this.cdRef.detectChanges();
  }
}
