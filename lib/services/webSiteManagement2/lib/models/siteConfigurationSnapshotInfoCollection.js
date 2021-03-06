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
 * Collection of metadata for the app configuration snapshots that can be
 * restored.
 */
class SiteConfigurationSnapshotInfoCollection extends Array {
  /**
   * Create a SiteConfigurationSnapshotInfoCollection.
   * @member {string} [nextLink] Link to next page of resources.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SiteConfigurationSnapshotInfoCollection
   *
   * @returns {object} metadata of SiteConfigurationSnapshotInfoCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SiteConfigurationSnapshotInfoCollection',
      type: {
        name: 'Composite',
        className: 'SiteConfigurationSnapshotInfoCollection',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SiteConfigurationSnapshotInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'SiteConfigurationSnapshotInfo'
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

module.exports = SiteConfigurationSnapshotInfoCollection;
