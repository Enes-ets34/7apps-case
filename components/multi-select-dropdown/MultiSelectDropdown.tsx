import React, {useState, useEffect, useMemo} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import {FontAwesome} from '@expo/vector-icons';
import {
  MultiselectDropdownProps,
  RenderItem,
} from './multiSelectDropdown.types';
import {styles} from './multiSelectDropdown.styles';
import {SelectedItem} from '@/app/store/types';

const MultiselectDropdown = ({
  data,
  selectedItems,
  onSelectItem,
  onDeselectItem,
  inputValue,
  setInputValue,
  placeholder,
  onEndReached,
}: MultiselectDropdownProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (inputValue.length > 3) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [inputValue]);

  const renderedItemList = useMemo(() => {
    return data?.map(item => ({
      key: item['id']?.toString() ?? '',
      item,
    }));
  }, [data]);
  const renderItemContent = (item: RenderItem): JSX.Element => (
    <View className="p-2">
      <Text className="text-xs">{item.title}</Text>
      <Text className="text-xs">{item.description}</Text>
    </View>
  );

  const renderItem = ({item}: {item: {item: SelectedItem}}): JSX.Element => (
    <View key={item.item['id']} className="">
      <TouchableOpacity
        onPress={() =>
          selectedItems.some(
            selectedItem => selectedItem['id'] === item.item['id'],
          )
            ? onDeselectItem(item.item)
            : onSelectItem(item.item)
        }
        className="flex flex-row items-center px-2 gap-2">
        <CheckBox
          value={selectedItems.some(
            selectedItem => selectedItem['id'] === item.item['id'],
          )}
          style={{width: 12, height: 12}}
        />
        <View className="flex flex-row items-center gap-2">
          {!!item?.item?.image && (
            <Image
              src={item.item['image']}
              className="w-8 h-8 object-contain rounded-borderRadiusL"
            />
          )}
          <View className="flex">{renderItemContent(item.item)}</View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="relative">
      <Pressable
        onPress={() => setOpen(prev => !prev)}
        className={styles.itemWrapper}>
        <View className="flex flex-row w-full gap-2 flex-wrap">
          {selectedItems.map(item => (
            <TouchableOpacity
              onPress={() => onDeselectItem(item)}
              key={item['id']}
              className={styles.itemContainer}>
              <Text className="text-xs">{item['title']}</Text>
              <View>
                <Text className={styles.deleteButton}>X</Text>
              </View>
            </TouchableOpacity>
          ))}

          <TextInput
            value={inputValue}
            placeholder={placeholder}
            onChangeText={setInputValue}
            className={styles.input}
          />
        </View>
        <FontAwesome name="chevron-down" className="absolute right-3 top-4" />
      </Pressable>

      {open &&
        (renderedItemList && renderedItemList?.length > 0 ? (
          <FlatList
            data={renderedItemList}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.9}
            className={styles.flatList}
          />
        ) : (
          <Text className={styles.flatList}> there is no data</Text>
        ))}
    </View>
  );
};

export default React.memo(MultiselectDropdown);
