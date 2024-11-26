import {LoadingState} from './loadingStore.types';
import {create} from 'zustand';

export const useLoadingStore = create<LoadingState>(set => ({
  isLoading: false,
  setLoading: (value: boolean):void => set({isLoading: value}),
}));
