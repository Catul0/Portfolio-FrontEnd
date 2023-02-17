import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreExperienica: string = '';
  descripcionExperiencia: string = '';
  periodoExperiencia: string = '';
  constructor(private experienciaService:ExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const experiencia = new Experiencia(this.nombreExperienica,this.descripcionExperiencia, this.periodoExperiencia);
    this.experienciaService.save(experiencia).subscribe(
      data => {
        alert("Experiencia guardada");
        window.location.reload();
      }, err =>{
        alert("fallo la creacion");
        window.location.reload();
      })
  }
}
