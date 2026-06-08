import type { INodeProperties } from 'n8n-workflow';

export const locationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					]
				}
			},
			"options": [
				{
					"name": "GET Api V 1 Locations",
					"value": "GET Api V 1 Locations",
					"action": "GET Api V 1 Locations",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Locations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/Locations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"GET Api V 1 Locations"
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
						"Locations"
					],
					"operation": [
						"GET Api V 1 Locations"
					]
				}
			}
		},
];
