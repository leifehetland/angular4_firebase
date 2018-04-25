import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classesRef: AngularFireList<{}>;
  classes: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.classesRef = db.list('/classes');
    this.classes = this.classesRef
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
  }

  add(newClass: HTMLInputElement) {
    this.classesRef.push( {text: newClass});
  }

  update(key: string, newText: string) {
    this.classesRef.update(key, { text: newText });
  }

  delete(key: string) {
    this.classesRef.remove(key);
  }

  deleteEverything() {
   this.classesRef.remove();
 }
}
