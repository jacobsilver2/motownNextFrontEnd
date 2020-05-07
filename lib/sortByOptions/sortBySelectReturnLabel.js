function getSelectLabel(sortBySelectItems, sortBy) {
  const filteredSelectItem = sortBySelectItems.filter(
    (item) => item.value === sortBy
  );
  return filteredSelectItem[0].label;
}

export default getSelectLabel;
