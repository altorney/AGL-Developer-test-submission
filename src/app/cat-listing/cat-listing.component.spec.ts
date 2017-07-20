/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { OwnersAndAnimalsService } from '../services/owners-and-animals.service';
import { Pipe, PipeTransform } from '@angular/core';
import { CatListingComponent } from './cat-listing.component';
import { FilterOwnersAndAnimalsPipe } from '../pipes/filter-cats.pipe';

@Pipe({name: 'sortCats'})
class MockPipe implements PipeTransform {
    transform(value: number): number {
        return value;
    }
}

describe('Cat listing component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        CatListingComponent,
        MockPipe
      ],
      providers: [
        OwnersAndAnimalsService
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(CatListingComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));


  it('should return the correct number of male owned cats  ', async(inject([OwnersAndAnimalsService], (service: OwnersAndAnimalsService) => {
    const fixture = TestBed.createComponent(CatListingComponent);
    const comp = fixture.debugElement.componentInstance;
    let maleOwnedCats: string  [] = [];
    // the service can be used as a source of the data as the data is mocked behind the scenes
    service.getOwnersAndAnimals().then((data) => {
          maleOwnedCats = comp.SortDataByGender(data, 'Male');
      expect(maleOwnedCats.length).toEqual(4);
      expect(maleOwnedCats[0]).toEqual('Garfield');
      expect(maleOwnedCats[1]).toEqual('Tom');
      expect(maleOwnedCats[2]).toEqual('Max');
      expect(maleOwnedCats[3]).toEqual('Jim');
      expect(maleOwnedCats[2]).not.toEqual('Maximus');
    });
  })));

  it('should return the correct number of female owned cats', async(inject([OwnersAndAnimalsService], (service: OwnersAndAnimalsService) => {
    const fixture = TestBed.createComponent(CatListingComponent);
    const comp = fixture.debugElement.componentInstance;
    let femaleOwnedCats: string  [] = [];
    // the service can be used as a source of the data as the data is mocked behind the scenes
    service.getOwnersAndAnimals().then((data) => {
          femaleOwnedCats = comp.SortDataByGender(data, 'Female');
      expect(femaleOwnedCats.length).toEqual(3);
      expect(femaleOwnedCats[0]).toEqual('Garfield');
      expect(femaleOwnedCats[1]).toEqual('Tabby');
      expect(femaleOwnedCats[2]).toEqual('Simba');
    });
  })));
});
