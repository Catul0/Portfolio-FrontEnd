import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarHabilidadComponent } from './componentes/habilidades/editar-habilidad/editar-habilidad.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditInfoComponent } from './componentes/informacion/edit-info/edit-info.component';
import { EditarFotoComponent } from './componentes/portada/editar-foto/editar-foto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';

const routes: Routes = [
    {path: '',redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'editarInformacion/:id', component:EditInfoComponent},
    {path:'editarExperiencia/:id', component:EditarExperienciaComponent},
    {path:'editarEducacion/:id', component:EditarEducacionComponent},
    {path:'editarHabilidad/:id', component:EditarHabilidadComponent},
    {path: 'editarProyecto/:id', component:EditarProyectoComponent},
    {path:'editarImg/:id', component:EditarFotoComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
