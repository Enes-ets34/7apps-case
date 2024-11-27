import {ToastEnum} from '@/app/store/toast/toastStore.types';

export const getToastItemStyle = (type: ToastEnum) => {
  const baseStyle =
    'flex flex-row absolute items-center z-9999 p-4 text-inputPlaceholder bg-white rounded-sm shadow-md border-l-4 transition-all duration-300 ease-in-out';

  const typeStyles: Record<ToastEnum, string> = {
    [ToastEnum.SUCCESS]: 'border-green-500 bg-green-200',
    [ToastEnum.WARNING]: 'border-yellow-500 bg-yellow-200',
    [ToastEnum.ERROR]: 'border-red-500 bg-red-200',
    [ToastEnum.INFO]: 'border-blue-500 bg-blue-200',
  };

  return `${baseStyle} ${typeStyles[type]}`;
};
export const toastStyles = {
  wrapper:
    'fixed top-24 px-4 space-y-4 z-[199] w-full flex flex-row justify-center',
  content: 'flex flex-row justify-between flex-1 items-center',
  close:
    'p-2 flex flex-row justify-center items-center rounded cursor-pointer bg-grayLight',
};
