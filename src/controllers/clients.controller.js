import Client from "../models/clientes.model.js";

export const getClients = async (req, res) => {
   try {
     const clientes = await Client.find();
     res.json(clientes);
   } catch (error) {
     return res.status(500).json({ message: "Something went wrong" });
   }
 };

  export const crear = async (req, res) => {
    const { 
        nombre,
        direccion,
        asesoria,
        grupo,
        sesiones,
        horas,
        importe,
        anticipo,
        pendiente,
        fechaPendiente,
        incentivo,
        total
     } = req.body;

     try {
        const newClient = new Client({ 
            nombre,
            direccion,
            asesoria,
            grupo,
            sesiones,
            horas,
            importe,
            anticipo,
            pendiente,
            fechaPendiente,
            incentivo,
            total
         });

        const savedClient = await newClient.save();

        res.json(savedClient);
     } catch (error) {
         console.log(req.body);
        return res.status(500).json({ message: 'Something went wrong' });
     }

    }