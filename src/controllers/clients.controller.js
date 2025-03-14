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
        total,
        descripcion
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
            total,
            descripcion
         });

        const savedClient = await newClient.save();

        res.json(savedClient);
     } catch (error) {
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
      createdAt: { $gte: hoy.toDate(), $lt: moment(hoy).endOf("day").toDate() },
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
      createdAt: { $gte: lunes.toDate(), $lte: sabado.toDate() },
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
      createdAt: { $gte: inicioMes.toDate(), $lte: finMes.toDate() },
    });

    res.json(ventas);
  } catch (error) {
    console.error("Error obteniendo ventas del mes:", error);
    res.status(500).json({ error: "Error al obtener las ventas del mes" });
  }
};

export const ObtenerIngresos = async (req, res) => {
  try {

    const clientesEnero = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 1] },
    }).sort({ fecha: 1 }); 

    const totalEnero = clientesEnero.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    const clientesFebrero = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 2] },
    }).sort({ fecha: 1 }); 

    const totalFebrero = clientesFebrero.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    const clientesMarzo = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 3] },
    }).sort({ fecha: 1 }); 

    const totalMarzo = clientesMarzo.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    const clientesAbril = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 4] },
    }).sort({ fecha: 1 }); 

    const totalAbril = clientesAbril.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    const clientesMayo = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 5] },
    }).sort({ fecha: 1 }); 

    const totalMayo = clientesMayo.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    const clientesJunio = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 6] },
    }).sort({ fecha: 1 }); 

    const totalJunio = clientesJunio.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );
    
    const clientesJulio = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 7] },
    }).sort({ fecha: 1 }); 

    const totalJulio = clientesJulio.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    const clientesAgosto = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 8] },
    }).sort({ fecha: 1 }); 

    const totalAgosto = clientesAgosto.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    const clientesSeptiembre = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 9] },
    }).sort({ fecha: 1 }); 

    const totalSeptiembre = clientesSeptiembre.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    const clientesOctubre = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 10] },
    }).sort({ fecha: 1 }); 

    const totalOctubre = clientesOctubre.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    const clientesNoviembre = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 11] },
    }).sort({ fecha: 1 }); 

    const totalNoviembre = clientesNoviembre.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    const clientesDiciembre = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 12] },
    }).sort({ fecha: 1 }); 

    const totalDiciembre = clientesDiciembre.reduce(
      (sum, cliente) => sum + parseFloat(cliente.total || 0),
      0
    );

    res.json({
      totalEnero,
      totalFebrero,
      totalMarzo,
      totalAbril,
      totalMayo,
      totalJunio,
      totalJulio,
      totalAgosto,
      totalSeptiembre,
      totalOctubre,
      totalNoviembre,
      totalDiciembre
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos de marzo" });
  }
}

export const ObtenerAlumnos = async (req, res) => {
  try {
    const clientesEnero = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 1] }, 
    });

    const Enero = clientesEnero.length;

    const clientesFebrero = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 2] }, 
    });

    const Febrero = clientesFebrero.length;

    const clientesMarzo = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 3] }, 
    });

    const marzo = clientesMarzo.length;

    const clientesAbril = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 4] }, 
    });

    const abril = clientesAbril.length;

    const clientesMayo = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 5] }, 
    });

    const Mayo = clientesMayo.length;

    const clientesJunio = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 6] }, 
    });

    const Junio = clientesJunio.length;

    const clientesJulio = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 7] }, 
    });

    const Julio = clientesJulio.length;

    const clientesAgosto = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 8] }, 
    });

    const Agosto = clientesAgosto.length;

    const clientesSeptiembre = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 9] }, 
    });

    const Septiembre = clientesSeptiembre.length;

    const clientesOctubre = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 10] }, 
    });

    const Octubre = clientesOctubre.length;

    const clientesNoviembre = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 11] }, 
    });

    const Noviembre = clientesNoviembre.length;

    const clientesDiciembre = await Client.find({
      $expr: { $eq: [{ $month: "$fecha" }, 12] }, 
    });

    const Diciembre = clientesDiciembre.length;

    res.json({
      Enero,
      Febrero,
      marzo,
      abril,
      Mayo,
      Junio,
      Julio,
      Agosto,
      Septiembre,
      Octubre,
      Noviembre,
      Diciembre
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos de enero" });
  }
}