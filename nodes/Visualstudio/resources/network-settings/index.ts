import type { INodeProperties } from 'n8n-workflow';

export const networkSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					]
				}
			},
			"options": [
				{
					"name": "PUT Api V 1 Subscriptions Providers Git Hub Network Subscription Life Cycle Notification",
					"value": "PUT Api V 1 Subscriptions Providers Git Hub Network Subscription Life Cycle Notification",
					"action": "PUT Api V 1 Subscriptions Providers Git Hub Network Subscription Life Cycle Notification",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/SubscriptionLifeCycleNotification"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Providers Git Hub Network Resource Read Begin",
					"value": "POST Api V 1 Subscriptions Providers Git Hub Network Resource Read Begin",
					"action": "POST Api V 1 Subscriptions Providers Git Hub Network Resource Read Begin",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/resourceReadBegin"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Read Begin",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Read Begin",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Read Begin",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/resourceReadBegin"
						}
					}
				},
				{
					"name": "DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network",
					"value": "DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network",
					"action": "DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/{{$parameter[\"resourceName\"]}}"
						}
					}
				},
				{
					"name": "PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network",
					"value": "PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network",
					"action": "PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/{{$parameter[\"resourceName\"]}}"
						}
					}
				},
				{
					"name": "PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network",
					"value": "PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network",
					"action": "PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/{{$parameter[\"resourceName\"]}}"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Completed",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Completed",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Completed",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/{{$parameter[\"resourceName\"]}}/resourceCreationCompleted"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/{{$parameter[\"resourceName\"]}}/resourceCreationValidate"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Completed",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Completed",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Completed",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/{{$parameter[\"resourceName\"]}}/resourceDeletionCompleted"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/{{$parameter[\"resourceName\"]}}/resourceDeletionValidate"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Completed",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Completed",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Completed",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/{{$parameter[\"resourceName\"]}}/resourcePatchCompleted"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/GitHub.Network/{{$parameter[\"resourceType\"]}}/{{$parameter[\"resourceName\"]}}/resourcePatchValidate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /api/v1/subscriptions/{subscriptionId}/providers/GitHub.Network/{resourceType}/SubscriptionLifeCycleNotification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Git Hub Network Subscription Life Cycle Notification"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Git Hub Network Subscription Life Cycle Notification"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Git Hub Network Subscription Life Cycle Notification"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{\n  \"accountOwner\": {},\n  \"additionalProperties\": {\n    \"billingProperties\": {}\n  },\n  \"managedByTenants\": [\n    {}\n  ],\n  \"registeredFeatures\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Git Hub Network Subscription Life Cycle Notification"
					]
				}
			}
		},
		{
			"displayName": "Registration Date",
			"name": "registrationDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "registrationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Git Hub Network Subscription Life Cycle Notification"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Git Hub Network Subscription Life Cycle Notification"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Git Hub Network Subscription Life Cycle Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/providers/GitHub.Network/{resourceType}/resourceReadBegin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"properties\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/resourceReadBegin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Resource Group",
			"name": "resourceGroup",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"properties\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Resource Group",
			"name": "resourceGroup",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Resource Name",
			"name": "resourceName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Provisioning State",
			"name": "provisioningState",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "provisioningState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"DELETE Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Resource Group",
			"name": "resourceGroup",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Resource Name",
			"name": "resourceName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Provisioning State",
			"name": "provisioningState",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "provisioningState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PATCH Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Resource Group",
			"name": "resourceGroup",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Resource Name",
			"name": "resourceName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Provisioning State",
			"name": "provisioningState",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "provisioningState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Git Hub Network"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceCreationCompleted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Completed"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Completed"
					]
				}
			}
		},
		{
			"displayName": "Resource Group",
			"name": "resourceGroup",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Completed"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Completed"
					]
				}
			}
		},
		{
			"displayName": "Resource Name",
			"name": "resourceName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Completed"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Completed"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceCreationValidate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Resource Group",
			"name": "resourceGroup",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Resource Name",
			"name": "resourceName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Provisioning State",
			"name": "provisioningState",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "provisioningState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceDeletionCompleted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Completed"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Completed"
					]
				}
			}
		},
		{
			"displayName": "Resource Group",
			"name": "resourceGroup",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Completed"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Completed"
					]
				}
			}
		},
		{
			"displayName": "Resource Name",
			"name": "resourceName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Completed"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Completed"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceDeletionValidate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Resource Group",
			"name": "resourceGroup",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Resource Name",
			"name": "resourceName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Provisioning State",
			"name": "provisioningState",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "provisioningState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourcePatchCompleted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Resource Group",
			"name": "resourceGroup",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Resource Name",
			"name": "resourceName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourcePatchValidate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Resource Group",
			"name": "resourceGroup",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Resource Name",
			"name": "resourceName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Provisioning State",
			"name": "provisioningState",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "provisioningState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "JWT auth token for the user. Example: eyJ2...",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Network Settings"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Git Hub Network Resource Patch Validate"
					]
				}
			}
		},
];
