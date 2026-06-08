import type { INodeProperties } from 'n8n-workflow';

export const plansDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					]
				}
			},
			"options": [
				{
					"name": "PUT Api V 1 Subscriptions Providers Microsoft Codespaces Plans Subscription Life Cycle Notification",
					"value": "PUT Api V 1 Subscriptions Providers Microsoft Codespaces Plans Subscription Life Cycle Notification",
					"action": "PUT Api V 1 Subscriptions Providers Microsoft Codespaces Plans Subscription Life Cycle Notification",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Resource Read Begin",
					"value": "POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Resource Read Begin",
					"action": "POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Resource Read Begin",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/providers/Microsoft.Codespaces/plans/resourceReadBegin"
						}
					}
				},
				{
					"name": "PUT Api V 1 Subscriptions Providers Microsoft VS Online Plans Subscription Life Cycle Notification",
					"value": "PUT Api V 1 Subscriptions Providers Microsoft VS Online Plans Subscription Life Cycle Notification",
					"action": "PUT Api V 1 Subscriptions Providers Microsoft VS Online Plans Subscription Life Cycle Notification",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Resource Read Begin",
					"value": "POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Resource Read Begin",
					"action": "POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Resource Read Begin",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/providers/Microsoft.VSOnline/plans/resourceReadBegin"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Read Begin",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Read Begin",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Read Begin",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/resourceReadBegin"
						}
					}
				},
				{
					"name": "PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans",
					"value": "PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans",
					"action": "PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Codespaces",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Codespaces",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/deleteAllCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Environments",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Environments",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/deleteAllEnvironments"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Codespaces",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Codespaces",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/readAllCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Environments",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Environments",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/readAllEnvironments"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read Delegates",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read Delegates",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read Delegates",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/readDelegates"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Completed",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Completed",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Completed",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/resourceCreationCompleted"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/resourceCreationValidate"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Deletion Validate",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Deletion Validate",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Deletion Validate",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/resourceDeletionValidate"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/resourcePatchCompleted"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Validate",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Validate",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Validate",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/resourcePatchValidate"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Codespaces",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Codespaces",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/writeCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/writeDelegates"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Environments",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Environments",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/writeEnvironments"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Read Begin",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Read Begin",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Read Begin",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/resourceReadBegin"
						}
					}
				},
				{
					"name": "PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans",
					"value": "PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans",
					"action": "PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Codespaces",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Codespaces",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/deleteAllCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Environments",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Environments",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/deleteAllEnvironments"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Codespaces",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Codespaces",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/readAllCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Environments",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Environments",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/readAllEnvironments"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read Delegates",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read Delegates",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read Delegates",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/readDelegates"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Completed",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Completed",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Completed",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/resourceCreationCompleted"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/resourceCreationValidate"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Deletion Validate",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Deletion Validate",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Deletion Validate",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/resourceDeletionValidate"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/resourcePatchCompleted"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Validate",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Validate",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Validate",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/resourcePatchValidate"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Codespaces",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Codespaces",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/writeCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/writeDelegates"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Environments",
					"value": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Environments",
					"action": "POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/writeEnvironments"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Delete Delegates",
					"value": "POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Delete Delegates",
					"action": "POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Delete Delegates",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.Codespaces/plans/{{$parameter[\"resourceName\"]}}/deleteDelegates"
						}
					}
				},
				{
					"name": "POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Delete Delegates",
					"value": "POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Delete Delegates",
					"action": "POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Delete Delegates",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/subscriptions/{{$parameter[\"subscriptionId\"]}}/{{$parameter[\"resourceGroup\"]}}/providers/Microsoft.VSOnline/plans/{{$parameter[\"resourceName\"]}}/deleteDelegates"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /api/v1/subscriptions/{subscriptionId}/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft Codespaces Plans Subscription Life Cycle Notification"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft Codespaces Plans Subscription Life Cycle Notification"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft Codespaces Plans Subscription Life Cycle Notification"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft Codespaces Plans Subscription Life Cycle Notification"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft Codespaces Plans Subscription Life Cycle Notification"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft Codespaces Plans Subscription Life Cycle Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/providers/Microsoft.Codespaces/plans/resourceReadBegin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Resource Read Begin"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"identity\": {},\n    \"properties\": {\n      \"encryption\": {\n        \"keyVaultProperties\": {}\n      },\n      \"vnetProperties\": {}\n    }\n  }\n]",
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Resource Read Begin"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/subscriptions/{subscriptionId}/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft VS Online Plans Subscription Life Cycle Notification"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft VS Online Plans Subscription Life Cycle Notification"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft VS Online Plans Subscription Life Cycle Notification"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft VS Online Plans Subscription Life Cycle Notification"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft VS Online Plans Subscription Life Cycle Notification"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Providers Microsoft VS Online Plans Subscription Life Cycle Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/providers/Microsoft.VSOnline/plans/resourceReadBegin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Resource Read Begin"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"identity\": {},\n    \"properties\": {\n      \"encryption\": {\n        \"keyVaultProperties\": {}\n      },\n      \"vnetProperties\": {}\n    }\n  }\n]",
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Resource Read Begin"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/resourceReadBegin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Read Begin"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Read Begin"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"identity\": {},\n    \"properties\": {\n      \"encryption\": {\n        \"keyVaultProperties\": {}\n      },\n      \"vnetProperties\": {}\n    }\n  }\n]",
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Read Begin"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
					]
				}
			}
		},
		{
			"displayName": "Headers",
			"name": "headers",
			"default": "{}",
			"type": "json",
			"routing": {
				"request": {
					"headers": {
						"headers": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{\n  \"encryption\": {\n    \"keyVaultProperties\": {}\n  },\n  \"vnetProperties\": {}\n}",
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteAllCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteAllEnvironments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Environments"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Delete All Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readAllCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readAllEnvironments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Environments"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read All Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readDelegates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Read Delegates"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceCreationCompleted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Completed"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceCreationValidate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{\n  \"encryption\": {\n    \"keyVaultProperties\": {}\n  },\n  \"vnetProperties\": {}\n}",
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceDeletionValidate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Deletion Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Deletion Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Deletion Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Deletion Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourcePatchCompleted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Headers",
			"name": "headers",
			"default": "{}",
			"type": "json",
			"routing": {
				"request": {
					"headers": {
						"headers": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{\n  \"encryption\": {\n    \"keyVaultProperties\": {}\n  },\n  \"vnetProperties\": {}\n}",
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourcePatchValidate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{\n  \"encryption\": {\n    \"keyVaultProperties\": {}\n  },\n  \"vnetProperties\": {}\n}",
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeDelegates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Environment Ids",
			"name": "environmentIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "environmentIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expiration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Port Numbers",
			"name": "portNumbers",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "portNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeEnvironments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Environments"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft Codespaces Plans Write Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/resourceReadBegin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Read Begin"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Read Begin"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"identity\": {},\n    \"properties\": {\n      \"encryption\": {\n        \"keyVaultProperties\": {}\n      },\n      \"vnetProperties\": {}\n    }\n  }\n]",
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Read Begin"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Read Begin"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
					]
				}
			}
		},
		{
			"displayName": "Headers",
			"name": "headers",
			"default": "{}",
			"type": "json",
			"routing": {
				"request": {
					"headers": {
						"headers": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{\n  \"encryption\": {\n    \"keyVaultProperties\": {}\n  },\n  \"vnetProperties\": {}\n}",
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
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
						"Plans"
					],
					"operation": [
						"PUT Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteAllCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteAllEnvironments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Environments"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Delete All Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readAllCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readAllEnvironments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Environments"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read All Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readDelegates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Read Delegates"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceCreationCompleted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Completed"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceCreationValidate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{\n  \"encryption\": {\n    \"keyVaultProperties\": {}\n  },\n  \"vnetProperties\": {}\n}",
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Creation Validate"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceDeletionValidate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Deletion Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Deletion Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Deletion Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Deletion Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Deletion Validate"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourcePatchCompleted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Headers",
			"name": "headers",
			"default": "{}",
			"type": "json",
			"routing": {
				"request": {
					"headers": {
						"headers": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{\n  \"encryption\": {\n    \"keyVaultProperties\": {}\n  },\n  \"vnetProperties\": {}\n}",
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Completed"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourcePatchValidate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{\n  \"encryption\": {\n    \"keyVaultProperties\": {}\n  },\n  \"vnetProperties\": {}\n}",
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Validate"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Resource Patch Validate"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Codespaces"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeDelegates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Environment Ids",
			"name": "environmentIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "environmentIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expiration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Port Numbers",
			"name": "portNumbers",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "portNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeEnvironments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Environments"
					]
				}
			}
		},
		{
			"displayName": "Expiration",
			"name": "expiration",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expiration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Environments"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Resource Groups Providers Microsoft VS Online Plans Write Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteDelegates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Delete Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Delete Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Delete Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Delete Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft Codespaces Plans Delete Delegates"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/subscriptions/{subscriptionId}/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteDelegates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Delete Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Delete Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Delete Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Delete Delegates"
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
						"Plans"
					],
					"operation": [
						"POST Api V 1 Subscriptions Providers Microsoft VS Online Plans Delete Delegates"
					]
				}
			}
		},
];
