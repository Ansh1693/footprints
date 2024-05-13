// import "dotenv/config.js";

import fastify from "fastify";
import pino from "pino";
import "@logtail/pino";

const app = fastify({
  logger: pino({
    level: "trace",
    transport: {
      targets: [
        {
          target: "@logtail/pino",
          options: { sourceToken: process.env.LOGTAIL_TOKEN },
        },
        {
          target: "pino-pretty",
          options: { colorize: true },
        },
      ],
    },
  }),
});

import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";

app.register(multipart, {
  limits: { fileSize: 10000000, files: 1 },
});
app.register(helmet, {
  global: true,
});
app.register(cors, {
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  origin: [process.env.CLIENT, "http://localhost:3000"],
});

import fastifyAuth from "@fastify/auth";

app.register(fastifyAuth);

import jwt from "./utils/plugins/jwt.plugin.js";
import proxy from "./utils/plugins/proxy.plugin.js";

app.register(jwt);
app.register(proxy);

import clientAuth from "./utils/decorators/clientAuth.decorator.js";
import callbackAuth from "./utils/decorators/callbackAuth.decorator.js";
import userAuth from "./utils/decorators/userAuth.decorator.js";

app.register(clientAuth);
app.register(callbackAuth);
app.register(userAuth);

import fastifyHealthcheck from "fastify-healthcheck";

app.register(fastifyHealthcheck, { healthcheckUrl: "/utility/health" });

import auth from "./routes/auth.route.js";
// import blok from "./routes/blok.route.js";
// import document from "./routes/document.route.js";
// import user from "./routes/user.route.js";
// import tag from "./routes/tag.route.js";
// import utility from "./routes/utility.route.js";
// import query from "./routes/query.route.js";
// import connect from "./routes/connect.route.js";
import prisma from "./utils/initializers/prisma.initializer.js";

app.register(auth, { prefix: "/auth" });
// app.register(blok, { prefix: "/blok" });
// app.register(document, { prefix: "/document" });
// app.register(user, { prefix: "/user" });
// app.register(tag, { prefix: "/tag" });
// app.register(utility, { prefix: "/utility" });
// app.register(query, { prefix: "/query" });
// app.register(connect, { prefix: "/connect" });

app.listen(
  { port: process.env.PORT || 3000, host: "0.0.0.0" },
  async (error) => {
    try {
      await prisma.$connect();
      console.log(prisma);
    } catch (e) {
      console.log(e);
    }
    if (error) {
      throw error;
    }

    console.log(`Listening on ${process.env.PORT || 3000}!`);
  },
);
