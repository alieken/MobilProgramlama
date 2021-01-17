import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { LoginPage } from '../auth/login/login.page';
import { RegisterPage } from '../auth/register/register.page';
import { Tab3PageModule } from './tab3.module';
import { Tab2Page } from '../tab2/tab2.page';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  myarray: any[] = [];
  constructor(private firestore: AngularFirestore) {
    var isim = "";
    if (LoginPage.uname == "") {
      isim = RegisterPage.uname;
    }
    else if (RegisterPage.uname == "") {
      isim = LoginPage.uname;
    }
    this.firestore
    .collection(isim)
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.myarray.push(doc.data());
      });
    });
  }
  gonder() {
    this.myarray = [];
    var isim = "";
    if (LoginPage.uname == "") {
      isim = RegisterPage.uname;
    }
    else if (RegisterPage.uname == "") {
      isim = LoginPage.uname;
    }
    this.firestore
    .collection(isim)
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.myarray.push(doc.data());
      });
    });
  }
}
