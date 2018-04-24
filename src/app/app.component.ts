import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classes$;
  classList$: AngularFireList<{}>;
  // oneClass$;
  // author$;

  constructor(db: AngularFireDatabase) {
    this.classList$ = db.list('/classes');
    this.classes$ = this.classList$.valueChanges();
  }

  add(oneClass: HTMLInputElement) {
    this.classList$.push(oneClass.value);
    oneClass.value = '';

  }
}
