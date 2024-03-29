import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router'

import { DropDown, DropDownItem, InputContainer } from './styles/Search';
import { Search as IcSearch } from './Icons';

export const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Search() {
  const router = useRouter();
  const [findItems, { loading, data }] = useLazyQuery(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache',
  });
  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(findItems, 350);
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
    getComboboxProps
  } = useCombobox({
    items,
    onInputValueChange() {
      findItemsButChill({ variables: { searchTerm: inputValue }});
    },
    onSelectedItemChange({ selectedItem }: any) {
      router.push({ pathname: `/product/${selectedItem.id}` });
    },
    itemToString: (item: any) => item?.name || '',
  });

  return (
    <InputContainer {...getComboboxProps()}>
      <IcSearch width={20} height={20} />
      <input
        {...getInputProps({
          type: 'search',
          placeholder: 'Search for an amazing product',
          id: 'search'
        })}
      />
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              {...getItemProps({ item, index })}
              key={item.id}
              highlighted={index === highlightedIndex}
            >
              <img
                src={item.photo.image.publicUrlTransformed}
                alt={item.name}
                width="50"
              />
              {item.name}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
        )}
      </DropDown>
    </InputContainer>
  );
}
