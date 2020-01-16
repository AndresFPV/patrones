enum EstadoCivil{Soltero, Casado, Viudo, Divorciado, Difunto}

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
        this.estadoCivil = EstadoCivil.Soltero
    }

    getEstado()
    {
        switch(this.estadoCivil)
        {
            case EstadoCivil.Soltero:
                return "Soltero"
            case EstadoCivil.Casado:
                return "Casado"
            case EstadoCivil.Viudo:
                return "Viudo"
            case EstadoCivil.Divorciado:
                return "Divorciado"
            case EstadoCivil.Difunto:
                return "Difunto"
        }
    }

    casar()
    {
        if (this.estadoCivil != EstadoCivil.Difunto)
        {
            this.estadoCivil = EstadoCivil.Casado
        }
    }

    divorciar()
    {
        if (this.estadoCivil = EstadoCivil.Casado)
        {
            this.estadoCivil = EstadoCivil.Divorciado
        }
    }

    enviudar()
    {
        if (this.estadoCivil = EstadoCivil.Casado)
        {
            this.estadoCivil = EstadoCivil.Viudo
        }
    }

    morir()
    {
        this.estadoCivil = EstadoCivil.Difunto
    }
}

//definir la clase main
let mainState = () =>    {
    let pepito : Persona = new Persona("Pepe")
    pepito.casar()
    console.log(`El estado es : ${pepito.getEstado()}`)
}

mainState()