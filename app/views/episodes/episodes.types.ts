export interface EpisodesProps {
  episodesData: EpisodeData[];
  inputKey?: string;
  setInputKey: (key: string) => void;
  onEndReached: () => void;
  hasNextPage?: boolean;
}
export interface EpisodeData {
  id?: number;
  title?: string;
  air_date?: string;
}
