import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';
import { Router, RouteReuseStrategy } from '@angular/router';
interface Post{
  name: string;
  email: string;
  pass: string;
  }
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  public static uname: string="";
  myarray: any[] = [];
  profcollection: any;
  tutorials: Observable<any[]>;
  constructor(private firestore: AngularFirestore,private router: Router) { 
    this.firestore
    .collection("users")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.myarray.push(doc.data());
      });
    });
  }
  kayit() {
    var name = (<HTMLInputElement>document.getElementById("name")).value
    var email = (<HTMLInputElement>document.getElementById("email")).value
    var pass = (<HTMLInputElement>document.getElementById("password")).value
    var confirm = (<HTMLInputElement>document.getElementById("confirm")).value
    if (pass == confirm) {
      var olumlumu = true;
      var sayac = 0;
      for (let index = 0; index < this.myarray.length; index++) {
        if (name == this.myarray[index].name) {
          olumlumu = false;
          sayac++;
        }  
      }
      if (olumlumu == true) {
        RegisterPage.uname = name;
        alert("Kayıt Başarılı");
        var deneme = {
          name: name,
          email: email,
          pass: pass
        }
        this.firestore.collection("users").add(deneme);
        this.router.navigate([''])
      }
      else {
        alert("Aynı isimde kayıtlı birisi var")
      }
    }
    else {
      alert("Şifreler eşleşmiyor.")
    }
    //var users = this.firestore.collection('users').snapshotChanges();
    
    //this.firestore.collection(marka).add(deneme);
  }
  ngOnInit() {
  }

}
