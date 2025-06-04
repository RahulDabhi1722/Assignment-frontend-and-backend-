module.exports = {
  success: (res, data, message = "Request was successful") => {
    return res.status(200).json({
      status: "success",
      message,
      data,
    });
  },

  created: (res, data, message = "Resource created successfully") => {
    return res.status(201).json({
      status: "success",
      message,
      data,
    });
  },

  notFound: (res, message = "Resource not found") => {
    return res.status(404).json({
      status: "error",
      message,
    });
  },

  badRequest: (res, message = "Bad request") => {
    return res.status(400).json({
      status: "error",
      message,
    });
  },

  serverError: (res, message = "Internal server error") => {
    return res.status(500).json({
      status: "error",
      message,
    });
  },
};
