import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  nombreProyecto: string = '';
  descripcionProyecto: string = '';
  fechaProyecto: string = '';
  linkProyecto: string = '#proyectoss';
  constructor(private proyectoService: ProyectosService,
    private activatedRouter:ActivatedRoute
) { }

  ngOnInit(): void {
  }
  onCreateProyecto(): void {
    const proyecto = new Proyectos(this.nombreProyecto, this.descripcionProyecto, this.fechaProyecto, this.linkProyecto);
    this.proyectoService.save(proyecto).subscribe(
      data => {
        alert("Proyecto guardado");
        window.location.reload();
      }, err => {
        alert("fallo la creacion");
        window.location.reload();
      })
  }

  
}
