import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dilshantharindu261_db_user:NlB1rnzaFoXSqnDs@cluster0.dhuxu6g.mongodb.net/lanka-batiks",
    )
    .then(() => console.log("DB Connected"));
};
