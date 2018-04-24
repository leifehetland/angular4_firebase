import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  classes: any[];
  subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.subscription = db.list('/classes')
      .valueChanges()
      .subscribe(classes => {
        this.classes = classes;
        console.log(this.classes);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
