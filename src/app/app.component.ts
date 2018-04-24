import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classes$;

  constructor(db: AngularFireDatabase) {
    this.classes$ = db.list('/classes');

    // this.subscription = db.list('/classes')
    //   .valueChanges()
    //   .subscribe(classes => {
    //     this.classes = classes;
    //     console.log(this.classes);
    //   })
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
