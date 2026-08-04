import React from 'react';

export default function DesktopHeader({ onExport, onImport }) {
  return (
    <div style={{
      background: '#2C1A0A',
      borderBottom: '3px solid #C9A84C',
      padding: '12px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(245,237,216,0.3)', fontFamily: "'Jost', sans-serif"
      }}>
        by OneView Studio · Simple Tools. Big Clarity.
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={onExport} style={hBtn}>Export</button>
        <label style={{ ...hBtn, cursor: 'pointer' }}>
          Import
          <input type="file" accept=".json" onChange={onImport} style={{ display: 'none' }} />
        </label>
      </div>
    </div>
  );
}

const hBtn = {
  background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
  borderRadius: 20, padding: '5px 14px', fontSize: '0.67rem',
  color: 'rgba(245,237,216,0.6)', letterSpacing: '0.06em', cursor: 'pointer',
  display: 'inline-flex', alignItems: 'center', fontFamily: "'Jost', sans-serif",
};
