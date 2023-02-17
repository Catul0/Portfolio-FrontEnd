import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyecto:Proyectos= null;

  constructor(
    private proyectoService: ProyectosService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService:TokenService
  ) { }
  isLogged = false;
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }
 
  onUpdateProyecto(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
