export interface TOCItem {
  value: string;
  data: { id: string };
  children: TOCItem[];
}

function renderItems(items: TOCItem[]) {
  return (
    <ol>
      {items.map((item) => (
        <li key={item.data.id}>
          <a href={`#${item.data.id}`}>{item.value}</a>
          {item.children && renderItems(item.children)}
        </li>
      ))}
    </ol>
  );
}

function ToC({ anchors }: { anchors: TOCItem[] }) {
  return (
    <details>
      <summary>Table of Contents</summary>
      {renderItems(anchors)}
    </details>
  );
}

export default ToC;
