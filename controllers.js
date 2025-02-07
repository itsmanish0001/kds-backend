import { TryCatch } from "./error.js"
import Product from './Schema.js'

const get_products = TryCatch(async(req, resp)=>{

    const products = await Product.find();
    return resp.json(products);

})



const add_product = TryCatch(async(req, resp)=>{

  const { name, price, description } = req.body;
  if (!name || !price) {
    return resp.status(400).json({ message: 'Name and price are required' });
  }

  const response =  await Product.create({ name, price, description });
    resp.status(201).json(response);

    
})



const delete_product = TryCatch(async(req, resp)=>{

    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return resp.status(404).json({ message: 'Product not found' });
    }
    resp.json({ message: 'Product deleted successfully' });
    
})


export {get_products, add_product, delete_product};