import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto:Proyectos[]=[];
  text:string="Agregar Proyecto";
  desplegarAgregarProyecto:boolean=false;
  constructor(
    private proyectoService:ProyectosService,
    private tokenService:TokenService
  ) { }

  isLogged = false;
  ngOnInit(): void {
    
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  cargarProyecto():void{
    this.proyectoService.lista().subscribe( data => {this.proyecto=data;})
  }
  abrirAgragarProyecto(){
    this.desplegarAgregarProyecto=!this.desplegarAgregarProyecto;
    if(this.desplegarAgregarProyecto){
      this.text="Cerrar";
    }else{
      this.text="Agregar Proyecto";
    }
    
  }
  deleteProyect(id?:number){
    if(id!=undefined){
      this.proyectoService.delete(id).subscribe(
        data=>{
          this.cargarProyecto();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }
  referencia(proyect:Proyectos){
    if(proyect.linkProyecto=="#proyectoss"){
      alert("no hay ningun link asociado")
    }
    return
  }

}
