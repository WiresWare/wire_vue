export type RebuildWhen = (value: any) => boolean;

export interface IWireDataProps {
  for: string;
  when?: any | RebuildWhen;
  isStatic?: boolean;
}
