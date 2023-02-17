import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {
  titulo: string = '';
  institucion: string = '';
  descripcion:string= '';
  constructor(private educacionService:EducacionService, private router:Router) { }

  ngOnInit(): void {
  }
  onCreateEducacion():void{
    const educacion = new Educacion(this.titulo,this.institucion,this.descripcion);
    this.educacionService.save(educacion).subscribe(
      data => {
        alert("Estudio guardado");
        window.location.reload();
      }, err =>{
        alert("fallo la creacion");
      })
  }

}
