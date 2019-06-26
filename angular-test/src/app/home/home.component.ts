import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails: Array<any> = [];
  showUserDetails:boolean;
  cusrrentUser:any
  constructor(private randserv: RandomService) { }

  ngOnInit() {

  }
  ShowAlluser() {
    this.showUserDetails = false;
    const randNum = this.getRandomInt(0, 20);
    this.randserv.getUserDetails(randNum).subscribe(data => {
      this.userDetails = data.results;
      console.log(this.userDetails);
    })
  }
  getRandomInt(min, max) {
    //Will return a number inside the given range, inclusive of both minimum and maximum
    //i.e. if min=0, max=20, returns a number from 0-20
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  GotoUserDetails(index:any){
    this.showUserDetails=true;
    this.cusrrentUser = this.userDetails[index];
    console.log(this.cusrrentUser);
  }

}