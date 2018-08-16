import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailPage} from '../detail/detail';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  constructor(public navCtrl: NavController) {

  }

  showDetail( city ){
    this.navCtrl.push( DetailPage, {
      data: city
    });
  }

}
