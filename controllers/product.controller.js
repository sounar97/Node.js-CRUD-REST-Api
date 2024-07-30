const getProducts= async (req, res) => {
    async(req,res)=>{
        try{
            const product=await Product.find();
            res.status(200).json(product);
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    }
}

const getProduct=async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createProduct=async(req,res)=>{
    try{
        const product=await Product.create(req.body)
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
module.exports={getProducts,getProduct,createProduct};
;