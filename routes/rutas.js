const express = require("express");
const router =  express.Router();
const clienteController = require("../controllers/clienteController");
const proveedorController = require("../controllers/proveedorController");

//rutas Clientes
router.post("/clientes/", clienteController.agregarClientes);
router.get("/clientes/", clienteController.buscarClientes);
router.get("/clientes/:id", clienteController.buscarCliente);
router.delete("/clientes/:id", clienteController.eliminarCliente);
router.put("/clientes/:id", clienteController.actualizarCliente);

//Rutas Proveedores
router.post("/proveedores/", proveedorController.agregarProveedores);
router.get("/proveedores/", proveedorController.buscarProveedores);
router.get("/proveedores/:id", proveedorController.buscarProveedor);
router.delete("/proveedores/:id", proveedorController.eliminarProveedor);
router.put("/proveedores/:id", proveedorController.actualizarProveedor);

module.exports = router;
