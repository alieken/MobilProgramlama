import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { LoginPage } from '../auth/login/login.page';
import { RegisterPage } from '../auth/register/register.page';
import { Tab3Page } from '../tab3/tab3.page';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
  
export class TabsPage {
  constructor() {
  }
}
