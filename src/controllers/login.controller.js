import { prisma } from "../db.js";

export const getuser = async(req, res) => {
    try {
        const users = await prisma.login.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: "Error al obtener los usuarios", message: error.message });
    }
};


export const createuser = async(req, res) => {
    const { email, password, username } = req.body;

    try {
        const newUser = await prisma.login.create({
            data: {
                email,
                password,
                username,
            },
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "error de solicitud" });
    }
}


export const updateuser = async(req, res) => {
    const userId = req.params.id;
    const { email, password, username } = req.body;
    try {
        const updatedUser = await prisma.login.update({
            where: { id: userId },
            data: {
                email,
                password,
                username,
            },
        });
        res.json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "No se pudo actualizar los datos del usuario" });
    }
};

export const deleteuser = async(req, res) => {
    const userId = req.params.id;
    try {
        await prisma.login.delete({
            where: { id: userId },
        });
        res.json({ message: "Usuario eliminado con exito" });
    } catch (error) {
        res.status(500)({ error: "no se pudo eliminar el usuario" });
    }
};