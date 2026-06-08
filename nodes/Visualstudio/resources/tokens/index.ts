import type { INodeProperties } from 'n8n-workflow';

export const tokensDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 1 Tokens Plans Delete All Codespaces",
					"value": "POST Api V 1 Tokens Plans Delete All Codespaces",
					"action": "POST Api V 1 Tokens Plans Delete All Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/plans/{{$parameter[\"planName\"]}}/deleteAllCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Tokens Plans Read All Codespaces",
					"value": "POST Api V 1 Tokens Plans Read All Codespaces",
					"action": "POST Api V 1 Tokens Plans Read All Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/plans/{{$parameter[\"planName\"]}}/readAllCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Tokens Plans Write Codespaces",
					"value": "POST Api V 1 Tokens Plans Write Codespaces",
					"action": "POST Api V 1 Tokens Plans Write Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/plans/{{$parameter[\"planName\"]}}/writeCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Tokens Plans Write Delegates",
					"value": "POST Api V 1 Tokens Plans Write Delegates",
					"action": "POST Api V 1 Tokens Plans Write Delegates",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/plans/{{$parameter[\"planName\"]}}/writeDelegates"
						}
					}
				},
				{
					"name": "PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans",
					"value": "PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans",
					"action": "PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/Tokens/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/{{$parameter[\"providerNamespace\"]}}/plans/{{$parameter[\"resourceName\"]}}"
						}
					}
				},
				{
					"name": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Codespaces",
					"value": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Codespaces",
					"action": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/{{$parameter[\"providerNamespace\"]}}/plans/{{$parameter[\"resourceName\"]}}/deleteAllCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Environments",
					"value": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Environments",
					"action": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/{{$parameter[\"providerNamespace\"]}}/plans/{{$parameter[\"resourceName\"]}}/deleteAllEnvironments"
						}
					}
				},
				{
					"name": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Codespaces",
					"value": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Codespaces",
					"action": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/{{$parameter[\"providerNamespace\"]}}/plans/{{$parameter[\"resourceName\"]}}/readAllCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Environments",
					"value": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Environments",
					"action": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/{{$parameter[\"providerNamespace\"]}}/plans/{{$parameter[\"resourceName\"]}}/readAllEnvironments"
						}
					}
				},
				{
					"name": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Codespaces",
					"value": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Codespaces",
					"action": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Codespaces",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/{{$parameter[\"providerNamespace\"]}}/plans/{{$parameter[\"resourceName\"]}}/writeCodespaces"
						}
					}
				},
				{
					"name": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates",
					"value": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates",
					"action": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/{{$parameter[\"providerNamespace\"]}}/plans/{{$parameter[\"resourceName\"]}}/writeDelegates"
						}
					}
				},
				{
					"name": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Environments",
					"value": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Environments",
					"action": "POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Tokens/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroup\"]}}/providers/{{$parameter[\"providerNamespace\"]}}/plans/{{$parameter[\"resourceName\"]}}/writeEnvironments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/Tokens/plans/{planName}/deleteAllCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Delete All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Plan Name",
			"name": "planName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Delete All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "X Subscription Id",
			"name": "x-subscription-id",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-subscription-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Delete All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Delete All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Delete All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Tokens/plans/{planName}/readAllCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Read All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Plan Name",
			"name": "planName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Read All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "X Subscription Id",
			"name": "x-subscription-id",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-subscription-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Read All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Read All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Read All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Tokens/plans/{planName}/writeCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Plan Name",
			"name": "planName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Codespaces"
					]
				}
			}
		},
		{
			"displayName": "X Subscription Id",
			"name": "x-subscription-id",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-subscription-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Tokens/plans/{planName}/writeDelegates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Plan Name",
			"name": "planName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "X Subscription Id",
			"name": "x-subscription-id",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-subscription-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
					]
				}
			}
		},
		{
			"displayName": "Provider Namespace",
			"name": "providerNamespace",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
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
						"Tokens"
					],
					"operation": [
						"PUT Api V 1 Tokens Subscriptions Resource Groups Providers Plans"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/deleteAllCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Provider Namespace",
			"name": "providerNamespace",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/deleteAllEnvironments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Environments"
					]
				}
			}
		},
		{
			"displayName": "Provider Namespace",
			"name": "providerNamespace",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Delete All Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/readAllCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Provider Namespace",
			"name": "providerNamespace",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/readAllEnvironments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Environments"
					]
				}
			}
		},
		{
			"displayName": "Provider Namespace",
			"name": "providerNamespace",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Read All Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeCodespaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Codespaces"
					]
				}
			}
		},
		{
			"displayName": "Provider Namespace",
			"name": "providerNamespace",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Codespaces"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Codespaces"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeDelegates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "Provider Namespace",
			"name": "providerNamespace",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Delegates"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeEnvironments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Environments"
					]
				}
			}
		},
		{
			"displayName": "Provider Namespace",
			"name": "providerNamespace",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Environments"
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
						"Tokens"
					],
					"operation": [
						"POST Api V 1 Tokens Subscriptions Resource Groups Providers Plans Write Environments"
					]
				}
			}
		},
];
