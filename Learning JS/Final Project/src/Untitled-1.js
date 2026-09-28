import { useMemo } from 'react';

function ExpensiveList({ items, filter }) {
  const filteredItems = useMemo(() => {
    console.log('Фільтрація...');
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  return <ul>{filteredItems.map(i => <li key={i}>{i}</li>)}</ul>;
}
