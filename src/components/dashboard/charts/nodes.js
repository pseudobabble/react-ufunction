import {Group} from "@vx/group";
import React from "react";

export const Node = ({ node }) => {
  const isRoot = node.depth === 0;
  const isParent = !!node.subgoals;
  const bg = '#306c90';
  const citrus = '#ddf163';
  const white = '#ffffff';
  const complete = '#ddf163';
  const incomplete = '#dc63f1';
  const status = node.data.complete && isParent ? complete : incomplete;

  if (isRoot) return <RootNode node={node} />;

  return (
    <Group top={node.y} left={node.x}>
      {node.depth !== 0 && (
        <circle
          r={12}
          fill={bg}
          stroke={isParent ? white : citrus}
          onClick={() => {
            alert(`clicked: ${JSON.stringify(node.data.title)}`); // todo show sidebar with info
          }}
        />
      )}
      <text
        dy={'.33em'}
        fontSize={9}
        fontFamily="Arial"
        textAnchor={'top'}
        style={{ pointerEvents: 'none' }}
        fill={status}
      >
        {node.data.title}
      </text>
    </Group>
  );
}

export const RootNode = ({ node }) => {
  const width = 40;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const complete = '#ddf163';
  const incomplete = '#dc63f1';
  const status = node.data.complete ? complete : incomplete;

  return (
    <Group top={node.y} left={node.x}>
      <rect width={width} height={height} y={centerY} x={centerX} fill="url('#top')" />
      <text
        dy={'.33em'}
        fontSize={9}
        fontFamily="Arial"
        textAnchor={'middle'}
        style={{ pointerEvents: 'none' }}
        fill={status}
      >
        {/*todo: change me */}
        {node.data.title}
      </text>
    </Group>
  );
}

