export const GRID: Record<'small' | 'medium' | 'large', GridType> = {
  small: 's',
  medium: 'md',
  large: 'l',
};

export type GridType = 'l' | 'md' | 's';
export interface ColumnType {
  s: number;
  md: number;
  l: number;
}
