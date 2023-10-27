class Persona {
    constructor(nombre, edad, direccion) {
      this.nombre = nombre;
      this.edad = edad;
      this.direccion = direccion;
    }

    obtenerInformacion() {
      console.log("Nombre: " + this.nombre);
      console.log("Edad: " + this.edad);
      console.log("Dirección: " + this.direccion);
    }
  
    // getters y setters
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getEdad() {
      return this.edad;
    }
  
    setEdad(edad) {
      this.edad = edad;
    }
  
    getDireccion() {
      return this.direccion;
    }
  
    setDireccion(direccion) {
      this.direccion = direccion;
    }
  }
  
  const persona1 = new Persona("Juan", 30, "Calle 123");
  persona1.imprimirInformacion();
  persona1.setEdad(31);
  persona1.setDireccion("Calle 456");
  persona1.imprimirInformacion();