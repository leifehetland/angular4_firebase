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
  class$;
  author$;

  constructor(db: AngularFireDatabase) {
    this.classes$ = db.list('/classes').valueChanges();
    this.class$ = db.object('/classes/1').valueChanges();
    this.author$ = db.object('authors/1').valueChanges();

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
