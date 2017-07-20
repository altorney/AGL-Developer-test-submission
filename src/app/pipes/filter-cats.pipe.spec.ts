/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FilterOwnersAndAnimalsPipe } from '../pipes/filter-cats.pipe';


  
describe('FilterOwnersAndAnimalsPipe', () => {

 let pipe: FilterOwnersAndAnimalsPipe;

    beforeEach(() => {
        pipe = new FilterOwnersAndAnimalsPipe();
    });

   it('Returns an array with a length of 3', () => {
        const array1: any[] = [
              'Garfield',
              'Tom',
              'Max'
            ];

        const args = 'asc';
        expect(pipe.transform(array1, args).length).toEqual(3);
    });

    it('Returns an array in ascending order', () => {
        const array1: any[] = [
              'Garfield',
              'Tom',
              'Max'
            ];

        const args = 'asc';
        pipe.transform(array1, args);
        expect(array1[0]).toEqual('Garfield'); 
        expect(array1[1]).toEqual('Max'); 
        expect(array1[2]).toEqual('Tom'); 
    });

    it('Returns an array in descending order', () => {
        const array1: any[] = [
              'Garfield',
              'Tom',
              'Max'
            ];

        const args = 'desc';
        pipe.transform(array1, args);
        expect(array1[0]).toEqual('Tom'); 
        expect(array1[1]).toEqual('Max'); 
        expect(array1[2]).toEqual('Garfield'); 
    });
    
    it('Returns an array in ascending order by default', () => {
        const array1: any[] = [
              'Garfield',
              'Tom',
              'Max'
            ];

        const args = '';
        pipe.transform(array1, args);
        expect(array1[0]).toEqual('Garfield'); 
        expect(array1[1]).toEqual('Max'); 
        expect(array1[2]).toEqual('Tom'); 
    });    
});
