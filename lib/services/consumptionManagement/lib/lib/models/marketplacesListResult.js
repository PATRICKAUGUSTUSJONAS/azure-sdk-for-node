/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Result of listing marketplaces. It contains a list of available marketplaces
 * in reverse chronological order by billing period.
 */
class MarketplacesListResult extends Array {
  /**
   * Create a MarketplacesListResult.
   * @member {string} [nextLink] The link (url) to the next page of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MarketplacesListResult
   *
   * @returns {object} metadata of MarketplacesListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MarketplacesListResult',
      type: {
        name: 'Composite',
        className: 'MarketplacesListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MarketplaceElementType',
                  type: {
                    name: 'Composite',
                    className: 'Marketplace'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MarketplacesListResult;