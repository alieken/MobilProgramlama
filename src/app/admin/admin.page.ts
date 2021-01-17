import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  markaarrayi: any[] = [];
  markaarrayid: any[] = [];
  myarray: any[] = [];
  users: any[] = [];
  iceriklerdenonce: any[] = [];
  icerikler: any[] = [];
  iceriklerid: any[] = [];
  icerikleridonce: any[] = [];
  usersdocid: any[] = [];
  constructor(private firestore: AngularFirestore) {
    this.firestore
    .collection("users")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.usersdocid.push(doc.id);
        this.users.push(doc.data());
      });
    });
    setTimeout(() => 
    {
  for (let index = 0; index < this.users.length; index++) {
    this.firestore
    .collection(this.users[index].name)
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.icerikleridonce.push(doc.id);
        this.iceriklerdenonce.push(doc.data());
      });
    });
  }
},
      1000);
      for (let index = 0; index < this.masonryImages.length; index++) {
        this.firestore
        .collection(this.masonryImages[index].marka)
        .get()
        .subscribe((ss) => {
          ss.docs.forEach((doc) => {
            this.markaarrayid.push(doc.id);
            this.markaarrayi.push(doc.data());
          });
        });
      }
/*
    for (let index = 0; index < this.users.length; index++) {
      this.firestore
      .collection(this.users[index].name)
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.iceriklerid.push(doc.id);
          this.icerikler.push(doc.data());
        });
      });
    }*/
  }
  ngOnInit() {
  }
  gonder() {
    this.icerikler = [];
    this.iceriklerid = [];
    for (let index = 0; index < this.iceriklerdenonce.length; index++) {
      if (this.iceriklerdenonce[index].durum == "alarm") {
        this.icerikler.push(this.iceriklerdenonce[index]);
        this.iceriklerid.push(this.icerikleridonce[index]);
      }
    }
    this.iceriklerdenonce = [];
    this.icerikleridonce = [];
    for (let index = 0; index < this.users.length; index++) {
      this.firestore
      .collection(this.users[index].name)
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.icerikleridonce.push(doc.id);
          this.iceriklerdenonce.push(doc.data());
        });
      });
    }
  }

  sil(id) {
    var silinecemarka="";
    var silinecekmarkaid="";
    for (let index = 0; index < this.markaarrayi.length; index++) {
      if (this.markaarrayi[index].id == id) {
        silinecemarka = this.markaarrayi[index].marka;
        silinecekmarkaid = this.markaarrayid[index];
      }
    }
    for (let index = 0; index < this.icerikler.length; index++) {
      if (id == this.icerikler[index].id) {
        this.icerikler[index].durum="close-circle"
        this.firestore.doc(this.icerikler[index].uname + '/' + this.iceriklerid[index]).update(this.icerikler[index]);
        this.firestore.doc(silinecemarka + '/' + silinecekmarkaid).update(this.icerikler[index]);
        this.firestore.collection("onaylanmayanlar").add(this.icerikler[index]);
        alert("Silme işlemi onaylandı")
        break;
      }
    }
    this.iceriklerdenonce = [];
    this.icerikleridonce = [];
    for (let index = 0; index < this.users.length; index++) {
      this.firestore
      .collection(this.users[index].name)
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.icerikleridonce.push(doc.id);
          this.iceriklerdenonce.push(doc.data());
        });
      });
    }
    this.markaarrayi = [];
    this.markaarrayid = [];
    for (let index = 0; index < this.masonryImages.length; index++) {
      this.firestore
      .collection(this.masonryImages[index].marka)
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.markaarrayid.push(doc.id);
          this.markaarrayi.push(doc.data());
        });
      });
    }
    this.gonder();
  }



  onayla(id) {
    var onaylamarka="";
    var onaylamarkaid="";
    for (let index = 0; index < this.markaarrayi.length; index++) {
      if (this.markaarrayi[index].id == id) {
        onaylamarka = this.markaarrayi[index].marka;
        onaylamarkaid = this.markaarrayid[index];
      }
    }
    for (let index = 0; index < this.icerikler.length; index++) {
      if (id == this.icerikler[index].id) {
        this.icerikler[index].durum="checkmark-circle-outline"
        this.firestore.doc(this.icerikler[index].uname + '/' + this.iceriklerid[index]).update(this.icerikler[index]);
        this.firestore.doc(onaylamarka + '/' + onaylamarkaid).update(this.icerikler[index]);
      this.firestore.collection("onaylananlar").add(this.icerikler[index]);
        alert("Onaylama işlemi başarılı")
        break;
      }
    }
    this.iceriklerdenonce = [];
    this.icerikleridonce = [];
    for (let index = 0; index < this.users.length; index++) {
      this.firestore
      .collection(this.users[index].name)
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.icerikleridonce.push(doc.id);
          this.iceriklerdenonce.push(doc.data());
        });
      });
    }
    this.markaarrayi = [];
    this.markaarrayid = [];
    for (let index = 0; index < this.masonryImages.length; index++) {
      this.firestore
      .collection(this.masonryImages[index].marka)
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.markaarrayid.push(doc.id);
          this.markaarrayi.push(doc.data());
        });
      });
    }
    this.gonder();
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
}