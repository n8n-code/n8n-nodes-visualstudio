import type { INodeProperties } from 'n8n-workflow';

export const poolsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 1 Geneva Actions Pools Change Resource Deletion Setting",
					"value": "POST Api V 1 Geneva Actions Pools Change Resource Deletion Setting",
					"action": "POST Api V 1 Geneva Actions Pools Change Resource Deletion Setting",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Pools/change-resource-deletion-setting"
						}
					}
				},
				{
					"name": "POST Api V 1 Geneva Actions Pools Rotate Pool",
					"value": "POST Api V 1 Geneva Actions Pools Rotate Pool",
					"action": "POST Api V 1 Geneva Actions Pools Rotate Pool",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Pools/{{$parameter[\"poolCode\"]}}/rotate-pool"
						}
					}
				},
				{
					"name": "POST Api V 1 Geneva Actions Pools",
					"value": "POST Api V 1 Geneva Actions Pools",
					"action": "POST Api V 1 Geneva Actions Pools",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Pools/{{$parameter[\"target\"]}}"
						}
					}
				},
				{
					"name": "GET Api V 1 Pools Default",
					"value": "GET Api V 1 Pools Default",
					"action": "GET Api V 1 Pools Default",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/pools/default"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Pools/change-resource-deletion-setting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools Change Resource Deletion Setting"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools Change Resource Deletion Setting"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools Change Resource Deletion Setting"
					]
				}
			}
		},
		{
			"displayName": "Pool Code",
			"name": "poolCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "poolCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools Change Resource Deletion Setting"
					]
				}
			}
		},
		{
			"displayName": "Pool Type",
			"name": "poolType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "poolType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools Change Resource Deletion Setting"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools Change Resource Deletion Setting"
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
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools Change Resource Deletion Setting"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Pools/{poolCode}/rotate-pool",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools Rotate Pool"
					]
				}
			}
		},
		{
			"displayName": "Pool Code",
			"name": "poolCode",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools Rotate Pool"
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
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools Rotate Pool"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Pools/{target}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools"
					]
				}
			}
		},
		{
			"displayName": "Max Target Count",
			"name": "maxTargetCount",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "maxTargetCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools"
					]
				}
			}
		},
		{
			"displayName": "Min Target Count",
			"name": "minTargetCount",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "minTargetCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools"
					]
				}
			}
		},
		{
			"displayName": "Pool Code",
			"name": "poolCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "poolCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools"
					]
				}
			}
		},
		{
			"displayName": "Pool Type",
			"name": "poolType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "poolType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools"
					]
				}
			}
		},
		{
			"displayName": "Target Count",
			"name": "targetCount",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "targetCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools"
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
						"Pools"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Pools"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/pools/default",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Api V 1 Pools Default"
					]
				}
			}
		},
		{
			"displayName": "Sku Name",
			"name": "skuName",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "skuName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Api V 1 Pools Default"
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
						"Pools"
					],
					"operation": [
						"GET Api V 1 Pools Default"
					]
				}
			}
		},
];
