import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeckglMapComponent } from './deckgl-map/deckgl-map.component';
import { MapboxMapComponent } from './mapbox-map/mapbox-map.component';
import { FormsModule } from '@angular/forms';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, DeckglMapComponent, MapboxMapComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxAccessToken
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
