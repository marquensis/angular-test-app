import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementDecrementComponent } from './increment-decrement-component/increment-decrement.component';
import { NeighbourComponent } from './neighbour/neighbour.component';
import { SharedService } from './shared.service';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    IncrementDecrementComponent,
    NeighbourComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
