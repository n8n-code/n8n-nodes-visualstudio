import type { INodeProperties } from 'n8n-workflow';

export const warmupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Warmup"
					]
				}
			},
			"options": [
				{
					"name": "GET Warmup",
					"value": "GET Warmup",
					"action": "GET Warmup",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/warmup"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /warmup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Warmup"
					],
					"operation": [
						"GET Warmup"
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
						"Warmup"
					],
					"operation": [
						"GET Warmup"
					]
				}
			}
		},
];
