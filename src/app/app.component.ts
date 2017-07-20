import { Component } from '@angular/core';
import { CatListingComponent } from './cat-listing/cat-listing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `An alphabetical display of cat names ordered by owner's gender`;
}
