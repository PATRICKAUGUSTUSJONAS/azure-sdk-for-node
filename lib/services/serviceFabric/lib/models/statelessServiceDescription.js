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
 * Describes a stateless service.
 *
 * @extends models['ServiceDescription']
 */
class StatelessServiceDescription extends models['ServiceDescription'] {
  /**
   * Create a StatelessServiceDescription.
   * @member {number} instanceCount The instance count.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StatelessServiceDescription
   *
   * @returns {object} metadata of StatelessServiceDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Stateless',
      type: {
        name: 'Composite',
        className: 'StatelessServiceDescription',
        modelProperties: {
          applicationName: {
            required: false,
            serializedName: 'ApplicationName',
            type: {
              name: 'String'
            }
          },
          serviceName: {
            required: true,
            serializedName: 'ServiceName',
            type: {
              name: 'String'
            }
          },
          serviceTypeName: {
            required: true,
            serializedName: 'ServiceTypeName',
            type: {
              name: 'String'
            }
          },
          initializationData: {
            required: false,
            serializedName: 'InitializationData',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          partitionDescription: {
            required: true,
            serializedName: 'PartitionDescription',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'PartitionScheme',
                clientName: 'partitionScheme'
              },
              uberParent: 'PartitionSchemeDescription',
              className: 'PartitionSchemeDescription'
            }
          },
          placementConstraints: {
            required: false,
            serializedName: 'PlacementConstraints',
            type: {
              name: 'String'
            }
          },
          correlationScheme: {
            required: false,
            serializedName: 'CorrelationScheme',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceCorrelationDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceCorrelationDescription'
                  }
              }
            }
          },
          serviceLoadMetrics: {
            required: false,
            serializedName: 'ServiceLoadMetrics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceLoadMetricDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceLoadMetricDescription'
                  }
              }
            }
          },
          servicePlacementPolicies: {
            required: false,
            serializedName: 'ServicePlacementPolicies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServicePlacementPolicyDescriptionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'Type',
                      clientName: 'type'
                    },
                    uberParent: 'ServicePlacementPolicyDescription',
                    className: 'ServicePlacementPolicyDescription'
                  }
              }
            }
          },
          defaultMoveCost: {
            required: false,
            serializedName: 'DefaultMoveCost',
            type: {
              name: 'String'
            }
          },
          isDefaultMoveCostSpecified: {
            required: false,
            serializedName: 'IsDefaultMoveCostSpecified',
            type: {
              name: 'Boolean'
            }
          },
          servicePackageActivationMode: {
            required: false,
            serializedName: 'ServicePackageActivationMode',
            type: {
              name: 'String'
            }
          },
          serviceDnsName: {
            required: false,
            serializedName: 'ServiceDnsName',
            type: {
              name: 'String'
            }
          },
          serviceKind: {
            required: true,
            serializedName: 'ServiceKind',
            type: {
              name: 'String'
            }
          },
          instanceCount: {
            required: true,
            serializedName: 'InstanceCount',
            constraints: {
              InclusiveMinimum: -1
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = StatelessServiceDescription;
