import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classes: any[];

  constructor(db: AngularFireDatabase) {

    db.list('/classes')
      .valueChanges()
      .subscribe(classes => {
        this.classes = classes;
        console.log(this.classes);
      })
  }
}
