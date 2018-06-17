import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AddReviewComponent } from "../../components/add-review/add-review";
/**
 * Generated class for the MovieReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-review',
  templateUrl: 'movie-review.html',
})
export class MovieReviewPage {
  imgSrc = "url('assets/imgs/batman.jpg')";
  imgHeight = "80vh"; 
  constructor(public navCtrl: NavController, public navParams: NavParams,public dialog: MatDialog) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieReviewPage');
  }

  openReviewModal(){
    let dialogRef = this.dialog.open(AddReviewComponent, {
      width: '250px',
      data: { filmName : "Dark Knight" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
