import {SelectedItem} from '@/app/store/types';

export interface MultiselectDropdownProps {
  data: SelectedItem[];
  selectedItems: SelectedItem[];
  onSelectItem: (item: SelectedItem) => void;
  onDeselectItem: (item: SelectedItem) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  placeholder: string;
  hasNextPage: boolean;
  onEndReached: () => void;
}
export interface RenderItem {
  title?: string;
  description?: string;
}
