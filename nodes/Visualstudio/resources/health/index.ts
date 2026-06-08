import type { INodeProperties } from 'n8n-workflow';

export const healthDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					]
				}
			},
			"options": [
				{
					"name": "GET Health",
					"value": "GET Health",
					"action": "GET Health",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"GET Health"
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
						"Health"
					],
					"operation": [
						"GET Health"
					]
				}
			}
		},
];
