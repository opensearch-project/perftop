/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Validate that query parameters are valid for Bar graphs.
 *
 * @param {string} queryParams - user-defined query parameter.
 */
function validateBarQueryParams (queryParams) {
  if (queryParams.metrics.split(',').length > 1) {
    console.error('Only one metric is supported for bar graphs.');
  }
  if (queryParams.dimensions.split(',').length > 1) {
    console.error('Only one dimension is supported for bar graphs.');
  }
}

/**
 * Validate that query parameters are valid for Linw graphs.
 *
 * @param {string} queryParams - user-defined query parameter.
 */
function validateLineQueryParams (queryParams) {
  if (queryParams.metrics.split(',').length > 1) {
    console.error('Only one metric is supported for bar graphs.');
  }
  if (queryParams.dimensions.split(',').length > 1) {
    console.error('Only one dimension is supported for bar graphs.');
  }
}

/**
 * Validate that query parameters are valid for table graphs.
 *
 * @param {string} queryParams - user-defined query parameter.
 */
function validateTableQueryParams (queryParams) {
  if (!queryParams.sortBy) {
    console.error('Provide "sortBy" field for the table graph.');
  }
}

module.exports.validateTableQueryParams = validateTableQueryParams;
module.exports.validateBarQueryParams = validateBarQueryParams;
module.exports.validateLineQueryParams = validateLineQueryParams;
