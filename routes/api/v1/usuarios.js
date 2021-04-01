const router = require("express").Router();
const auth = require("../../auth");
const UsuarioController = require("../../../controllers/UsuarioController");

const usuarioController = new UsuarioController(); 

router.post("/login",UsuarioController.login); // testado
router.post("/registrar",UsuarioController.store); // testado
router.put("/", auth.required,UsuarioController.update); // testado
router.delete("/", auth.required, usuarioController.remove); // testado

router.get("/recuperar-senha", usuarioController.showRecovery); // testado
router.post("/recuperar-senha", usuarioController.createRecovery); // testado
router.get("/senha-recuperada", usuarioController.showCompleteRecovery); // testado
router.post("/senha-recuperada", usuarioController.completeRecovery); // testado

router.get("/", auth.required, usuarioController.index); // testado
router.get("/:id", auth.required, UsuarioController.show);// testado

module.exports = router;