import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistercanchaPage} from '../registercancha/registercancha';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  title="CanchasQuilla";
  constructor(public navCtrl: NavController) {

  }

  signUp(){

   this.navCtrl.push(RegistercanchaPage);

  }

}
