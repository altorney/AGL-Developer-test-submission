import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { OwnersAndAnimalsService } from './services/owners-and-animals.service';
import { FilterOwnersAndAnimalsPipe } from './pipes/filter-cats.pipe';
import { CatListingComponent } from './cat-listing/cat-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    CatListingComponent,
    FilterOwnersAndAnimalsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    OwnersAndAnimalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

