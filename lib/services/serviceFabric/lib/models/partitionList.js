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
 * @class
 * Initializes a new instance of the PartitionList class.
 * @constructor
 * The list of the partition
 *
 * @member {string} [continuationToken]
 *
 * @member {array} [items]
 *
 */
class PartitionList {
  constructor() {
  }

  /**
   * Defines the metadata of PartitionList
   *
   * @returns {object} metadata of PartitionList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PartitionList',
      type: {
        name: 'Composite',
        className: 'PartitionList',
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
                  serializedName: 'PartitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'Partition'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PartitionList;