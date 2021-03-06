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

const models = require('./index');

/**
 * The list of application types that are provisioned or being provisioned in
 * the cluster. The list is paged when all of the results cannot fit in a
 * single message. The next set of results can be obtained by executing the
 * same query with the continuation token provided in this list.
 *
 */
class PagedApplicationTypeInfoList {
  /**
   * Create a PagedApplicationTypeInfoList.
   * @member {string} [continuationToken]
   * @member {array} [items]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PagedApplicationTypeInfoList
   *
   * @returns {object} metadata of PagedApplicationTypeInfoList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PagedApplicationTypeInfoList',
      type: {
        name: 'Composite',
        className: 'PagedApplicationTypeInfoList',
        modelProperties: {
          continuationToken: {
            required: false,
            serializedName: 'ContinuationToken',
            type: {
              name: 'String'
            }
          },
          items: {
            required: false,
            serializedName: 'Items',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationTypeInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationTypeInfo'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PagedApplicationTypeInfoList;
