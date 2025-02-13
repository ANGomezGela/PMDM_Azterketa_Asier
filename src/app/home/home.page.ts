import { Component } from '@angular/core';
import { CuestionarioService } from './../servicios/cuestionario.service';
import { IPregunta } from './../interfaces/interfaces';
import { ModuloModule } from '../Komponenteak/modulo.module';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  Berriak: IPregunta[] = [];

  //Zerbitzua inportatu
  constructor(private service: CuestionarioService, private alertController: AlertController) {}

  ngOnInit(): void {  
    this.getBerriak();
    console.log(this.Berriak);
  }

  getBerriak(){
    this.Berriak = this.service.getDatuak();
  }

  async presentAlert(i: number){
    
    const alert = await this.alertController.create({
      header: "¿De qué marca es este logotipo?",
      inputs: [{
        id: 'respuesta',
        name: 'respuesta',
        placeholder: 'Nombre de logo',
      },],
      buttons:[{
        id: 'enviar',
        text: 'enviar'
      }]
    })
    await alert.present();
  }
  

  //Metodo bat sortu "Erantzun" onclick egiteko
  OnClick(){
    
  }
  //IGaldera bat jasoko du eta zerbitzua deituko du beharrezkoak diren eragiketak egiteko

  //Sortu metodo bat "Gorde"ren onclick-a kudeatzeko
  //Ez du parametrorik jasotzen eta zerbitzuari deituko dio dagokion eragiketak egiteko.


}
