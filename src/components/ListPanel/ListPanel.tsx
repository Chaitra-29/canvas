import { useAppStore } from '../../store/useAppStore';
import type { CanvasItem } from '../../data/mockItems';
import styles from './ListPanel.module.css';
import { useEffect, useState } from 'react';

const TYPE_ICONS: Record<CanvasItem['type'], string> = {
  page: '📄',
  layer: '🔲',
  component: '🧩',
};

export function ListPanel() {
  const items = useAppStore((s) => s.items);
  const selectedItem = useAppStore((s) => s.selectedItem);
  const setSelectedItem = useAppStore((s) => s.setSelectedItem);
  const [number, setNumber] = useState(selectedItem?.numberOfComponent || 0);

  useEffect(() => {
    console.log('Selected item changed:', selectedItem?.numberOfComponent);
    
  }, [number, selectedItem]);
  
  return (
    <aside className={styles.panel}>
      <header className={styles.header}>
        <span className={styles.headerIcon}>🎨</span>
        <h2 className={styles.headerTitle}>Layers</h2>
        <span className={styles.count}>{items.length}</span>
      </header>

      <ul className={styles.list} role="listbox" aria-label="Canvas items">
        {items.map((item) => (
          <li
            key={item.id}
            className={`${styles.item} ${selectedItem?.id === item.id ? styles.itemSelected : ''}`}
            role="option"
            aria-selected={selectedItem?.id === item.id}
            onClick={() => { 
                item = {
                  ...item,
                  numberOfComponent: number+1,
                } 
                setSelectedItem(item); 
                setNumber(number+1);
              }}
          >
            <div
              className={`${styles.item} ${item?.type === 'component' ? styles.typeBadge : styles.textBoxBadge}`}
              aria-label={`Select ${item.title} (${item.type})`}
            >
              {item.title}
            </div>

            {/* <span
              className={styles.colorDot}
              style={{ backgroundColor: item.color }}
            />
            <span className={styles.typeIcon}>{TYPE_ICONS[item.type]}</span>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.typeBadge}>{item.type}</span> */}
          </li>
        ))}
      </ul>
    </aside>
  );
}