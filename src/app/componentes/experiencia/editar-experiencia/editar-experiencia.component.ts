import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  expe:Experiencia= null;

  constructor(
    private experienciaService: ExperienciaService,
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
    this.experienciaService.detail(id).subscribe(
      data => {
        this.expe = data;
      }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.expe).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['']);
      }
    )
  }


}

