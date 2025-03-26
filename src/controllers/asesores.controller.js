import Asesores from "../models/Asesores.model.js";

export const crear = async (req, res) => {
    const { 
        nombre,
        correo,
        telefono,
        direccion,
        municipio,
        rfc,
        nacionalidad,
        genero,
        area
     } = req.body;

     try {
        const newAsesor = new Asesores({ 
          nombre,
          correo,
          telefono,
          direccion,
          municipio,
          rfc,
          nacionalidad,
          genero,
          area
         });

        const savedAsesor = await newAsesor.save();

        res.json(savedAsesor);
     } catch (error) {
        console.log(error);;
     }

}

export const ObtenerAsesores = async (req, res) => {
   try {
     const asesores = await Asesores.find();
     res.json(asesores);
   } catch (error) {
     console.log(error);
   }
};