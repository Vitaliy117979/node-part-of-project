const { Schema, model } = require("mongoose");

const productSchema = Schema(
        {
          title: {
            type: String,
            required: true,
          },
          quentity: {
            type: String,
            required: true,
          },
          user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
          },
          thumb: {
                type: String,
           },
        },
        { timestamps: true }
      );
      
      const Product = model("product", productSchema);
      
      module.exports = {
        Product,
      };
      