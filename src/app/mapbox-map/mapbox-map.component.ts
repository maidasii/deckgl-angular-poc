import { Component, OnInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mapbox-map',
  templateUrl: './mapbox-map.component.html',
  styleUrls: ['./mapbox-map.component.css']
})
export class MapboxMapComponent implements OnInit, OnDestroy {
  map!: mapboxgl.Map;

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxAccessToken;
    this.map = new mapboxgl.Map({
      container: 'mapl', // container id
      style: 'mapbox://styles/mapbox/dark-v11', // style URL
      center: [-75.789, 41.874], // starting position [lng, lat]
      zoom: 5, // starting zoom
      maxZoom: 5.99,
      minZoom: 4
    });

    this.map.on('load', () => {
      this.map.addSource('radar', {
        'type': 'image',
        'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
        'coordinates': [
          [-80.425, 46.437],
          [-71.516, 46.437],
          [-71.516, 37.936],
          [-80.425, 37.936]
        ]
      });
      this.map.addLayer({
        id: 'radar-layer',
        'type': 'raster',
        'source': 'radar',
        'paint': {
          'raster-fade-duration': 0
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.map.remove();
  }
}
