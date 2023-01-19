/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      subTitle
      price
      quickDescription
      fullDescription
      size
      weight
      quantity
      isAvailable
      reference
      stock
      composition
      category {
        id
        title
        subTitle
        fullDescription
        isAvailable
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      brand {
        id
        title
        subTitle
        fullDescription
        image
        isAvailable
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      categoryProductsId
      brandProductsId
      productCategoryId
      productBrandId
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subTitle
        price
        quickDescription
        fullDescription
        size
        weight
        quantity
        isAvailable
        reference
        stock
        composition
        category {
          id
          title
          subTitle
          fullDescription
          isAvailable
          createdAt
          updatedAt
        }
        brand {
          id
          title
          subTitle
          fullDescription
          image
          isAvailable
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        categoryProductsId
        brandProductsId
        productCategoryId
        productBrandId
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      title
      subTitle
      fullDescription
      isAvailable
      products {
        items {
          id
          title
          subTitle
          price
          quickDescription
          fullDescription
          size
          weight
          quantity
          isAvailable
          reference
          stock
          composition
          createdAt
          updatedAt
          categoryProductsId
          brandProductsId
          productCategoryId
          productBrandId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subTitle
        fullDescription
        isAvailable
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      title
      subTitle
      fullDescription
      image
      isAvailable
      products {
        items {
          id
          title
          subTitle
          price
          quickDescription
          fullDescription
          size
          weight
          quantity
          isAvailable
          reference
          stock
          composition
          createdAt
          updatedAt
          categoryProductsId
          brandProductsId
          productCategoryId
          productBrandId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subTitle
        fullDescription
        image
        isAvailable
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
