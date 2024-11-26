import {SelectedItem} from '../types';

export interface EpisodeStore {
  selectedEpisodeList: SelectedItem[];
  addEpisode: (episode: SelectedItem) => void;
  removeEpisode: (episodeId: number) => void;
}
