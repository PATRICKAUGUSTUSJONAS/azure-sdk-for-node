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
 * The list runtime script action detail response.
 *
 */
class ClusterListRuntimeScriptActionDetailResult {
  /**
   * Create a ClusterListRuntimeScriptActionDetailResult.
   * @member {array} [value] The list of persisted script action details for
   * the cluster.
   * @member {string} [nextLink] The link (url) to the next page of results.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ClusterListRuntimeScriptActionDetailResult
   *
   * @returns {object} metadata of ClusterListRuntimeScriptActionDetailResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClusterListRuntimeScriptActionDetailResult',
      type: {
        name: 'Composite',
        className: 'ClusterListRuntimeScriptActionDetailResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RuntimeScriptActionDetailElementType',
                  type: {
                    name: 'Composite',
                    className: 'RuntimeScriptActionDetail'
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

module.exports = ClusterListRuntimeScriptActionDetailResult;
