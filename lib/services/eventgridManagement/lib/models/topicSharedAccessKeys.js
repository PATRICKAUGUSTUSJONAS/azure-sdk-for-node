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
 * Shared access keys of the Topic
 *
 */
class TopicSharedAccessKeys {
  /**
   * Create a TopicSharedAccessKeys.
   * @member {string} [key1] Shared access key1 for the topic.
   * @member {string} [key2] Shared access key2 for the topic.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TopicSharedAccessKeys
   *
   * @returns {object} metadata of TopicSharedAccessKeys
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TopicSharedAccessKeys',
      type: {
        name: 'Composite',
        className: 'TopicSharedAccessKeys',
        modelProperties: {
          key1: {
            required: false,
            serializedName: 'key1',
            type: {
              name: 'String'
            }
          },
          key2: {
            required: false,
            serializedName: 'key2',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TopicSharedAccessKeys;