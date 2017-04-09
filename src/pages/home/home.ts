import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map'

import { Disposer } from './../../lib/diposer';
import { DetailPage } from './../detail/detail';
import { UserlistService, User } from './../../providers/userlist-service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage extends Disposer {
  users: User[]

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public service: UserlistService,
  ) {
    super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad - HomePage')
    this.disposable = this.service.getUsers(50)
      .subscribe(users => {
        this.users = users
      })
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload - HomePage')
    this.disposeSubscriptions()
  }

  selectUser(user: User) {
    this.navCtrl.push(DetailPage, { user })
  }
}
