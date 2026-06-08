import type { INodeProperties } from 'n8n-workflow';

export const sasDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sas"
					]
				}
			},
			"options": [
				{
					"name": "GET Api V 1 Sas",
					"value": "GET Api V 1 Sas",
					"action": "GET Api V 1 Sas",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Sas"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/Sas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sas"
					],
					"operation": [
						"GET Api V 1 Sas"
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
						"Sas"
					],
					"operation": [
						"GET Api V 1 Sas"
					]
				}
			}
		},
];
