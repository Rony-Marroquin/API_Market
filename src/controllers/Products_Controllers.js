const Product =require('../models/Models_products')



exports.list = async(req, res, next) =>{
    try{
    const product = await Product.find({});
    res.json(product);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) =>{
    try{
        const product = await Product.findOne({id: req.params.id});
        if(!product){
           return res.status(404).json({message: "Producto no encontrado"});
        }
        res.json(product);
        next();

    }catch(error){
        console.log(error);
        return res.status(400).json({message: "Error"});
    }
}


exports.add = async(req, res,next) =>{
    const product = new Product(req.body);

    try{
        await product.save();
        res.json({message: "Agregar un nuevo producto"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};



exports.update = async (req, res, next) =>{
    try{
        const product = await Product.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Pruducto actualizado"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const product = await Product.findOneAndDelete({id: req.params.id});
        res.json({message: "Producto eliminado exitosamente"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "error"});
        next();
    }

}



// Eliminar algunos
exports.deleteMany = async (req, res, next) => {
    try {
        await Product.deleteMany({});
        res.json({message: "Todos los productos han sido eliminados"});
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
}


// Encontra y remplazar
exports.replace = async (req, res, next) => {
    try {
        const product = await Product.replaceOne({_id: req.params.id}, req.body);
        if (product.nModified === 0) {
            return res.status(404).json({message: "Producto no encontrado"});
        }
        res.json({message: "Producto reemplazado exitosamente"});
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
}

// Función para eliminar un producto por su ID
exports.removeById = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if (!product) {
            return res.status(404).json({message: "Producto no encontrado"});
        }
        res.json({message: "Producto eliminado exitosamente"});
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
}

// Función para actualizar un producto por su ID
exports.updateById = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!product) {
            return res.status(404).json({message: "Producto no encontrado"});
        }
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
}

