export class Habilidades {
    id?:number;
    nombreSkill:string;
    descripcionSkill:string;
    nivelSkill:string;
    constructor(nombreSkill: string, descripcionSkill:string,nivelSkill:string){
        this.nombreSkill = nombreSkill;
        this.descripcionSkill = descripcionSkill;
        this.nivelSkill = nivelSkill;
    }
}
