import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { IPregunta } from './../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  // Array bat gordetzeko json-ean dauden galdera guztiak. Gogoratu array-a abiarazten arazoak ekiditzeko
  // Gehitu beharrezkoak diren konponenteak eta zerbitzuak

  datuak: IPregunta[] = [];

  constructor(private http: HttpClient, private alertController: AlertController) {
    //Datuak kargatu
    let datuakFitx:Observable<IPregunta[]>;
    datuakFitx = this.http.get<IPregunta[]>("/assets/datos/datos.json");
    datuakFitx.subscribe(IPregunta => {
      console.log(IPregunta);
      this.datuak.push(...IPregunta); //sartzeko array bat beste array batean
    });
    
  }


  
  
  // IPregunta array-a bueltatuko duen metodoa, hau da, galdetegiko galdera guztiak array batean
  getDatuak(){
    console.log(this.datuak);
    return this.datuak;
  }
    


  // Fitxategia irakurtzeko metodoa
  // Gogoratu asinkronoa dela.


  // Fitxategitik irakurtzen ditu datuak eta arrayan gordetzen ditu


  // Ireki alerta bat galderaren enuntziatuarekin eta konprobatu erantzuna
  // 1 - Erantzun zuzena ala okerra denaren arabera eguneratzen du egoera
  // 2 - Ez ba du asmatzen:
  // 2.1 Saiakera kopuruari kendu bat
  // 2.2 Gordeko du erantzuna erantzunen array-an



}
