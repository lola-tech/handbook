export interface ToCItem {
  value: string;
  data: { id: string };
  children: ToCItem[];
  depth: number;
}
function Anchor({ item, className }: { item: ToCItem; className: string }) {
  if (className !== 'subtitle') {
    return (
      <>
        <a href={`#${item.data.id}`} className={`toc-list ${className}`}>
          {item.value}
        </a>
        {className === 'heading' ? <hr className="toc-list separator" /> : null}
      </>
    );
  }
  return <></>;
}

function renderItems(items: ToCItem[]) {
  const getElementType = (item: ToCItem) => {
    let textElement;
    if (item.depth === 2) {
      textElement = 'heading';
    } else if (item.depth === 3) {
      textElement = 'item';
    } else {
      textElement = 'subtitle';
    }
    return textElement;
  };
  return items.map((item) => (
    <li key={item.data.id}>
      <Anchor item={item} className={getElementType(item)} />
      {item.children && renderItems(item.children)}
    </li>
  ));
}

function ToC({ anchors }: { anchors: ToCItem[] }) {
  return <ul className="toc-list">{renderItems(anchors)}</ul>;
}

export default ToC;
