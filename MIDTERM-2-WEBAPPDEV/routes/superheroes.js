const express = require('express');
const axios = require('axios');
const router = express.Router();

// Función para obtener información del héroe
const getHero = async (id) => {
    const response = await axios.get(`https://superheroapi.com/api/YOUR_API_KEY/${id}`);
    return response.data;
};

// Ruta para mostrar un héroe
router.get('/:id', async (req, res) => {
    const heroId = req.params.id;
    try {
        const hero = await getHero(heroId);
        res.render('hero', { hero });
    } catch (error) {
        res.status(500).send('Error obteniendo información del héroe');
    }
});

// Ruta para manejar búsqueda
router.get('/search/:name', async (req, res) => {
    const heroName = req.params.name;
    // Implementa la lógica de búsqueda aquí
});

module.exports = router;
