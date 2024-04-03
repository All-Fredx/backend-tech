const Cliente = require("../models/Cliente");

exports.buscarClientes = async(req,res) => {
    try {
       let cliente = await Cliente.find();
       res.json(cliente);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al buscar los cliente");
    }
};

exports.agregarClientes = async(req, res) => {
    try {
        let cliente;
        cliente = new Cliente (req.body)
        await cliente.save();
        res.send(cliente);
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al agregar el cliente");
    }
};

exports.buscarCliente = async(req,res) => {
    try {
       let cliente = await Cliente.findById(req.params.id);
       if(!cliente){
        res.status(400).json({msg:"Cliente no encontrado con ese ID"});
        return;
       }
       res.json(cliente);
    } catch (error) {
        console.log(error)
        res.status(404).send("Hubo un error al buscar el cliente");
    }
};

exports.eliminarCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg:"El cliente no existe"});
            return;
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El cliente ha sido eliminado"});
        return;
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al eliminar el cliente");
    }
};
/*
exports.actualizarCliente = async (req, res) => {
    try {
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body;
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg:"El cliente no existe"});
        }else{
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;
            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente, {new:true});
            res.json(cliente);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al actualizar el cliente");
        return;
    }
};*/

exports.actualizarCliente = async (req, res) => {
    try {
      const cliente = await Cliente.findOneAndUpdate(
        { _id: req.params.id }, req.body, {new:true}
      );
  
      if (!cliente) res.status(404).send("Cliente no encontrado");
      else res.json(cliente);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al actualizar el cliente");
    }
  }; 