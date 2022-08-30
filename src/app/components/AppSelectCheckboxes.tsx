import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import debounce from "lodash/debounce";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface Props {
  items: string[];
  checked?: string[];
  onChange: (items: string[]) => void;
  title: string;
  placeholder: string;
}

export default function AppSelectCheckboxes({
  items,
  checked,
  onChange,
  title,
  placeholder,
}: Props) {
  const [checkedItems, setCheckedItems] = useState(checked || []);

  function handleChecked(value: string) {
    const currentIndex = checkedItems.findIndex((item) => item === value);
    let newChecked: string[] = [];
    if (currentIndex === -1) newChecked = [...checkedItems, value];
    else newChecked = checkedItems.filter((item) => item !== value);
    setCheckedItems(newChecked);
    onChange(newChecked);
    console.log(newChecked);
  }
  function handleInputChange(event: any, value: any) {
    // // console.log(checkedItems);
    // console.log(value);
    // const currentIndex = checkedItems.findIndex((item) => item === value);
    // let newChecked: string[] = [];
    // if (currentIndex === -1) newChecked = [...checkedItems, value];
    // else newChecked = checkedItems.filter((item) => item !== value);
    // setCheckedItems(newChecked);
    // console.log(value);
    // console.log(newChecked);
    setCheckedItems(value);
    onChange(value);
  }

  const filterOptions = createFilterOptions({
    matchFrom: "any",
    limit: 10,
  });

  return (
    <Autocomplete
      // filterOptions={filterOptions}
      loading={items.length === 0}
      multiple
      options={items}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      // getOptionLabel={(option) => {
      //   return isString(option) ? option : '';
      // }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            // checked={checkedItems.indexOf(option) !== -1}
          />
          {option}
        </li>
      )}
      // onChange={(event, value) => handleInputChange(event, value)}
      onChange={debounce(
        (event, value) => handleInputChange(event, value),
        1000
      )}
      renderInput={(params) => (
        <TextField {...params} label={title} placeholder={placeholder} />
      )}
    />
  );
}

// export default function AppSelectCheckboxes() {
//   return (
//     <Autocomplete
//       multiple
//       id="checkboxes-tags-demo"
//       options={top100Films}
//       disableCloseOnSelect
//       getOptionLabel={(option) => option.title}
//       renderOption={(props, option, { selected }) => (
//         <li {...props}>
//           <Checkbox
//             icon={icon}
//             checkedIcon={checkedIcon}
//             style={{ marginRight: 8 }}
//             checked={selected}
//           />
//           {option.title}
//         </li>
//       )}
//       // style={{ width: 500 }}
//       renderInput={(params) => (
//         <TextField {...params} label="Checkboxes" placeholder="Favorites" />
//       )}
//     />
//   );
// }
