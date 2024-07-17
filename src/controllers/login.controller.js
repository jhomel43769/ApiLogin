import { prisma } from "../db.js";

export const getuser = async(req, res) => {

    try {
        const login = await prisma.user.findMany();
        res.status(200).json(login);
    } catch (error) {
        res.status(400).json({ error: "Error en el metodo GET", message: error.message });
    }
};

export const createuser = async(req, res) => {
    const { email, password, username } = req.body;

    try {
        const newUser = await prisma.user.create({
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
    const userId = parseint(req.params.id);
    const { email, password, username } = req.body;
    try {
        const updateuser = await prisma.user.update({
            where: { id: userId },
            data: {
                email,
                password,
                username,
            },
        });
        res.json(updateuser);
    } catch (error) {
        res.status(500).json({ error: "No se pudo actualizar los datos del usuario" });

    }
};

export const deleteuser = async(req, res) => {
    const userId = parseint(req.params.id);
    try {
        await prisma.user.delete({
            where: { id: userId },
        });
        res.json({ message: "Usuario eliminado con exito" });
    } catch (error) {
        res.status(500)({ error: "no se pudo eliminar el usuario" });
    }
};