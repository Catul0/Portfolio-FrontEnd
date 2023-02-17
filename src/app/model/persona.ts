export class Persona{
    id?:number;
    nombre:string;
    apellido:string;
    sobreMi:string;
    banner:string;
    img:string;
    email:string;
    curriculum:string;
    instagram:string;
    linkedin:string;

    constructor(nombre:string,apellido:string, sobreMi:string, banner:string, img:string,email:string,curriculum:string,instagram:string,linkedin:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sobreMi = sobreMi;
        this.banner = banner;
        this.img = img;
        this.email = email;
        this.curriculum = curriculum;
        this.instagram = instagram;
        this.linkedin = linkedin;

    }
}