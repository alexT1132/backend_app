import Count from "../models/counter.model.js";

export const getCounters = async (req, res) => {
  try {
    // Buscar el último producto registrado
    const ultimoCount = await Count.findOne().sort({ createdAt: -1 });

    console.log(ultimoCount.numero);
    res.json({ ultimoCount });
  } catch (error) {
    res.status(500).json({ error });
  }
 };

  export const crear = async (req, res) => {
    const { numero } = req.body;

     try {
        const newCount = new Count({ numero });

        const savedCount = await newCount.save();

        res.json(savedCount);
     } catch (error) {
        console.log(error);
     }

    }