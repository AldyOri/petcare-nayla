const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllHewan = async (req, res) => {};
const getHewanById = async (req, res) => {};
const createHewan = async (req, res) => {};
const updateHewan = async (req, res) => {};
const deleteHewan = async (req, res) => {};

module.exports = {
  getAllHewan,
  getHewanById,
  createHewan,
  updateHewan,
  deleteHewan,
};
