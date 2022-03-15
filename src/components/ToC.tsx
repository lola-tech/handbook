export interface ToCItem {
  value: string;
  data: { id: string };
  children: ToCItem[];
  depth: number;
}
function Anchor({
  item,
  isListHeading,
}: {
  item: ToCItem;
  isListHeading: boolean;
}) {
  return isListHeading ? (
    <>
      <a
        href={`#${item.data.id}`}
        style={{
          fontSize: '25px',
          textDecoration: 'none',
          color: '#0E1F41',
        }}
      >
        {item.value}
      </a>
      <hr
        style={{
          margin: '20px 0 20px 0',
        }}
      />
    </>
  ) : (
    <a
      href={`#${item.data.id}`}
      style={{
        fontSize: '16px',
        lineHeight: '32px',
        color: 'black',
      }}
    >
      {item.value}
    </a>
  );
}

function renderItems(items: ToCItem[]) {
  return items.map((item) => (
    <li
      key={item.data.id}
      style={{
        listStyle: 'none',
        width: '350px',
      }}
    >
      <Anchor item={item} isListHeading={item.depth === 2} />
      {item.children && renderItems(item.children)}
    </li>
  ));
}

function ToC({ anchors }: { anchors: ToCItem[] }) {
  return (
    <ul
      style={{
        display: 'flex',
        maxWidth: '1160px',
        flexWrap: 'wrap',
        margin: '0 auto',
        gridRowGap: '60px',
        gridColumnGap: '50px',
      }}
    >
      {renderItems(anchors)}
    </ul>
  );
}

export default ToC;
