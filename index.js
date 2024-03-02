// Importation du module Fastify 
const fastify = require('fastify')();
// Importation du module Fastify MongoDB
const fastifyMongo = require('fastify-mongodb');

const dotenv = require('dotenv');

dotenv.config();

// Connexion à MongoDB Atlas
fastify.register(fastifyMongo, {
  // URL de connexion au cluster Atlas MongoDB
  url: process.env.MONGO_URL,
  database: process.env.DBName, 
}).then(() => console.log("Connexion réussie à la base de données")).catch(err => console.error(err));

// Déclaration de la route tets

fastify.get("/test", async (request, reply) => {
    try {
        console.log("Ceci est un test de route");
        // Renvoyer une réponse JSON
        reply.send({ hello: 'world' });
    } catch (error) {
        console.error("Erreurrr", error);
      
    }
});


// Lancement du serveur
const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 5000);
        console.log(`Serveur Fastify démarré sur le port ${process.env.PORT}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();




