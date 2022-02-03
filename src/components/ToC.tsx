export interface ToCItem {
  value: string;
  data: { id: string };
  children: ToCItem[];
  depth: number;
}

function renderItems(items: ToCItem[]) {
  return (
    <ul style={{ marginInlineStart: '1rem' }}>
      {items.map((item) => (
        <li key={item.data.id}>
          <a href={`#${item.data.id}`}>{item.value}</a>
          {item.children && renderItems(item.children)}
        </li>
      ))}
    </ul>
  );
}

function ToC({ anchors }: { anchors: ToCItem[] }) {
  return (
    <aside>
      <nav>{renderItems(anchors)}</nav>
    </aside>
  );
}

export default ToC;
