const Proveedor = require("../models/Proveedor");

exports.buscarProveedores = async(req,res) => {
    try {
       let proveedor = await Proveedor.find();
       res.json(proveedor);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al buscar los proveedores");
    }
};

exports.agregarProveedores = async(req, res) => {
    try {
        let proveedor;
        proveedor = new Proveedor (req.body)
        await proveedor.save();
        res.send(proveedor);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al agregar el proveedor");
    }
};

exports.buscarProveedor = async(req,res) => {
    try {
       let proveedor = await Proveedor.findById(req.params.id);
       if(!proveedor){
        res.status(400).json({msg:"Proveedor no encontrado con ese ID"});
        return;
       }
       res.json(proveedor);
    } catch (error) {
        console.log(error)
        res.status(404).send("Hubo un error al buscar el proveedor");
    }
};

exports.eliminarProveedor = async (req, res) => {
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg:"El proveedor no existe"});
            return;
        }
        await Proveedor.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El proveedor ha sido eliminado"});
        return;
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al eliminar el proveedor");
    }
};

exports.actualizarProveedor = async (req, res) => {
    try {
      let proveedor = await Proveedor.findOneAndUpdate(
        { _id: req.params.id }, req.body, {new:true}
      );
      
      if (!proveedor) res.status(404).send("Proveedor no encontrado");
      else res.json(proveedor);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al actualizar el proveedor");
    }
  }; 