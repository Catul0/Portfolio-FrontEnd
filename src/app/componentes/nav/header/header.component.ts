import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona: Persona = new Persona("","","","","","","","","");
  isLogged = false;

  constructor( public personaService:PersonaService,private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona=data})
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
