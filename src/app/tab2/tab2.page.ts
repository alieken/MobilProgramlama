import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { FormControl } from '@angular/forms';
import { LoginPage } from '../auth/login/login.page';
import { Router, RouteReuseStrategy } from '@angular/router';
import { Tab3Page } from '../tab3/tab3.page';
import { RegisterPage } from '../auth/register/register.page';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private afs: AngularFirestore;
  myArray = [];
  constructor(private firestore: AngularFirestore,private router: Router) {
  }
  myControl = new FormControl();
  isItemAvailable = false;
  items = [];
  deneme(value: string) {
    const value2 = (<HTMLInputElement>document.getElementById("marka")).value;
    for (let i = 0; i < this.masonryImages.length; i++) {
      if (this.masonryImages[i].marka==value) {
        (<HTMLInputElement>document.getElementById("marka")).value = this.masonryImages[i].marka;
        this.items = [];
      }
    }
}
  initializeItems() {
    this.items = [];
    for (let i = 0; i < this.masonryImages.length; i++) {
      this.items.push(this.masonryImages[i].marka);
    }
  }
  getItems(ev: any) {
         
    // Reset items back to all of the items
    

    // set val to the value of the searchbar
    const val = ev.target.value;
    var deneme = true;
        for (let i = 0; i < this.masonryImages.length; i++) {
          if (this.masonryImages[i].marka==val) {
            (<HTMLInputElement>document.getElementById("marka")).value = this.masonryImages[i].marka;
            this.items = [];
            deneme = false;
          }
        }
    if (deneme==true) {
      this.initializeItems();
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.isItemAvailable = false;
    }
  }
  }
  masonryImages = [
    { image: 'assets/icon/abbate.jpg',
    marka: "ABBATE"},
    { image: 'assets/icon/ace.jpg' ,
    marka: "ACE"},
    { image: 'assets/icon/acibadem.png' ,
    marka: "ACIBADEM"},
    { image: 'assets/icon/adidas.jpg' ,
    marka: "ADİDAS"},
    { image: 'assets/icon/akbank.png' ,
    marka: "AKBANK"},
    { image: 'assets/icon/alarko.jpg' ,
    marka: "ALARKO"},
    { image: 'assets/icon/alfaromeo.jpg' ,
    marka: "ALFA ROMEO"},
    { image: 'assets/icon/alfemo.png' ,
    marka: "ALFEMO"},
    { image: 'assets/icon/alo.jpg' ,
    marka: "ALO"},
    { image: 'assets/icon/alpella.jpg' ,
    marka: "ALPELLA"},
    { image: 'assets/icon/altinbas.jpg' ,
    marka: "ALTINBAŞ"},
    { image: 'assets/icon/altinbasak.jpg' ,
    marka: "ALTINBAŞAK"},
    { image: 'assets/icon/altinyildiz.png' ,
    marka: "ALTIN YILDIZ"},
    { image: 'assets/icon/amd.png' ,
    marka: "AMD"},
    { image: 'assets/icon/anadolu.jpg' ,
    marka: "ANADOLU"},
    { image: 'assets/icon/apple.png' ,
    marka: "APPLE"},
    { image: 'assets/icon/arcelik.jpg' ,
    marka: "ARÇELİK"},
    { image: 'assets/icon/ariel.jpg' ,
    marka: "ARİEL"},
    { image: 'assets/icon/arko.png' ,
    marka: "ARKO"},
    { image: 'assets/icon/armani.jpg' ,
    marka: "ARMANİ"},
    { image: 'assets/icon/artema.jpg' ,
    marka: "ARTEMA"},
    { image: 'assets/icon/arzum.jpg' ,
    marka: "ARZUM"},
    { image: 'assets/icon/aselsan.png' ,
    marka: "ASELSAN"},
    { image: 'assets/icon/atasay.jpg' ,
    marka: "ATASAY"},
    { image: 'assets/icon/atiker.png' ,
    marka: "ATİKER"},
    { image: 'assets/icon/audi.jpg' ,
    marka: "AUDİ"},
    { image: 'assets/icon/avea.jpg' ,
    marka: "AVEA"},
    { image: 'assets/icon/avon.jpg' ,
    marka: "AVON"},
    { image: 'assets/icon/ayakkabidunyasi.jpg' ,
    marka: "AYAKKABI DÜNYASI"},
    { image: 'assets/icon/aytac.jpg' ,
    marka: "AYTAÇ"},
    { image: 'assets/icon/bagdat.jpg' ,
    marka: "BAĞDAT"},
    { image: 'assets/icon/balparmak.jpg' ,
    marka: "BALPARMAK"},
    { image: 'assets/icon/bayer.png' ,
    marka: "BAYER"},
    { image: 'assets/icon/beko.png' ,
    marka: "BEKO"},
    { image: 'assets/icon/bellona.png' ,
    marka: "BELLONA"},
    { image: 'assets/icon/beymen.png' ,
    marka: "BEYMEN"},
    { image: 'assets/icon/bim.png' ,
    marka: "BİM"},
    { image: 'assets/icon/bingo.jpg' ,
    marka: "BİNGO"},
    { image: 'assets/icon/biofarma.jpg' ,
    marka: "BİOFARMA"},
    { image: 'assets/icon/bioxcin.jpg' ,
    marka: "BİOXCİN"},
    { image: 'assets/icon/bmc.jpg' ,
    marka: "BMC"},
    { image: 'assets/icon/bmw.jpg' ,
    marka: "BMW"},
    { image: 'assets/icon/bosch.jpg' ,
    marka: "BOSCH"},
    { image: 'assets/icon/bp.jpg' ,
    marka: "BP"},
    { image: 'assets/icon/BRİDGESTONE.png' ,
    marka: "BRİDGESTONE"},
    { image: 'assets/icon/BURGERKING.png' ,
    marka: "BURGER KİNG"},
    { image: 'assets/icon/CAFECROWN.png' ,
    marka: "CAFE CROWN"},
    { image: 'assets/icon/CALGON.jpg' ,
    marka: "CALGON"},
    { image: 'assets/icon/CALVINKLEIN.jpg' ,
    marka: "CALVIN KLEIN"},
    { image: 'assets/icon/CAMEL.jpg' ,
    marka: "CAMEL"},
    { image: 'assets/icon/CANON.png' ,
    marka: "CANON"},
    { image: 'assets/icon/CATERPILLAR.jpg' ,
    marka: "CATERPILLAR"},
    { image: 'assets/icon/CHEVROLET.png' ,
    marka: "CHEVROLET"},
    { image: 'assets/icon/CNN.jpg',
    marka: "CNN"},
    { image: 'assets/icon/COCACOLA.png' ,
    marka: "COCA COLA"},
    { image: 'assets/icon/COLATURKA.png' ,
    marka: "COLA TURKA"},
    { image: 'assets/icon/COLGATE.jpg' ,
    marka: "COLGATE"},
    { image: 'assets/icon/COLLEZIONE.jpg' ,
    marka: "COLLEZİONE"},
    { image: 'assets/icon/CONVERSE.jpg' ,
    marka: "CONVERSE"},
    { image: 'assets/icon/CAYKUR.jpg' ,
    marka: "ÇAYKUR"},
    { image: 'assets/icon/CILEK.jpg' ,
    marka: "ÇİLEK"},
    { image: 'assets/icon/DALIN.png' ,
    marka: "DALİN"},
    { image: 'assets/icon/DARDANEL.jpg',
    marka: "DARDANEL"},
    { image: 'assets/icon/DERBY.jpg' ,
    marka: "DERBY"},
    { image: 'assets/icon/DERİMOD.jpg' ,
    marka: "DERİMOD"},
    { image: 'assets/icon/DIMES.jpg' ,
    marka: "DİMES"},
    { image: 'assets/icon/DOGADAN.png',
    marka: "DOĞADAN"},
    { image: 'assets/icon/DOVE.jpg' ,
    marka: "DOVE"},
    { image: 'assets/icon/DURU.jpg' ,
    marka: "DURU"},
    { image: 'assets/icon/DYO.jpg' ,
    marka: "DYO"},
    { image: 'assets/icon/ECA.png' ,
    marka: "ECA"},
    { image: 'assets/icon/EMSAN.jpg' ,
    marka: "EMSAN"},
    { image: 'assets/icon/ERIKLI.png' ,
    marka: "ERİKLİ"},
    { image: 'assets/icon/ETI.jpg' ,
    marka: "ETİ"},
    { image: 'assets/icon/EVKUR.jpg' ,
    marka: "EVKUR"},
    { image: 'assets/icon/FACEBOOK.png' ,
    marka: "FACEBOOK"},
    { image: 'assets/icon/FALIM.jpg' ,
    marka: "FALİM"},
    { image: 'assets/icon/FANTA.jpg' ,
    marka: "FANTA"},
    { image: 'assets/icon/FIRATPEN.jpg' ,
    marka: "FIRATPEN"},
    { image: 'assets/icon/FILLIBOYA.png' ,
    marka: "FİLLİ BOYA"},
    { image: 'assets/icon/FLO.jpg' ,
    marka: "FLO"},
    { image: 'assets/icon/FORD.jpg' ,
    marka: "FORD"},
    { image: 'assets/icon/GARANTI.jpg' ,
    marka: "GARANTİ"},
    { image: 'assets/icon/GEZER.jpg' ,
    marka: "GEZER"},
    { image: 'assets/icon/GILLETTE.png' ,
    marka: "GİLLETTE"},
    { image: 'assets/icon/GOOGLE.jpg' ,
    marka: "GOOGLE"},
    { image: 'assets/icon/GRUNDIG.png' ,
    marka: "GRUNDİG"},
    { image: 'assets/icon/GUCCI.jpg',
    marka: "GUCCİ"},
    { image: 'assets/icon/GULLUOGLU.jpg' ,
    marka: "GÜLLÜOĞLU"},
    { image: 'assets/icon/HACISAKIR.jpg' ,
    marka: "HACI ŞAKİR"},
    { image: 'assets/icon/HAMIDIYE.jpg' ,
    marka: "HAMİDİYE"},
    { image: 'assets/icon/HAYAT.jpg' ,
    marka: "HAYAT"},
    { image: 'assets/icon/HES.jpg' ,
    marka: "HES"},
    { image: 'assets/icon/HONDA.jpg' ,
    marka: "HONDA"},
    { image: 'assets/icon/HSBC.jpg' ,
    marka: "HSBC"},
    { image: 'assets/icon/IBM.jpg' ,
    marka: "İBM"},
    { image: 'assets/icon/IKBAL.jpg' ,
    marka: "İKBAL"},
    { image: 'assets/icon/INTEL.jpg' ,
    marka: "İNTEL"},
    { image: 'assets/icon/IPANA.jpg' ,
    marka: "İPANA"},
    { image: 'assets/icon/IPEK.png',
    marka: "İPEK"},
    { image: 'assets/icon/ISTIKBAL.jpg' ,
    marka: "İSTİKBAL"},
    { image: 'assets/icon/JACOBS.png' ,
    marka: "JACOBS"},
    { image: 'assets/icon/JAGLER.png' ,
    marka: "JAGLER"},
    { image: 'assets/icon/KAMILKOC.png' ,
    marka: "KAMİL KOÇ"},
    { image: 'assets/icon/KASMIR.jpg' ,
    marka: "KAŞMİR"},
    { image: 'assets/icon/KIGILI.jpg' ,
    marka: "KİĞILI"},
    { image: 'assets/icon/KINDER.png' ,
    marka: "KİNDER"},
    { image: 'assets/icon/KINETIX.jpg' ,
    marka: "KİNETİX"},
    { image: 'assets/icon/KODAK.jpg' ,
    marka: "KODAK"},
    { image: 'assets/icon/KOMILI.png' ,
    marka: "KOMİLİ"},
    { image: 'assets/icon/KOTON.jpg' ,
    marka: "KOTON"},
    { image: 'assets/icon/LASSA.png' ,
    marka: "LASSA"},
    { image: 'assets/icon/LAYS.jpg' ,
    marka: "LAYS"},
    { image: 'assets/icon/LCW.jpg' ,
    marka: "LC WAİKİKİ"},
    { image: 'assets/icon/LEGO.png' ,
    marka: "LEGO"},
    { image: 'assets/icon/LEVI´S.jpg' ,
    marka: "LEVİ´S"},
    { image: 'assets/icon/LORIS.jpg' ,
    marka: "LORİS"},
    { image: 'assets/icon/LUMBERJACK.jpg' ,
    marka: "LUMBERJACK"},
    { image: 'assets/icon/MADO.png' ,
    marka: "MADO"},
    { image: 'assets/icon/MARSHALL.png' ,
    marka: "MARSHALL"},
    { image: 'assets/icon/MAVI.png' ,
    marka: "MAVİ"},
    { image: 'assets/icon/MCDONALD´S.jpg' ,
    marka: "MCDONALD´S"},
    { image: 'assets/icon/MERCEDES.jpg' ,
    marka: "MERCEDES"},
    { image: 'assets/icon/MERINOS.png',
    marka: "MERİNOS"},
    { image: 'assets/icon/METRO.png' ,
    marka: "METRO"},
    { image: 'assets/icon/MEYSU.jpg' ,
    marka: "MEYSU"},
    { image: 'assets/icon/MICROSOFT.jpg' ,
    marka: "MİCROSOFT"},
    { image: 'assets/icon/MIGROS.png' ,
    marka: "MİGROS"},
    { image: 'assets/icon/MINTAX.png' ,
    marka: "MİNTAX"},
    { image: 'assets/icon/MIS.jpg' ,
    marka: "MİS"},
    { image: 'assets/icon/MUDO.png' ,
    marka: "MUDO"},
    { image: 'assets/icon/NESCAFE.jpg' ,
    marka: "NESCAFE"},
    { image: 'assets/icon/NESTLE.jpg' ,
    marka: "NESTLE"},
    { image: 'assets/icon/NEXTSTAR.png' ,
    marka: "NEXTSTAR"},
    { image: 'assets/icon/NIKE.jpg' ,
    marka: "NİKE"},
    { image: 'assets/icon/NIVEA.png' ,
    marka: "NİVEA"},
    { image: 'assets/icon/NOKIA.jpg' ,
    marka: "NOKİA"},
    { image: 'assets/icon/NUTELLA.jpg' ,
    marka: "NUTELLA"},
    { image: 'assets/icon/OPEL.jpg' ,
    marka: "OPEL"},
    { image: 'assets/icon/ORKIDE.jpg' ,
    marka: "ORKİDE"},
    { image: 'assets/icon/PANASONIC.png' ,
    marka: "PANASONİC"},
    { image: 'assets/icon/PAPIA.jpg' ,
    marka: "PAPİA"},
    { image: 'assets/icon/PASABAHCE.jpg' ,
    marka: "PAŞABAHÇE"},
    { image: 'assets/icon/PEGASUS.jpg' ,
    marka: "PEGASUS"},
    { image: 'assets/icon/PEPSI.jpg' ,
    marka: "PEPSİ"},
    { image: 'assets/icon/PERSIL.png' ,
    marka: "PERSIL"},
    { image: 'assets/icon/PETLAS.png' ,
    marka: "PETLAS"},
    { image: 'assets/icon/PHILIPS.png' ,
    marka: "PHİLİPS"},
    { image: 'assets/icon/PINAR.jpg' ,
    marka: "PINAR"},
    { image: 'assets/icon/PIERRECARDIN.jpg' ,
    marka: "PİERRE CARDİN"},
    { image: 'assets/icon/POLARIS.jpg' ,
    marka: "POLARİS"},
    { image: 'assets/icon/POLO.png' ,
    marka: "POLO"},
    { image: 'assets/icon/PUMA.jpg' ,
    marka: "PUMA"},
    { image: 'assets/icon/RENAULT.jpg' ,
    marka: "RENAULT"},
    { image: 'assets/icon/ROLEX.png' ,
    marka: "ROLEX"},
    { image: 'assets/icon/SABAH.jpg' ,
    marka: "SABAH"},
    { image: 'assets/icon/SABANCI.jpg' ,
    marka: "SABANCI"},
    { image: 'assets/icon/SARAY.png' ,
    marka: "SARAY"},
    { image: 'assets/icon/SARELLE.png' ,
    marka: "SARELLE"},
    { image: 'assets/icon/SELPAK.jpg' ,
    marka: "SELPAK"},
    { image: 'assets/icon/SHELL.png' ,
    marka: "SHELL"},
    { image: 'assets/icon/SIRMA.jpg' ,
    marka: "SIRMA"},
    { image: 'assets/icon/SLAZENGER.png' ,
    marka: "SLAZENGER"},
    { image: 'assets/icon/SOLO.jpg' ,
    marka: "SOLO"},
    { image: 'assets/icon/SONY.jpg' ,
    marka: "SONY"},
    { image: 'assets/icon/SUTAS.png' ,
    marka: "SÜTAŞ"},
    { image: 'assets/icon/SOLEN.jpg' ,
    marka: "ŞÖLEN"},
    { image: 'assets/icon/TAC.jpg',
    marka: "TAÇ"},
    { image: 'assets/icon/TADELLE.png' ,
    marka: "TADELLE"},
    { image: 'assets/icon/TADIM.jpg' ,
    marka: "TADIM"},
    { image: 'assets/icon/TAMEK.png' ,
    marka: "TAMEK"},
    { image: 'assets/icon/TEKNOSA.png' ,
    marka: "TEKNOSA"},
    { image: 'assets/icon/TOMMYHILFIGER.jpg' ,
    marka: "TOMMY HİLFİGER"},
    { image: 'assets/icon/TOSHIBA.jpg' ,
    marka: "TOSHİBA"},
    { image: 'assets/icon/TOYOTA.jpg' ,
    marka: "TOYOTA"},
    { image: 'assets/icon/TURKCELL.jpg' ,
    marka: "TURKCELL"},
    { image: 'assets/icon/TTNET.jpg' ,
    marka: "TTNET"},
    { image: 'assets/icon/ULUDAG.jpeg' ,
    marka: "ULUDAĞ"},
    { image: 'assets/icon/ULKER.jpg' ,
    marka: "ÜLKER"},
    { image: 'assets/icon/VAKIFBANK.png',
    marka: "VAKIFBANK"},
    { image: 'assets/icon/VESTEL.jpg' ,
    marka: "VESTEL"},
    { image: 'assets/icon/VISA.jpg' ,
    marka: "VISA"},
    { image: 'assets/icon/VOLVO.jpg' ,
    marka: "VOLVO"},
    { image: 'assets/icon/YAPIKREDI.jpg' ,
    marka: "YAPI KREDİ"},
    { image: 'assets/icon/YATAS.jpg' ,
    marka: "YATAŞ"},
    { image: 'assets/icon/YORSAN.jpg' ,
    marka: "YÖRSAN"},
    { image: 'assets/icon/YURTICIKARGO.png' ,
    marka: "YURTİÇİ KARGO"},
    { image: 'assets/icon/ZARA.jpg' ,
    marka: "ZARA"},
    { image: 'assets/icon/ZİRAAT.jpg' ,
    marka: "ZİRAAT BANKASI"},
  ];
  
  gonder() {
    var marka = (<HTMLInputElement>document.getElementById("marka")).value; 
    var konu = (<HTMLInputElement>document.getElementById("konu")).value; 
    var mesaj = (<HTMLInputElement>document.getElementById("mesaj")).value; 
    var istekvssikayetvsoneri;
    if ((<HTMLInputElement>document.getElementById("istek")).checked) {
      istekvssikayetvsoneri = (<HTMLInputElement>document.getElementById("istek")).value; 
    }
    else if ((<HTMLInputElement>document.getElementById("oneri")).checked) {
      istekvssikayetvsoneri = (<HTMLInputElement>document.getElementById("oneri")).value; 
    }
    else if ((<HTMLInputElement>document.getElementById("sikayet")).checked) {
      istekvssikayetvsoneri = (<HTMLInputElement>document.getElementById("sikayet")).value; 
    }
    var isim = "";
    if (LoginPage.uname == "") {
      isim = RegisterPage.uname;
    }
    else if (RegisterPage.uname == "") {
      isim = LoginPage.uname;
    }
    const deneme = {
      uname: isim,
      marka : marka,
      konu: konu,
      mesaj: mesaj,
      secim: istekvssikayetvsoneri,
      durum: "alarm",
      id: Math.floor(Math.random() * Math.floor(99999999))
    };
    var control = 0;
    for (let index = 0; index < this.masonryImages.length; index++) {
      if (this.masonryImages[index].marka == marka.toUpperCase()) {
        control = 1;
      }
    }
    if (konu == "" || mesaj == "" || control==0) {
      alert("Lütfen Boş Yerleri Doldurunuz")
    }
    else {
      control = 2;
    }
    if (control == 2) {
      this.firestore.collection(marka).add(deneme);
      this.firestore.collection(isim).add(deneme);
      (<HTMLInputElement>document.getElementById("marka")).value = "";
      (<HTMLInputElement>document.getElementById("konu")).value = "";
      (<HTMLInputElement>document.getElementById("mesaj")).value = "";
      alert("Mesajınız alındı");
    }
  }

}

