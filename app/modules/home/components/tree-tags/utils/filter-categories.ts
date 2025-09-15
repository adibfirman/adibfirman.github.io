type Args = {
  value: string;
  callback: (searchParams: URLSearchParams) => void;
};

function getAllCategories() {
  const { searchParams } = new URL(window.location.href);
  const getExistingParams = searchParams.getAll("categories");

  return { categories: getExistingParams, searchParams };
}

export function setCategoriesQueryParams({ value, callback }: Args) {
  const { categories, searchParams } = getAllCategories();
  const isValueThere = categories.includes(value);

  if (!isValueThere) {
    searchParams.append("categories", value);
  }

  callback(searchParams);
}

export function isCategorySelected(category: string) {
  const { categories } = getAllCategories();
  return categories.includes(category);
}
