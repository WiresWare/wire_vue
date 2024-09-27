import DataKeys from '@/constants/DataKeys';
import LocalKeys from '@/constants/LocalKeys';
import { IWireMiddleware } from 'wire-ts';

class CountMiddleware implements IWireMiddleware {
  onAdd(_: any): void { console.log('> CountMiddleware -> onAdd', _); }
  onSend(...rest: any[]):  void { console.log('> CountMiddleware -> onSend', rest); }
  onRemove(...rest: any[]):  void { console.log('> CountMiddleware -> onRemove', rest); }
  onData(key: string, prevValue?: any | null, nextValue?: any | null): void {
    console.log('> CountMiddleware -> onData: key =', key);
    if (key === DataKeys.COUNT) {
      localStorage.setItem(LocalKeys.COUNT, nextValue);
    }
  }
}

export default CountMiddleware;
