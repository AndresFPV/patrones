abstract class EstadoCivil
{
    persona : Persona
    constructor(persona : Persona)
    {
        this.persona = persona
    }

    //no les pones códigos a los métodos abstractos
    abstract casar()
    abstract divorciar()
    abstract enviudar()
    abstract morir()
    abstract toString()
}

class Soltero extends EstadoCivil
{
    casar() {
        this.persona.estadoCivil = new Casado(this.persona)
    }
    divorciar() {}
    enviudar() {}
    morir() {
        this.persona.estadoCivil = new Difunto(this.persona)
    }
    toString()
    {
        return "Soltero"
    }
}

class Casado extends EstadoCivil
{
    casar() {}
    divorciar() {
        this.persona.estadoCivil = new Divorciado(this.persona)
    }
    enviudar() {
        this.persona.estadoCivil = new Viudo(this.persona)
    }
    morir() {
        this.persona.estadoCivil = new Difunto(this.persona)
    }
    toString()
    {
        return "Casado"
    }
}

class Viudo extends EstadoCivil
{
    casar() {
        this.persona.estadoCivil = new Casado(this.persona)
    }
    divorciar() {}
    enviudar() {}
    morir() {
        this.persona.estadoCivil = new Difunto(this.persona)
    }
    toString()
    {
        return "Viudo"
    }
}

class Divorciado extends EstadoCivil
{
    casar() {
        this.persona.estadoCivil = new Casado(this.persona)
    }
    divorciar() {}
    enviudar() {}
    morir() {
        this.persona.estadoCivil = new Difunto(this.persona)
    }
    toString()
    {
        return "Divorciado"
    }
}

class Difunto extends EstadoCivil
{
    //Aquí sí hay implementación, código, pero vacío
    casar() {}
    divorciar() {}
    enviudar() {}
    morir() {}
    toString()
    {
        return "Difunto"
    }
}


//clase Persona
class Persona
{
    nombre : String
    edad : String 
    estadoCivil : EstadoCivil

    //todas las clases tienen un método constructor
    //en TS así se define un método constructor
    constructor(nombre : string)
    {
        this.nombre = nombre
        this.estadoCivil = new Soltero(this)    //this porque le estás pasando la misma persona, estado por defecto
    }

    getEstado()
    {
        return this.estadoCivil.toString()
    }

    casar()
    {
        this.estadoCivil.casar()
    }

    divorciar()
    {
        this.estadoCivil.divorciar()
    }

    enviudar()
    {
        this.estadoCivil.enviudar()
    }

    morir()
    {
        this.estadoCivil.morir()
    }
}

//definir la clase main
let mainState = () =>    {
    let juanita : Persona = new Persona("Juanita")
    juanita.casar()
    juanita.divorciar()
    console.log(`El estado es : ${juanita.getEstado()}`)
}

mainState()