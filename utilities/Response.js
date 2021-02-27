module.exports = (req, res, next) => {
  res.getOKResponse = function ({ status_code, msg, data, status }) {
    return res.status(200).send({
      status: status || true,
      data: data || {},
      message: msg || "",
      code: status_code || 200
    });
  }

  res.getErrorResponse = function ({ error }) {
    return res.status(400).send({
      error:  error || "Internal_server_error"
    });
  }
  next();
}


