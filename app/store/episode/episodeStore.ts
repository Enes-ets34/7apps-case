import {create} from 'zustand';
import {EpisodeStore} from './episodeStore.types';

export const useEpisodeStore = create<EpisodeStore>(set => ({
  selectedEpisodeList: [],

  addEpisode: (episode):void =>
    set(state => ({
      selectedEpisodeList: [...state.selectedEpisodeList, episode],
    })),

  removeEpisode: (episodeId):void =>
    set(state => ({
      selectedEpisodeList: state.selectedEpisodeList.filter(
        episode => episode.id !== episodeId,
      ),
    })),
}));
