import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deckgl-map',
  templateUrl: './deckgl-map.component.html',
  styleUrls: ['./deckgl-map.component.css']
})
export class DeckglMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxAccessToken;
    const map = new mapboxgl.Map({
      container: 'mapr',
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-103.5917, 40.6699],
      zoom: 3
    });

    map.on('load', () => {
      map.addSource('earthquakes', {
        type: 'geojson',
        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50
      });

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
          'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
        }
      });

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': ['get', 'point_count_abbreviated'],
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
        }
      });

      map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'earthquakes',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#11b4da',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff'
        }
      });
    });
  }
}
