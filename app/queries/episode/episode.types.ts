import {Info} from '../query.types';

export interface EpisodeResponse {
  info: Info;
  results: Array<{
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    created: string;
  }>;
}
