import { Request, Response } from 'express';
import User, { IUser } from '../models/user';

// Controlador para crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;

    // Crea una nueva instancia del modelo User
    const newUser: IUser = new User({
      username,
      email,
    });

    // Guarda el nuevo usuario en la base de datos
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Controlador para obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // Busca todos los usuarios en la base de datos
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Controlador para obtener un usuario por su ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    // Busca un usuario por su ID en la base de datos
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Controlador para actualizar un usuario por su ID
export const updateUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { username, email } = req.body;

    // Busca y actualiza el usuario por su ID
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

// Controlador para eliminar un usuario por su ID
export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    // Busca y elimina el usuario por su ID
    const deletedUser = await User.findByIdAndRemove(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};
