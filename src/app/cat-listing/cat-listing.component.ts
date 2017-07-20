import { Component , OnInit} from '@angular/core';
import { OwnersAndAnimalsService, IAnimals, IAnimalsAndOwner } from '../services/owners-and-animals.service';
import { FilterOwnersAndAnimalsPipe } from '../pipes/filter-cats.pipe';

@Component({
  selector: 'app-cat-listing',
  templateUrl: './cat-listing.component.html',
  styleUrls: ['./cat-listing.component.css']
})

export class CatListingComponent implements OnInit {
   
  catSortOrder = 'asc';
  maleOwnedCats: string  [] = [];
  femaleOwnedCats: string [] = [];
  ownersAndAnimals: IAnimalsAndOwner [];
  
  constructor( private ownersAndAnimalsService: OwnersAndAnimalsService) {}

  ngOnInit() {

    // Retrieve data from the "API"
    this.ownersAndAnimalsService.getOwnersAndAnimals().then(
      data => {
          this.maleOwnedCats = this.SortDataByGender(data, 'Male');
          this.femaleOwnedCats = this.SortDataByGender(data, 'Female');
        })
        .catch((error) => console.error(error));
      }


  // sorts the data based on the gender of the owner and returns an array
  SortDataByGender(data: IAnimalsAndOwner[], genderTest: string) {
    let tmpArray1 = null;
    let tmpArray2: string  [] = [];
    for (let x = 0; x < data.length; x++ ) {
      tmpArray1 = data[x];
      if (tmpArray1.pets !== null) {
        if (tmpArray1.gender === genderTest) {
          for (let y = 0; y < tmpArray1.pets.length; y++ ) {
            if (tmpArray1.pets[y].type === 'Cat') {
              tmpArray2.push(tmpArray1.pets[y].name);
            }
          }
         }
      }
    }
    return tmpArray2;
  }
}
