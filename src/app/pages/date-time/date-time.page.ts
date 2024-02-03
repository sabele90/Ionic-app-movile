import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  selectedBirth: string = new Date().toISOString();
  selectedDate:  string = new Date().toISOString()
  constructor() {

   }

  ngOnInit() {
  }
 handleBirth(event: any) {
    console.log('ionChange',event.detail.value);
    this.selectedBirth= event.detail.value;
}
handleDateChange(event: any) {
  console.log('Selected date:', event.detail.value);
  this.selectedDate = event.detail.value;

}
}