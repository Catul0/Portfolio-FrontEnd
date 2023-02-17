export class Proyectos {
    id?: number;
    nombreProyecto: string;
    descripcionProyecto: string;
    fechaProyecto: string;
    linkProyecto: string;

    constructor(nombreProyecto: string, descripcionProyecto:string, fechaProyecto: string,linkProyecto: string){
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.fechaProyecto = fechaProyecto;
        this.linkProyecto = linkProyecto;
    }
}
