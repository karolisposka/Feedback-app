export const newFeedbackCategories = {
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
      background: "#F2F2F2",
      padding: 5,
    }),
    control: (provided, state) => ({
      ...provided,
      outline: state.isSelected ? '1px solid blue' : 'none',
      background: "#F2F2F2",
      border:'none',
      display: "flex",
      padding:6,
      borderRadius:5,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      background: "#F2F2F2",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0)",
      transition: "250ms",
    }),
    placehoder: (provided, state) => ({
      ...provided,
      color: "#ffffff",
      background: "#F2F2F2",
    }),
  
    singleValue: (provided, state) => ({
      ...provided,
      color: "#3A4374",
      width: "100%",
    }),
    menu: (provided, state) => ({
      ...provided,
      background: "#F2F2F2",
      width: 150,
    }),
  };

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
}

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
  

export const Categories = [
  {
     value: "all",
      label: "all",
    },
    {
      value: "UI",
      label: "UI",
    },
    {
      value: "UX",
      label: "UX",
    },
    {
      value: "Enchancment",
      label: "Enchancment",
    },
    {
      value: "Bug",
      label: "Bug",
    },
    {
      value: "Feature",
      label: "Feature",
    },
]

export const status = [
  {
    value: "planned",
     label: "Planned",
   },
   {
     value: "in-progress",
     label: "In-Prgoress",
   },
   {
     value: "live",
     label: "Live",
   }
]