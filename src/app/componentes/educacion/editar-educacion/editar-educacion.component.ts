import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion:Educacion= null;

  constructor(
    private educacionService: EducacionService,
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
    this.educacionService.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['']);
      }
    )
  }
  onUpdateEducacion(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
