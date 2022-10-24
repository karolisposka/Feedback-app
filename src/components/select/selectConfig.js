export const customStyles = {
    option: (provided, state) => ({
      ...provided,
  
      color: state.isSelected ? "#AD1FEA" : "#647196",
      transition: "0.3s ease-in-out",
      fontSize: 13,
      "&:not(:last-child)": {
        borderBottom: "0.5px solid #0000001a",
        boxShadow: "none",
      },
      "&:hover": {
        color: "#AD1FEA",
      },
      background: "transparent",
      padding: 5,
    }),
    control: () => ({
      background: "trasparent",
      display: "flex",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      background: "#fffff",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0)",
      transition: "250ms",
    }),
    placehoder: (provided, state) => ({
      ...provided,
      color: "#ffffff",
      background: "#ffffff",
    }),
  
    singleValue: (provided, state) => ({
      ...provided,
      color: "#ffffff",
      width: "100%",
    }),
    menu: (provided, state) => ({
      ...provided,
      background: "#ffffff",
      width: 150,
    }),
  };

//options

export const optionsSort = [
    {
      value: "most",
      label: "Most Upvotes",
    },
    {
      value: "least",
      label: "Least Upvotes",
    },
    {
      value: "mostCom",
      label: "Most Comments",
    },
    {
      value: "leastCom",
      label: "Least Comments",
    },
  ];
  