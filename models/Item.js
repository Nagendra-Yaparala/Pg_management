import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }, // Change 'mail' to 'email'
  password: { type: String, required: true },
}, {
  collection: 'pgUsers',
});

const Item = mongoose.model.Item || mongoose.model('Item', ItemSchema);

export default Item;
