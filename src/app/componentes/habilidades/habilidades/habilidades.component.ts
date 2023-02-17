import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  color:string="orange";
  habilidad:Habilidades[]=[];
  text:string="Agregar Habilidad";
  desplegarHab:boolean=false;
  isLogged = false;
  constructor(
    private habilidadesService:HabilidadesService,
    private tokenService:TokenService
  ) { }

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  cargarHabilidad():void{
    this.habilidadesService.lista().subscribe( data => {this.habilidad=data;})
  }
  abrirAgragarHabilidad(){
    this.desplegarHab=!this.desplegarHab;
    if(this.desplegarHab){
      this.text="Cerrar";
    }else{
      this.text="Agregar Habilida";
    }
    
  }
  deleteHab(id?:number){
    if(id!=undefined){
      this.habilidadesService.delete(id).subscribe(
        data=>{
          this.cargarHabilidad();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }
  obtenerColor(skill: Habilidades){
    if(skill.nivelSkill=="Muy Bueno"){
      return this.color="rgb(7, 88, 7)";
    }else if(skill.nivelSkill=="Bueno"){
      return this.color="green";
    }else if(skill.nivelSkill=="Medio Bajo"){
      return this.color="rgb(18, 216, 18)";
    }else if(skill.nivelSkill=="Medio"){
      return this.color="rgb(13, 153, 13)";
    }else{
      return this.color="orange";
    }
}
}