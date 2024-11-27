'use client';
import React, {useEffect, useRef} from 'react';
import {getToastItemStyle, toastStyles} from './toast.styles';
import {useToastStore} from '@/app/store/toast/toastStore';
import {ToastProps} from '@/app/store/toast/toastStore.types';
import {FontAwesome} from '@expo/vector-icons';
import {Animated, Pressable, Text, View} from 'react-native';

const Toast: React.FC = () => {
  const {toasts, removeToast} = useToastStore();

  return (
    <View className={toastStyles.wrapper}>
      {toasts.map((toast: ToastProps) => (
        <AnimatedToast
          key={toast.id}
          toast={toast}
          onRemove={() => removeToast(toast.id)}
        />
      ))}
    </View>
  );
};

const AnimatedToast: React.FC<{
  toast: ToastProps;
  onRemove: () => void;
}> = ({toast, onRemove}) => {
  const translateX = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(translateX, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => onRemove());
    }, 3000);

    return () => clearTimeout(timer);
  }, [translateX, onRemove]);

  return (
    <Animated.View
      className={getToastItemStyle(toast.type)}
      style={[{transform: [{translateX}]}]}>
      <Pressable onPress={onRemove} style={{flex: 1}}>
        <View className={toastStyles.content}>
          <Text className="font-medium">{toast.message}</Text>
          <Pressable onPress={onRemove} className={toastStyles.close}>
            <FontAwesome name="close" style={{width: 12, height: 12}} />
          </Pressable>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default Toast;
