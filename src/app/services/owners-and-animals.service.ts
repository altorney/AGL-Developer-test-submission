import { Injectable } from '@angular/core';

export interface IAnimals {
   name?: string;
   type?: string;
  }

export interface IAnimalsAndOwner { 
   name: string; 
   gender: string;
   age: number;
   pets: IAnimals[]; 
}

export const ownersAndAnimals: IAnimalsAndOwner[] = [
  {
    'name': 'Bob',
    'gender': 'Male',
    'age': 23,
    'pets': [
      {
        'name': 'Garfield',
        'type': 'Cat'
      },
      {
        'name': 'Fido',
        'type': 'Dog'
      }
    ]
  },
  {
    'name': 'Jennifer',
    'gender': 'Female',
    'age': 18,
    'pets': [
      {
        'name': 'Garfield',
        'type': 'Cat'
      }
    ]
  },
  {
    'name': 'Steve',
    'gender': 'Male',
    'age': 45,
    'pets': null
  },
  {
    'name': 'Fred',
    'gender': 'Male',
    'age': 40,
    'pets': [
      {
        'name': 'Tom',
        'type': 'Cat'
      },
      {
        'name': 'Max',
        'type': 'Cat'
      },
      {
        'name': 'Sam',
        'type': 'Dog'
      },
      {
        'name': 'Jim',
        'type': 'Cat'
      }
    ]
  },
  {
    'name': 'Samantha',
    'gender': 'Female',
    'age': 40,
    'pets': [
      {
        'name': 'Tabby',
        'type': 'Cat'
      }
    ]
  },
  {
    'name': 'Alice',
    'gender': 'Female',
    'age': 64,
    'pets': [
      {
        'name': 'Simba',
        'type': 'Cat'
      },
      {
        'name': 'Nemo',
        'type': 'Fish'
      }
    ]
  }
];


@Injectable()
export class OwnersAndAnimalsService {

    // this would be replaced with an http request to call the api
    // this can not be completed at this stage due to cross site scripting issues
    // an example of a basic http request to retrive the details

    // constructor(private http: Http) {}

    // getOwnersAndAnimals() {
    //     return this.http
    //     .get(`http://agl-developer-test.azurewebsites.net/people.json`)
    //     .map((response) => response.json())
    //     .toPromise();
    // }

    getOwnersAndAnimals(): Promise<IAnimalsAndOwner[]> {
        return Promise.resolve(ownersAndAnimals);
    }

}

