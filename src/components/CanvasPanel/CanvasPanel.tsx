import { useEffect, useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import styles from './CanvasPanel.module.css';

const TYPE_LABELS = {
  page: 'Page',
  layer: 'Layer',
  component: 'Component',
} as const;

export function CanvasPanel() {
  const selectedItem = useAppStore((s) => s.selectedItem);
  const [ number, setNumber] = useState(selectedItem?.numberOfComponent || 0);

  useEffect(() => {
    console.log('Selected item numberOfComponent changed:', selectedItem?.numberOfComponent);
    setNumber(selectedItem?.numberOfComponent || 0);
  },[selectedItem]);

  function getComponentPreview(item: typeof selectedItem) {
    switch (item?.type) {
      case 'component':
        return Array.from({ length: number }, (_, i) => (
          <div key={i} className={styles.typeBadge}>{item.title}</div>
        ));
    }
  }

  if (!selectedItem) {
    return (
      <main className={styles.panel}>
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🖼️</span>
          <p>Select an item from the list to preview it</p>
        </div>
      </main>
    );
  }

  const aspectRatio = selectedItem.width / selectedItem.height;
  const previewWidth = Math.min(selectedItem.width, 640);
  const previewHeight = previewWidth / aspectRatio;

  return (
    <main className={styles.panel}>
      <header className={styles.topBar}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbRoot}>Canvas</span>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{selectedItem.title}</span>
        </div>
        <div className={styles.dimensions}>
          {selectedItem.width} × {selectedItem.height}
        </div>
      </header>

      <div className={styles.canvasArea}>
        <div
          className={styles.frame}
          style={{
            width: previewWidth,
            height: previewHeight,
            borderColor: selectedItem.color,
          }}
        > 
          {getComponentPreview(selectedItem)}
        </div>
      </div>

      <div className={styles.detailDrawer}>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Properties</h3>
          <dl className={styles.propGrid}>
            <dt>Type</dt>
            <dd>
              <span
                className={styles.typePill}
                style={{ backgroundColor: selectedItem.color + '22', color: selectedItem.color }}
              >
                {TYPE_LABELS[selectedItem.type]}
              </span>
            </dd>
            <dt>Width</dt>
            <dd>{selectedItem.width}px</dd>
            <dt>Height</dt>
            <dd>{selectedItem.height}px</dd>
            <dt>Aspect ratio</dt>
            <dd>{(selectedItem.width / selectedItem.height).toFixed(2)}</dd>
          </dl>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Description</h3>
          <p className={styles.description}>{selectedItem.description}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Tags</h3>
          <div className={styles.tagList}>
            {selectedItem.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
