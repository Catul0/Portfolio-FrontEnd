export class Experiencia {
    id?: number;
    nombreExperiencia: string;
    descripcionExperiencia: string;
    periodoExperiencia: string;

    constructor(nombreExperiencia: string, descripcionExperiencia:string,periodoExperiencia:string){
        this.nombreExperiencia = nombreExperiencia;
        this.descripcionExperiencia = descripcionExperiencia;
        this.periodoExperiencia = periodoExperiencia;
    }

}
