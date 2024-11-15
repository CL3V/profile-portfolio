import React from "react";

export function SidebarHook() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [hideExplorer, setHideExplorer] = React.useState<boolean>(true);
  const [value, setValue] = React.useState(0);

  const handleShowContent = () => {
    setHideExplorer(!hideExplorer);
    setOpen(!open);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (
    index: number
  ): { id: string; "aria-controls": string } => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

  return {
    open,
    hideExplorer,
    handleShowContent,
    a11yProps,
    value,
    handleChange,
  };
}
