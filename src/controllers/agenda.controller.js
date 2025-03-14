import Agenda from "../models/Agenda.model.js";

export const crear = async (req, res) => {
    const { 
        titulo,
        descripcion,
        hora,
        fecha,
     } = req.body;

     try {
        const newEvent = new Agenda({ 
            titulo,
            descripcion,
            hora,
            fecha,
         });

        const savedEvent = await newEvent.save();

        res.json(savedEvent);
     } catch (error) {
        console.log(req.body);
     }

}

export const getAgenda = async (req, res) => {
   try {
     const agenda = await Agenda.find();
     res.json(agenda);
   } catch (error) {
     console.log(error);
   }
};

export const eliminarEventosPasados = async () => {
   try {
     const hoy = new Date();
     const result = await Agenda.deleteMany({ createdAt: { $lt: hoy } });
     console.log(`Eventos eliminados: ${result.deletedCount}`);
   } catch (error) {
     console.error(error);
   }
 };