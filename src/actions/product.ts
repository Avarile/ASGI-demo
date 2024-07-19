import type { IProductItem } from 'src/types/product';

import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

// ----------------------------------------------------------------------

type ProductsData = {
  products: IProductItem[];
};
const temp: IProductItem[] = [];
for (let i = 0; i < 3; i++) {
  temp.push({
    id: i,
    sku: '2',
    name: 'string',
    code: 'string',
    price: 1,
    taxes: 1,
    tags: [],
    sizes: [],
    publish: 'string',
    gender: [],
    coverUrl: 'string',
    images: [],
    colors: [],
    quantity: 1,
    category: '',
    available: 1,
    totalSold: 1,
    description: 'string',
    totalRatings: 1,
    totalReviews: 1,
    inventoryType: 'string',
    subDescription: 'string',
    priceSale: 1,
    reviews: [],
    ratings: [
      {
        name: 'string',
        starCount: 1,
        reviewCount: 1,
      },
    ],
    saleLabel: {
      enabled: false,
      content: 'string',
    },
    newLabel: {
      enabled: false,
      content: 'string',
    },
  });
}
export function useGetProducts() {
  const url = endpoints.product.list;
  const { data, isLoading, error, isValidating } = useSWR<ProductsData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      products: temp,
      productsLoading: isLoading,
      productsError: error,
      productsValidating: isValidating,
      productsEmpty: !isLoading && !data?.products.length,
    }),
    [temp, data?.products, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type ProductData = {
  product: IProductItem;
};

export function useGetProduct(productId: string) {
  const url = productId ? [endpoints.product.details, { params: { productId } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<ProductData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      product: data?.product,
      productLoading: isLoading,
      productError: error,
      productValidating: isValidating,
    }),
    [data?.product, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type SearchResultsData = {
  results: IProductItem[];
};

export function useSearchProducts(query: string) {
  const url = query ? [endpoints.product.search, { params: { query } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<SearchResultsData>(url, fetcher, {
    ...swrOptions,
    keepPreviousData: true,
  });

  const memoizedValue = useMemo(
    () => ({
      searchResults: data?.results || [],
      searchLoading: isLoading,
      searchError: error,
      searchValidating: isValidating,
      searchEmpty: !isLoading && !data?.results.length,
    }),
    [data?.results, error, isLoading, isValidating]
  );

  return memoizedValue;
}
