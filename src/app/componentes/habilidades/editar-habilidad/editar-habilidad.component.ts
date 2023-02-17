import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  habilidad:Habilidades= null;

  constructor(
    private habilidadesService: HabilidadesService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService:TokenService
  ) { }
  isLogged=false;
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesService.detail(id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['']);
      }
    )
  }
  tomarNivelBajo(){
    this.habilidad.nivelSkill="Medio Bajo";
  }
  tomarNivelMedio(){
    this.habilidad.nivelSkill="Medio";
  }
  tomarNivelBueno(){
    this.habilidad.nivelSkill="Bueno";
  }
  tomarNivelMuyBueno(){
    this.habilidad.nivelSkill="Muy Bueno";
  }
  onUpdateHabilidad(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesService.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
