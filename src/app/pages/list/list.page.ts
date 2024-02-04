import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

 @ViewChild('list') list?: IonList
  users? : Observable<any>


  constructor(private dataService: DataService) { 
  
  }

  ngOnInit() {
  this.users = this.dataService.getUsers()
  }
   favorite (user:any){
    console.log('favorite',user)
    this.list?.closeSlidingItems()

   }
   archive(user:any){
    console.log('archive',user)
    this.list?.closeSlidingItems()
   }
   delete(user:any){
    console.log('delete',user)
    this.list?.closeSlidingItems()
   }

}
