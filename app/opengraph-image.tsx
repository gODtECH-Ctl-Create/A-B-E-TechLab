import { ImageResponse } from 'next/og';

export const alt = 'ABE TechLab | Product, Research, Education & Technology';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#f5f5f2',
          color: '#11110f',
          fontFamily: 'Arial',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 34, fontWeight: 700 }}>
          <div style={{ background: '#11110f', color: '#b7ff3c', padding: '14px 18px', borderRadius: 14 }}>ABE</div>
          <div>TechLab</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 980 }}>
          <div style={{ fontSize: 72, lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.05em' }}>
            We turn ideas into products that work.
          </div>
          <div style={{ marginTop: 26, fontSize: 26, lineHeight: 1.35, color: '#686863' }}>
            Product research · Strategy · Design · Development · Education technology
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#686863' }}>
          <span>abe-techlab</span>
          <span>Product · Research · Technology</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
