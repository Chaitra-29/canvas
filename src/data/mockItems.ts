export interface CanvasItem {
  id: string;
  title: string;
  type: 'page' | 'layer' | 'component';
  color: string;
  description: string;
  tags: string[];
  width: number;
  height: number;
  numberOfComponent: number;
}

export const MOCK_ITEMS: CanvasItem[] = [
  {
    id: '1',
    title: 'Button Component',
    type: 'component',
    color: '#8b5cf6',
    description: 'Analytics dashboard with charts, KPI cards, and data tables.',
    tags: ['button'],
    width: 1280,
    height: 800,
    numberOfComponent: 0,
  },
  {
    id: '2',
    title: 'TextBox Component',
    type: 'layer',
    color: '#8b5cf6',
    description: 'Analytics dashboard with charts, KPI cards, and data tables.',
    tags: ['textbox'],
    width: 1280,
    height: 800,
    numberOfComponent: 0,
  },
];
