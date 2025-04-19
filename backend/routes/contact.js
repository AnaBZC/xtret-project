const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        const contact = new Contact({ name, email, message });
        await contact.save();
        res.status(201).json({ message: 'Mensaje guardado con éxito' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al guardar el mensaje' });
    }
});

router.get('/', async (req, res) => {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
});

module.exports = router;
