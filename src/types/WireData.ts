export type WireDataRebuildWhenFunction = (value: any) => boolean;

export interface IWireDataProps {
  for: string;
  when?: any | WireDataRebuildWhenFunction;
  isStatic?: boolean;
  emitOnMounted?: boolean;
}
