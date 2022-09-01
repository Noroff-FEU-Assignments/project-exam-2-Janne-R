import { ReactSearchAutocomplete } from 'react-search-autocomplete'
/*const Search = (props) => {
  const onKeyUp = (event) => {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredHotels = props.searchList.filter((hotel) => {
      if (hotel.attributes.hotelName.toLowerCase().startsWith(searchValue)) {
        return true;
      }

      return false;
    });

    console.log(filteredHotels);
  }
  return (
    <>
      <Form>
        <Input onChange={onKeyUp} placeholder="Search hotels here..." />
        <SearchIcon size="1.5rem" />
      </Form>
    </>

  )
}

export default Search;*/

const SearchAutoComplete = () => {

  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }
  return (
    <div >
      <header >
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default SearchAutoComplete;