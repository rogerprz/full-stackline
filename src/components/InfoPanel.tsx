import React from 'react';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

const InfoPanel: React.FC = () => {
  const data = useSelector((state: RootState) => state.stackLineData.data);

  return (
    <section
      style={{ backgroundColor: 'white', display: 'flex', padding: '1rem', flexDirection: 'column', color: 'black' }}
    >
      <img src={data.image} alt="Product" style={{ height: 'auto', width: '70%', margin: '0 auto' }} />
      <h3>{data.title}</h3>
      <div style={{ color: 'darkgray' }}>{data.subtitle}</div>
      {data.tags && <Tags tags={data.tags} />}
    </section>
  );

  function Tags({ tags }: { tags: string[] }) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, paddingTop: 8, justifyContent: 'space-between' }}>
        {tags.map((tag) => (
          <button
            style={{
              padding: 8,
              paddingInline: 14,
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid darkgray',
              borderRadius: 5
            }}
            key={tag}
          >
            {tag}
          </button>
        ))}
      </div>
    );
  }
};

export default InfoPanel;
