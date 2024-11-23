const express = require("express");
const { login, register, me } = require("../controllers/user-controller");
const {
  getAllArtikel,
  getArtikelById,
  createArtikel,
  updateArtikel,
  deleteArtikel,
} = require("../controllers/artikel-controller");
const {
  createHewan,
  deleteHewan,
  getAllHewan,
  getHewanById,
  updateHewan,
} = require("../controllers/hewan-controller");
const {
  createComment,
  deleteComment,
  updateComment,
} = require("../controllers/comment-controller");
const { verifyToken } = require("../middleware/auth-middleware");
const router = express.Router();

// auth route
router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/me", verifyToken, me);

// artikel route
router.get("/artikel", verifyToken, getAllArtikel);
router.get("/artikel/:id", verifyToken, getArtikelById);
router.post("/artikel", verifyToken, createArtikel);
router.patch("/artikel/:id", verifyToken, updateArtikel);
router.delete("/artikel/:id", verifyToken, deleteArtikel);

// comment route
router.post("/artikel/:id/comment", verifyToken, createComment);
router.patch("/artikel/:id/comment/:comment_id", verifyToken, updateComment);
router.delete("/artikel/:id/comment/:comment_id", verifyToken, deleteComment);

// hewan route (blom beres)
router.get("/hewan", verifyToken, getAllHewan);
router.get("/hewan/:id", verifyToken, getHewanById);
router.post("/hewan", verifyToken, createHewan);
router.patch("/hewan/:id", verifyToken, updateHewan);
router.delete("/hewan/:id", verifyToken, deleteHewan);

// booking route

// layanan route

// dokter route
router.get("/dokter", verifyToken, getAllDokter)
router.get("/dokter/:id", verifyToken, getDokterById)
router.post("/dokter", verifyToken, createDokter)
router.patch("/dokter/:id", verifyToken, updateDokter)
router.delete("/dokter/:id", verifyToken, deleteDokter)

module.exports = router;
