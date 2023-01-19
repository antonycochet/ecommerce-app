/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
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
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
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
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
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
