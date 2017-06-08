import { Input,Component, OnInit } from '@angular/core'; //agrego el Input

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit,Input { //lo Exporto en la clase

  color : any;
  mensaje : any;
  @Input() //AGREGO COMO UNA FUNCION ARRIBA DE TODO
  set Estado(name:any){
    console.log("name ",name);
     this.estado = name;
     this.colorAlert(this.estado);
  }
  get Estado(){
    return this.estado;
  }


  estado : any;

  constructor() {
    
   }

  colorAlert(estado)
  {
    switch (estado) {
      case 1:
          this.color = "danger";
          this.mensaje = this.estado;
        break;
      case 2:
          this.color = "danger";
          this.mensaje = this.estado;
        break;
      case 3:
          this.color = "danger";
          this.mensaje = this.estado;
        break;
      case 4:
          this.color = "warning";
          this.mensaje = this.estado;
        break;
      case 5:
          this.color = "warning";
          this.mensaje = this.estado;
        break;
      case 6:
          this.color = "warning";
          this.mensaje = this.estado;
        break;
      case 7:
          this.color = "info";
          this.mensaje = this.estado;
        break;
      case 8:
          this.color = "info";
          this.mensaje = this.estado;
        break;
      case 9:
          this.color = "success";
          this.mensaje = this.estado;
        break;
      case 10:
          this.color = "success";
          this.mensaje = this.estado;
        break;

      default:
          this.mensaje = "no entre a ningun caso";
          console.log(estado);
        break;
    }
      
  }

  ngOnInit() {
  }
}