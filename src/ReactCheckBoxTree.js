import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const ReactCheckBoxTree = () => {
  const nodes = [
    {
      value: "mars",
      label: "Mars",
      children: [
        {
          value: "phobos",
          label: "Phobos",
        },
        {
          value: "deimos",
          label: "Deimos",
        },
      ],
    },
  ];

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  return (
    <CheckboxTree
      nodes={nodes}
      checked={checked}
      expanded={expanded}
      onCheck={(checked) => setChecked(checked)}
      onExpand={(expanded) => setExpanded(expanded)}
    />
  );
};

export default ReactCheckBoxTree;
