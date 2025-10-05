import DataKeys from '@/constants/DataKeys';
import Signals from '@/constants/Signals';
import { Wire } from 'wire-ts';

const scope = {};

export default {
  register: () => {
    Wire.add(scope, Signals.RESET, () => {
      Wire.data(DataKeys.COUNT, () => undefined);
    });
    Wire.add(scope, Signals.INCREASE, () => {
      console.log('> CountController -> Signals.INCREASE');
      Wire.data(DataKeys.COUNT, (value: number) => {
        const result = (value ?? 0) + 1;
        console.log('> \t result:', result);
        return result;
      });
    });
  },
  remove: () => {
    Wire.purge(true);
  },
};
