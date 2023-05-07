const UDP = require("dgram");

const server = UDP.createSocket("udp4");

const port = 2222;

server.on("listening", () => {
  // Server address it’s using to listen

  const address = server.address();

  console.log(
    "Listining to ",
    "Address: ",
    address.address,
    "Port: ",
    address.port
  );
});

server.on("message", (message, info) => {
  console.log("Mensagem recebida: ", message.toString());

  const response = Buffer.from("Mensagem recebida");

  //sending back response to client

  server.send(response, info.port, info.address, (err) => {
    if (err) {
      console.error("Falhou em enviar resposta!");
    } else {
      console.log("Resposta enviada.");
    }
  });
});

server.bind(port);
