import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
@Component({
  selector: 'app-tarjeta-informacion',
  templateUrl: './tarjeta-informacion.component.html',
  styleUrls: ['./tarjeta-informacion.component.css']
})
export class TarjetaInformacionComponent implements OnInit {
  persona: Persona = new Persona("","","","","","","","","");
  constructor(
    public personaService:PersonaService,
    private tokenService:TokenService
  ) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarInformacion();

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  cargarInformacion(){
    this.personaService.getPersona().subscribe(data => {this.persona=data})
  }

}
