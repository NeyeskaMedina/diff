const verifyActivity = async (req, res, next) => {
  const parametros_body = req.body;
  const params = req.params;
  const query = req.query;
  const url = req.url;

  console.log(
    `
    Fecha: ${new Date()}
    Ruta: ${url}
    Payload: ${JSON.stringify(parametros_body, null, 2)}
    Query: ${JSON.stringify(query, null, 2)}
    Parametros: ${JSON.stringify(params, null, 2)}
    `
  );

  next();
};

 export { verifyActivity }