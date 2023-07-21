const connectdb = (handler) => {
  if (mongoose.connections[0].activeState) {
    return handler(req, res);
  }
  mongoose.connect("Mongodb_URI");
  return handler(req, res);
};
