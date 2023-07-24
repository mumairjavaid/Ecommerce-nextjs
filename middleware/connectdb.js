const connectdb = (handler) => async (req, res) => {
  if (mongoose.connections[0].activeState) {
    return handler(req, res);
  }
  mongoose.connect(process.env.MONGO_URI);
  return handler(req, res);
};

export default connectdb;
