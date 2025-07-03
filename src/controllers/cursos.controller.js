import Cursos from "../models/Cursos.model.js";

export const crear = async (req, res) => {
    const { 
        nombre,
        costo
    } = req.body;

    try {
        const newCurso = new Cursos({ 
          nombre,
          costo
         });

        const savedCurso = await newCurso.save();

        res.json(savedCurso);
     } catch (error) {
        console.log(error);
     }

}

export const ObtenerCursos = async (req, res) => {
   try {
     const cursos = await Cursos.find();
     res.json(cursos);
   } catch (error) {
     console.log(error);
   }
};

export const ObtenerCurso = async (req, res) => {
    const { id } = req.params;
    try {
        const curso = await Cursos.findById(id);
        if (!curso) {
            return res.status(404).json({ message: "Curso no encontrado" });
        }
        res.json(curso);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener el curso" });
    }
};

export const ActualizarCurso = async (req, res) => {
    const { id } = req.params;
    const { nombre, costo } = req.body;

    try {
        const cursoActualizado = await Cursos.findByIdAndUpdate(
            id,
            { nombre, costo },
            { new: true }
        );

        if (!cursoActualizado) {
            return res.status(404).json({ message: "Curso no encontrado" });
        }

        res.json(cursoActualizado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar el curso" });
    }
};

export const deleteCurso = async (req, res) => {
    const curso = await Cursos.findByIdAndDelete(req.params.id);
    if (!curso) return res.status(404).json({message: "Curso no encontrado"});
    return res.sendStatus(204);
};