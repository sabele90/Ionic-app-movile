import { Component, OnInit } from '@angular/core';
interface CheckItem {
  name: string;
  selected: boolean;
}
@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  data: CheckItem[]  = [
  {
    name: 'primary',
    selected: false
  },
  {
    name: 'secondary',
    selected: true
  },
  {
    name: 'tertiary',
    selected: false
  },
  {
    name: 'success',
    selected: true
  },
 ]
  constructor() { }

  ngOnInit() {
  }
  onClick(check: CheckItem) {
    console.log(check);
  }

}
