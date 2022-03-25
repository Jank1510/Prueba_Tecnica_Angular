import { Component } from '@angular/core';
import { ServiceApiService } from './service/service-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba_Tecnica_Angular';

  datosApi: any
  imgApi: any

  constructor(private service: ServiceApiService) {
    this.service.consumirApi().subscribe((response: any) => {
      this.datosApi = response[0]//[0] ya que trabajare con la primera collecion
      this.imgApi = this.datosApi.kitchens//aca expecifico la lista de kitchens para iterarla con *ngFor
    })
  }

  preview(idPreview:any){
    console.log(idPreview)
  }
}
