import {Info} from '../query.types';

export interface LocationResponse {
  info: Info;
  results: Array<{
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    created: string;
  }>;
}
