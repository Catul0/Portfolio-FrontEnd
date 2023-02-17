import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/nav/header/header.component';
import { LoginComponent } from './componentes/nav/login/login.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { TarjetaInformacionComponent } from './componentes/informacion/tarjeta-informacion/tarjeta-informacion.component';
import { EditInfoComponent } from './componentes/informacion/edit-info/edit-info.component';
import { interceptorProvider } from './service/interceptor.service';
import { ExperienciaComponent } from './componentes/experiencia/experiencia/experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia/nueva-experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EducacionComponent } from './componentes/educacion/educacion/educacion.component';
import { AgregarEducacionComponent } from './componentes/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades/habilidades.component';
import { AgregarHabilidadComponent } from './componentes/habilidades/agregar-habilidad/agregar-habilidad.component';
import { EditarHabilidadComponent } from './componentes/habilidades/editar-habilidad/editar-habilidad.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos/proyectos.component';
import { AgregarProyectoComponent } from './componentes/proyectos/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditarFotoComponent } from './componentes/portada/editar-foto/editar-foto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    PortadaComponent,
    TarjetaInformacionComponent,
    EditInfoComponent,
    ExperienciaComponent,
    EditarExperienciaComponent,
    NuevaExperienciaComponent,
    FooterComponent,
    EducacionComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    HabilidadesComponent,
    AgregarHabilidadComponent,
    EditarHabilidadComponent,
    ProyectosComponent,
    AgregarProyectoComponent,
    EditarProyectoComponent,
    EditarFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
