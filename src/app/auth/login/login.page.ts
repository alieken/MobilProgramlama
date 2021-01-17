import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { Router, RouteReuseStrategy } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
  
export class LoginPage implements OnInit {
  public static uname: string="";
  myarray: any[] = [];
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
  ngOnInit() {
  }
  giris() {
    var name = (<HTMLInputElement>document.getElementById("UserName")).value
    var pass = (<HTMLInputElement>document.getElementById("pass")).value
    var tutucu = false;
    if (name == "alieken" && pass == "alieken") {
      alert("Hoşgeldiniz Admin Bey")
      this.router.navigate(['admin'])
      tutucu = true;
    }
    else {
      for (let index = 0; index < this.myarray.length; index++) {
        if (name == this.myarray[index].name && pass == this.myarray[index].pass) {
          LoginPage.uname = name
          alert("Giriş Başarılı Yönlendiriliyorsunuz.")
          this.router.navigate([''])
          tutucu = true;
        }
      }
    }
    if (tutucu == false) {
      alert("Kullanıcı adı veya şifre yanlış")
    }
  }
}
