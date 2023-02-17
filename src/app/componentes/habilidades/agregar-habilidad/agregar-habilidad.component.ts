import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-agregar-habilidad',
  templateUrl: './agregar-habilidad.component.html',
  styleUrls: ['./agregar-habilidad.component.css']
})
export class AgregarHabilidadComponent implements OnInit {
  nombreSkill: string = '';
  descripcionSkill: string = '';
  nivelSkill: string = 'orange';
  constructor(private habilidadesService:HabilidadesService) { }

  ngOnInit(): void {
  }
  tomarNivelBajo(){
    this.nivelSkill="Medio Bajo";
  }
  tomarNivelMedio(){
    this.nivelSkill="Medio";
  }
  tomarNivelBueno(){
    this.nivelSkill="Bueno";
  }
  tomarNivelMuyBueno(){
    this.nivelSkill="Muy Bueno";
  }
  onCreateSkill():void{
    const habilidad = new Habilidades(this.nombreSkill,this.descripcionSkill,this.nivelSkill);
    this.habilidadesService.save(habilidad).subscribe(
      data => {
        alert("Habilidad guardada");
        window.location.reload();
      }, err =>{
        alert("fallo la creacion");
        window.location.reload();
      })
  }
}
