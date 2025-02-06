import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import { TOKEN_SECRETO } from "../config.js";
import jwt from "jsonwebtoken";

  export const register = async (req, res) => {
    const { usuario, contraseña } = req.body;
  
    try {

      const userFound = await User.findOne({ usuario });
      if (userFound) return res.status(400).json({ message: ["Este usuario ya esta registrado"]});
  
      const hash = await bcrypt.hash(contraseña, 10);
  
      const newUser = new User({
        usuario,
        contraseña: hash,
      });
  
      const userSaved = await newUser.save();

        const token = await createAccessToken({ id: userSaved._id });
  
        res.cookie("token", token);
        res.json({
          id: userSaved._id,
          usuario: userSaved.usuario,
          role: userSaved.role,
        });
    } catch (error) {
      console.log(error);
    }
  };

  export const login = async (req, res) => {
    const { usuario, contraseña } = req.body;
  
    try {
      const userFound = await User.findOne({ usuario });
      if (!userFound) 
        return res.status(400).json({ message: "Usuario no encontrado" });
  
      const isMatch = await bcrypt.compare(contraseña, userFound.contraseña);
      if (!isMatch)
        return res.status(400).json({ message: "Contraseña incorrecta" });
  
        const token = await createAccessToken({ id: userFound._id });
  
        res.cookie("token", token);
        res.json({
          id: userFound._id,
          usuario: userFound.usuario,
        });
      
    } catch (error) {
      console.log(error);
    }
  };

  export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
  
    if (!token) return res.status(401).json({ message: "Unauthorized" });
  
    jwt.verify(token, TOKEN_SECRETO, async (err, user) => {
      if (err) return res.status(401).json({ message: "Unauthorized" });
  
      const userFound = await User.findById(user.id);
      if (!userFound) res.status(401).json({ message: "Unauthorized" });
  
      return res.json({
        id: userFound._id,
        usuario: userFound.usuario,
        role: userFound.role,
      });
    });
  };

  export const logout = async (req, res) => {
    res.cookie("token", "", {
      expires: new Date(0),
    });
    return res.sendStatus(200);
  };