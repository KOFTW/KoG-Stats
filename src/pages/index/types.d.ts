import { MapType, PlayerRanks } from "../../types/types";

interface LandingOptions {
  sortBy: MapType,
  players: Array<PlayerRanks>,
  categoryMenu: {
    categories: Array<MapType>
  } 
}