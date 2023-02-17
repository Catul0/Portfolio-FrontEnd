import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  persona: Persona = new Persona("","","","","","","","","");
  variable:any;
  constructor(
    public personaService:PersonaService,
    private tokenService:TokenService,
    private router: Router,
    private route:ActivatedRoute
  ) { }
  isLogged = false;
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona=data})
    this.variable=this.router.url;
    console.log(this.variable);
    if((this.tokenService.getToken()) && (this.variable=="/home")){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

}
