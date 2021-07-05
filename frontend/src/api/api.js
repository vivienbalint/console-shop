import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllConsoles = () => api.get(`/consoles`);
export const getPsConsoles = () => api.get(`/consoles/playstation`);
export const getXboxConsoles = () => api.get(`/consoles/xbox`);
export const getNintendoConsoles = () => api.get(`/consoles/nintendo`);
export const getPsAccessories = () => api.get(`/accessories/playstation`);
export const getXboxAccessories = () => api.get(`/accessories/xbox`);
export const getNintendoAccessories = () => api.get(`/accessories/nintendo`);
export const getPsGames = () => api.get(`/games/playstation`);
export const getXboxGames = () => api.get(`/games/xbox`);
export const getNintendoGames = () => api.get(`/games/nintendo`);

const apis = {
  getAllConsoles,
  getPsConsoles,
  getXboxConsoles,
  getNintendoConsoles,
  getPsAccessories,
  getXboxAccessories,
  getNintendoAccessories,
  getPsGames,
  getXboxGames,
  getNintendoGames,
};

export default apis;
