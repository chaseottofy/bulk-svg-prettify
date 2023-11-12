import {
  ElementNode,
  RootNode,
  Node,
} from 'svg-parser';

import { removeIfEmpty } from '../utils/svg-utils';

export default function treeToSvg(tree: RootNode): string {
  let indent = 0;

  function createSvgElement(node: Node, isRoot = true): string {
    if (isRoot) {
      const {
        children,
      } = node as unknown as RootNode;
      return children.map((child) => createSvgElement(child, false)).join('');
    }

    if (node.type === 'text') {
      return (node as unknown as { value: string; }).value;
    }

    const {
      children,
      tagName,
    } = node as ElementNode;

    const properties = (node as ElementNode).properties || {};

    indent += 1;

    if (removeIfEmpty.has(tagName as string) && children.length === 0) {
      indent = Math.max(0, indent - 1);
      return '';
    }

    const propsKeys = Object.keys(properties);
    const propsValues = Object.values(properties);
    const attributes = propsKeys.map((key, index) => {
      if (propsValues[index] === '') {
        return '';
      }
      return `\n${'\t'.repeat(indent)}${key}="${properties[key]}"`;
    }).join('');

    const [childCount, attributeCount]: number[] = [
      children.length,
      attributes.length,
    ];

    const grandchildren = children.map((child) => createSvgElement(child as ElementNode, false)).join('');
    indent = Math.max(0, indent - 1);

    const indentString = '\t'.repeat(indent);
    if (tagName === 'svg') {
      return `<${tagName}${attributes}\n>${grandchildren}`;
    }

    if (attributeCount === 0) {
      return `\n${indentString}<${tagName}>${grandchildren}\n${indentString}</${tagName}>`;
    }

    const gcOpening = `\n${indentString}<${tagName}${attributes}${childCount === 0 ? '' : '>'}`;
    const gcChildren = `${grandchildren}\n${indentString}`;
    const gcClosing = childCount === 0 ? '/>' : `</${tagName}>`;
    return `${gcOpening}${gcChildren}${gcClosing}`;
  }

  const res: string = createSvgElement(tree as unknown as Node, true);
  return `${res}\n</svg>`;
}
