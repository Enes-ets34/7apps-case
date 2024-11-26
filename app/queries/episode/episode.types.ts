import {Info} from '../query.types';

export interface EpisodeResponse {
  info: Info;
  results: Array<Episode>;
}
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  created: string;
}
