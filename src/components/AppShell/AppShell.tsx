import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import { ListPanel } from '../ListPanel/ListPanel';
import { CanvasPanel } from '../CanvasPanel/CanvasPanel';
import styles from './AppShell.module.css';

export function AppShell() {
  return (
    <div className={styles.shell}>
      <PanelGroup direction="horizontal" className={styles.panelGroup}>
        <Panel
          defaultSize={22}
          minSize={15}
          maxSize={40}
          className={styles.listPanelWrapper}
        >
          <ListPanel />
        </Panel>

        <PanelResizeHandle className={styles.resizeHandle}>
          <div className={styles.resizeBar} />
        </PanelResizeHandle>

        <Panel className={styles.canvasPanelWrapper}>
          <CanvasPanel />
        </Panel>
      </PanelGroup>
    </div>
  );
}
