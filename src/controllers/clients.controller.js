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

export const ObtenerUltimo = async (req, res) => {
  try {
    const ultimoCliente = await Client.findOne().sort({ createdAt: -1 });
    if (!ultimoCliente) {
      return res.status(404).json({ message: 'No hay usuarios registrados' });
    }
    res.json(ultimoCliente);
  } catch (error) {
    console.log(error);
  }
};

export const ObtenerCliente = async (req, res) => {
  try {
    const cliente = await Client.findById(req.params.id);
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
  } catch (error) {
    return res.status(404).json({ message: "Cliente no encontrado" });
  }
};