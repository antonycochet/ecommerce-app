/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand($filter: ModelSubscriptionBrandFilterInput) {
    onCreateBrand(filter: $filter) {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand($filter: ModelSubscriptionBrandFilterInput) {
    onUpdateBrand(filter: $filter) {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand($filter: ModelSubscriptionBrandFilterInput) {
    onDeleteBrand(filter: $filter) {
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
