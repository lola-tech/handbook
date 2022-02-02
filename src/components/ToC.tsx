import { List, ListItem, Link } from '@chakra-ui/react';

export interface ToCItem {
  value: string;
  data: { id: string };
  children: ToCItem[];
  depth: number;
}

function renderItems(items: ToCItem[]) {
  return (
    <List ms={4}>
      {items.map((item) => (
        <ListItem key={item.data.id}>
          <Link href={`#${item.data.id}`}>{item.value}</Link>
          {item.children && renderItems(item.children)}
        </ListItem>
      ))}
    </List>
  );
}

function ToC({ anchors }: { anchors: ToCItem[] }) {
  return <nav>{renderItems(anchors)}</nav>;
}

export default ToC;
