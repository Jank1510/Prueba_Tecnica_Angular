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
  imgPrincipal: any
  imgSeleccionada: any
  previewimg!: string
  display!: string
  nameCollection!:string
  id!:string
  imgContent:any
  pVisible:boolean
  classDivImg:string
  SeeMore:string
  spanVisible:boolean
  constructor(private service: ServiceApiService) {
    this.service.consumirApi().subscribe((response: any) => {
      this.datosApi = response[0]//[0] ya que trabajare con la primera collecion
      this.imgApi = this.datosApi.kitchens//aca expecifico la lista de kitchens para iterarla con *ngFor
      this.imgPrincipal = this.datosApi.image//se carga la ruta de la imagen pricipal
      this.nameCollection=this.datosApi.name
      this.imgContent=this.datosApi.contents
      this.preview(this.imgApi[0].id)//cargamos con la coleccion inicial
    })
  this.pVisible=true
  this.classDivImg='divCuandoSeeLess'
  this.SeeMore='SEE MORE'
  this.spanVisible=false

  }

  preview(idPreview: any) {
    for (const iterator of this.imgApi) {
      if (iterator.id === idPreview) {
        this.imgSeleccionada = iterator.photos
        this.id=iterator.id

        setTimeout(() => {
          this.seleccionarimg(this.imgSeleccionada[0].image)
          let imgSelect = document.getElementById(idPreview) as HTMLImageElement;
          imgSelect.style.cssText = 'width: 13vw; height: 7vw;filter: grayscale(50) opacity(70%); margin-top: 0.5vw; margin-bottom: 0.5vw;animation-duration: 0.5s;animation-name: AnimationCollectionselect;';
        }, 1);

      } else {
        setTimeout(() => {
          let imgNoSelect = document.getElementById(iterator.id) as HTMLImageElement;
          imgNoSelect.style.cssText = 'width: 15vw; height: 8vw; margin: 0;filter: none;';
        }, 1);
      }
    }
  }
  seleccionarimg(rutaimg: string) {
    this.display = 'none'
    setTimeout(() => {
      this.display = 'flex'

      this.previewimg = rutaimg
    }, 1);

    //aca identificamos a cual imagen se selecciono para agregar el diseño
    for (const iterator of this.imgSeleccionada) {
      if (iterator.image === rutaimg) {
        let idimg = document.getElementById(rutaimg) as HTMLImageElement;
        idimg.style.cssText = 'width: 13vw;  height: 12vw; margin-top: -1vw;filter: none;animation-duration: 0.5s;animation-name: AnimationIMGselect;';
      } else {
        let idimgElse = document.getElementById(iterator.image) as HTMLImageElement;
        idimgElse.style.cssText = 'width: 11vw;  height: 10vw; margin-top: 0vw;filter: grayscale(100) opacity(70%);';
      }
    }
  }
  FuctionSeeMore(){
    if (this.pVisible===true){
      this.pVisible=false
  this.classDivImg='divCuandoSeemore'
  this.SeeMore='SEE LESS'
  this.spanVisible=true



    }else{
      if(this.pVisible===false){
      this.pVisible=true
      this.classDivImg='divCuandoSeeLess'
  this.SeeMore='SEE MORE'
  this.spanVisible=false


      }
    }
  }
}
