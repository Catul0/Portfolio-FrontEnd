export class Educacion {
    id?: number;
    titulo: string;
    institucion: string;
    descripcion:string;
    constructor(titulo: string,institucion:string, descripcion:string){
        this.titulo = titulo;
        this.institucion = institucion;
        this.descripcion = descripcion;
    }
}
