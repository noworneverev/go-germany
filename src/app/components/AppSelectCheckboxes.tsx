import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';
import debounce from 'lodash/debounce';
import { isString } from 'lodash';

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
    matchFrom: 'any',
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];
