import React from 'react';

export default function Header({ onExport, onImport }) {
  return (
    <header style={{
      background: '#2C1A0A', textAlign: 'center',
      padding: '28px 16px 0', borderBottom: '1px solid #4A3520',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', gap: 8 }}>
        <button onClick={onExport} style={hdrBtn}>Export</button>
        <label style={{...hdrBtn, cursor:'pointer'}}>
          Import
          <input type="file" accept=".json" onChange={onImport} style={{display:'none'}} />
        </label>
      </div>
      <div style={{ color:'#C9A84C', fontSize:'0.75rem', letterSpacing:14, opacity:0.5, marginBottom:8 }}>✦ ✦ ✦</div>
      <h1 style={{
        fontFamily:"'Cormorant Garamond', serif", fontWeight:400,
        fontSize:'clamp(1.7rem, 6vw, 2.5rem)', color:'#F5EDD8', lineHeight:1.1, marginBottom:4
      }}>
        OneView <em style={{fontStyle:'italic', color:'#C9A84C', fontWeight:300}}>Bible Study</em>
      </h1>
      <p style={{
        fontSize:'0.6rem', letterSpacing:'0.28em', textTransform:'uppercase',
        color:'rgba(245,237,216,0.4)', paddingBottom:20
      }}>Your Word · Your Study · Every Day</p>
    </header>
  );
}

const hdrBtn = {
  background:'rgba(201,168,76,0.1)', border:'1px solid rgba(201,168,76,0.3)', borderRadius:20,
  padding:'5px 12px', fontSize:'0.67rem', color:'rgba(245,237,216,0.6)',
  letterSpacing:'0.06em', transition:'all 0.2s', display:'inline-block'
};
