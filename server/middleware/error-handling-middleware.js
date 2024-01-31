const errorHandlingMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Error";
  const extraDetails = err.extraDetails || "Error from Backend Server!";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorHandlingMiddleware;
