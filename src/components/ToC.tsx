export interface ToCItem {
  value: string;
  data: { id: string };
  children: ToCItem[];
  depth: number;
}
function Anchor({ item, className }: { item: ToCItem; className: string }) {
  return (
    <>
      <a href={`#${item.data.id}`} className={`toc-list ${className}`}>
        {item.value}
      </a>
      {className === 'heading' ? <hr className="toc-list separator" /> : null}
    </>
  );
}

function renderItems(items: ToCItem[]) {
  return items.map((item) => (
    <li key={item.data.id}>
      <Anchor item={item} className={item.depth === 2 ? 'heading' : 'item'} />
      {item.children && renderItems(item.children)}
    </li>
  ));
}

function ToC({ anchors }: { anchors: ToCItem[] }) {
  return <ul className="toc-list">{renderItems(anchors)}</ul>;
}

export default ToC;
