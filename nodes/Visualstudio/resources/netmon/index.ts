import type { INodeProperties } from 'n8n-workflow';

export const netmonDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Netmon"
					]
				}
			},
			"options": [
				{
					"name": "GET Internal Netmon Correlation",
					"value": "GET Internal Netmon Correlation",
					"action": "GET Internal Netmon Correlation",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/internal/Netmon/correlation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /internal/Netmon/correlation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Netmon"
					],
					"operation": [
						"GET Internal Netmon Correlation"
					]
				}
			}
		},
		{
			"displayName": "Mac Address",
			"name": "macAddress",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "macAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Netmon"
					],
					"operation": [
						"GET Internal Netmon Correlation"
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
						"Netmon"
					],
					"operation": [
						"GET Internal Netmon Correlation"
					]
				}
			}
		},
];
