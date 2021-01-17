import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }
  gonder() {
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var mail = (<HTMLInputElement>document.getElementById("mail")).value;
    var subject = (<HTMLInputElement>document.getElementById("subject")).value;
    if (name == "" || mail == "" || subject == "") {
      alert("Lütfen boş alanları doldurunuz!!!")
    } else {
      var deneme = {
        name: name,
        mail: mail,
        subject: subject
      }
      this.firestore.collection("BİZEULAS").add(deneme);
      (<HTMLInputElement>document.getElementById("name")).value = "";
      (<HTMLInputElement>document.getElementById("mail")).value = "";
      (<HTMLInputElement>document.getElementById("subject")).value = "";
      alert("Mesajınız Alındı. Teşekkürler.");
    }
  }
}
