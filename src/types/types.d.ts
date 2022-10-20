type Rank = "rank 1" | "rank 2" | "rank 3" | "rank 4" | "rank 5";
type MapType = "Easy" | "Main" | "Hard" | "Insane" | "Mod" | "Total";

type Category = {
  [key in Rank]: number;
}

type Categories = {
  [key in MapType]: Category;
}

interface PlayerRanks {
  name: string;
  categories: Categories;
}

interface Finish {
  name: string;
  time: number;
}

interface KoGMapEntity {
  name: string;
  category: MapType;
}

interface KoGMap extends KoGMapEntity {
  topFinishes: Array<Finish>;
}

export {
  Rank,
  MapType,
  Category,
  Categories,
  PlayerRanks,
  Finish,
  KoGMapEntity,
  KoGMap,
}