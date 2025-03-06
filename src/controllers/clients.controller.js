import Client from "../models/clientes.model.js";
import moment from "moment";

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

export const BorrarCliente = async (req, res) => {
  const client = await Client.findByIdAndDelete(req.params.id);
  if (!client) return res.status(404).json({ message: "Client not found" });
  return res.sendStatus(204);
};

export const ObtenerVentasDelDia = async (req, res) => {
  try {
    const hoy = moment().startOf("day");
    const ventas = await Client.find({
      fecha: { $gte: hoy.toDate(), $lt: moment(hoy).endOf("day").toDate() },
    });

    res.json(ventas);
  } catch (error) {
    console.error("Error obteniendo ventas de hoy:", error);
    res.status(500).json({ error: "Error al obtener las ventas" });
  }
};

export const ObtenerVentasSemanales = async (req, res) => {
  try {
    const lunes = moment().startOf("week").add(1, "days"); // Lunes de la semana actual
    const sabado = moment(lunes).add(5, "days").endOf("day"); // Sábado de la misma semana

    const ventas = await Client.find({
      fecha: { $gte: lunes.toDate(), $lte: sabado.toDate() },
    });

    res.json(ventas);
  } catch (error) {
    console.error("Error obteniendo ventas de la semana:", error);
    res.status(500).json({ error: "Error al obtener las ventas de la semana" });
  }
};

export const ObtenerVentasMes = async (req, res) => {
  try {
    const inicioMes = moment().startOf("month"); // Primer día del mes a las 00:00:00
    const finMes = moment().endOf("month"); // Último día del mes a las 23:59:59

    const ventas = await Client.find({
      fecha: { $gte: inicioMes.toDate(), $lte: finMes.toDate() },
    });

    res.json(ventas);
  } catch (error) {
    console.error("Error obteniendo ventas del mes:", error);
    res.status(500).json({ error: "Error al obtener las ventas del mes" });
  }
};