import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdChevronRight,
  MdKeyboardArrowDown,
  MdAddBox,
  MdIndeterminateCheckBox,
  MdFolder,
  MdFolderOpen,
  MdInsertDriveFile,
} from "react-icons/md";

const nodes = [
  {
    value: "Sites",
    label: "Sites",
    children: [
      {
        value: "Alice Mulga",
        label: "Alic Mulga",
        children: [
          {
            value: "Plots_Alice_Mulga",
            label: "Plots",
            children: [
              {
                value: "Alice Mulga_Asm",
                label: "Asm",
              },
              {
                value: "Alice Mulga_Asn",
                label: "Asn",
              },
              {
                value: "Alice Mulga_Callistris",
                label: "Callistris",
              },
              {
                value: "Alice Mulga_Core1ha",
                label: "Core1ha",
              },
            ],
          },
        ],
      },
      {
        value: "Boya",
        label: "Boya",
        children: [
          {
            value: "Plots_Boya",
            label: "Plots",
            children: [
              {
                value: "Boya_Floodplain",
                label: "Floodplain",
              },
              {
                value: "Boya_Gimlet",
                label: "Gimlet",
              },
              {
                value: "Boya_Nadir",
                label: "Nadir",
              },
              {
                value: "Boya_Hummock_oblique",
                label: "Hummock_oblique",
              },
            ],
          },
        ],
      },
      {
        value: "Cowbay",
        label: "Cowbay",
        children: [
          {
            value: "Plots_Cowbay",
            label: "Plots",
            children: [
              {
                value: "Cowbay_Redgum",
                label: "Redgum",
              },
              {
                value: "Cowbay_Tte",
                label: "Tte",
              },
              {
                value: "Cowbay_Tussock_oblique",
                label: "Tussock_oblique",
              },
              {
                value: "Cowbay_Vivotech_overstorey",
                label: "Vivotech_overstorey",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: "Image_Types",
    label: "Images Types",
    children: [
      {
        value: "Ancillary",
        label: "Ancillary",
        children: [
          {
            value: "Ancillary_Fauna",
            label: "Fauna",
          },
          {
            value: "Ancillary_Flora",
            label: "Flora",
          },
          {
            value: "Ancillary_Fungi",
            label: "Fungi",
          },
          {
            value: "Ancillary_General",
            label: "General",
          },
          {
            value: "Ancillary_NA",
            label: "NA",
          },
          {
            value: "Ancillary_Samford_camera_trap",
            label: "Samford Camera Trap",
          },
        ],
      },
      {
        value: "Leaf Area Index",
        label: "Leaf Area Index",
      },
      {
        value: "Panorama",
        label: "Panorama",
      },
      {
        value: "Phenocam",
        label: "Phenocam",
      },
      {
        value: "Phtopoint",
        label: "Photopoint",
      },
    ],
  },
  {
    value: "Site Visit Date",
    label: "Site Visit Date",
    children: [
      {
        value: "20120217",
        label: "2012-02-17",
      },
      {
        value: "20120402",
        label: "2012-04-02",
      },
      {
        value: "20120517",
        label: "2012-05-17",
      },
      {
        value: "20120615",
        label: "2012-06-15",
      },
      {
        value: "20121026",
        label: "2012-10-26",
      },
    ],
  },
];

const WidgetTree = () => {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const handleOnCheck = (value) => {
    console.log("checked: ", value);
    console.log("expanded: ", expanded);
    setChecked(value);
  };

  const icons = {
    check: <MdCheckBox className="rct-icon rct-icon-check" />,
    uncheck: <MdCheckBoxOutlineBlank className="rct-icon rct-icon-uncheck" />,
    halfCheck: (
      <MdIndeterminateCheckBox className="rct-icon rct-icon-half-check" />
    ),
    expandClose: <MdChevronRight className="rct-icon rct-icon-expand-close" />,
    expandOpen: (
      <MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />
    ),
    expandAll: <MdAddBox className="rct-icon rct-icon-expand-all" />,
    collapseAll: (
      <MdIndeterminateCheckBox className="rct-icon rct-icon-collapse-all" />
    ),
    parentClose: <MdFolder className="rct-icon rct-icon-parent-close" />,
    parentOpen: <MdFolderOpen className="rct-icon rct-icon-parent-open" />,
    leaf: <MdInsertDriveFile className="rct-icon rct-icon-leaf-close" />,
  };

  return (
    <div>
      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => handleOnCheck(checked)}
        onExpand={(expanded) => setExpanded(expanded)}
        icons={icons}
      />
    </div>
  );
};
export default WidgetTree;
