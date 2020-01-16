//este patrón es el "factory method"
//NO PONER ESPACIOS, Ñ
//abstract te permite definir métodos métodos, no tengo código, pero sí para definido, obligan que sus hijos implementen el método abstracto, para que se borre algún error tenemos que implementar el métodos
abstract class Empleado
{
    abstract calcularSueldo() : number
}

class Mesero extends Empleado
{
    calcularSueldo(): number {
        return 1200
    }

}

class Cocinero extends Empleado
{
    calcularSueldo(): number {
        return 2000
    }

}

//Esta clase nos pide que creemos que estará la lógica de creación Empleados
//Este es el factory method
class EmpleadoFactory
{
    obtenerEmpleado(tipo : string) : Empleado 
    {
        //La lógica que permite seleccionar que clase de Empleado será
        if (tipo == "cocinero")
        {
            return new Cocinero()
        }else if (tipo == "mesero")
        {
            return new Mesero()
        }else
        {
            return null
        }
    }
}

/*let mainFactory = () =>{
    let factory : EmpleadoFactory = new EmpleadoFactory()
    let e1 : Empleado = factory.obtenerEmpleado("cocinero")
    let e2 : Empleado = factory.obtenerEmpleado("mesero")

    console.log(`Sueldo : ${e1.calcularSueldo()}`)
    console.log(`Sueldo : ${e2.calcularSueldo()}`)
}*/

let mainFactory = () =>{
    let factory : EmpleadoFactory = new EmpleadoFactory()
    //para windows modificando variable de entorno del sistema
    //let tipo : string = process.env.TIPO_EMPLEADO
    let tipo : string = process.argv[2]
    let e1 : Empleado = factory.obtenerEmpleado(tipo)
    

    console.log(`Sueldo : ${e1.calcularSueldo()}`)
}

mainFactory()

//NO HACER
//let emp = new Empleado()
