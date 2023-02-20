import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImagenService } from 'src/app/service/imagen.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-editar-foto',
  templateUrl: './editar-foto.component.html',
  styleUrls: ['./editar-foto.component.css']
})
export class EditarFotoComponent implements OnInit {

  persona:Persona = null;
  constructor(
    private personaService:PersonaService,
    private activatedRouter:ActivatedRoute,
    private tokenService:TokenService,
    private router:Router,
    public imagenService:ImagenService
  ) { }
  isLogged=false;
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar Informacion");
        this.router.navigate(['']);
      }
    )
  }
  funcion(){
    this.router.navigate(['']);
  }
  cambiarImagen($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imagenService.uploadImage($event, name)
    
  }
}
