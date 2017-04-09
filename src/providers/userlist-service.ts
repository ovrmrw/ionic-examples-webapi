import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserlistService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserlistService {

  constructor(
    public http: Http,
  ) { }

  getUsers(items: number = 10) {
    return this.http.get('https://randomuser.me/api/?results=' + items)
      .map(res => res.json())
      .map(obj => {
        const users: User[] = obj['results']
        return users
      })
  }
}



export interface User {
  name: {
    first: string,
    last: string,
    title: string,
  },
  email: string,
  login: {
    username: string,
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  }
}
