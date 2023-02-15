import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './components/navbar/dropdown/dropdown.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { JoueurDetailsComponent } from './components/joueur-details/joueur-details.component';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, DropdownComponent, NavbarComponent, JoueurDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'joueurs/:id', component: JoueurDetailsComponent },
      { path: '**', redirectTo:'', pathMatch: 'full' }
    ]),
    MatSelectModule,
    MatCardModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
