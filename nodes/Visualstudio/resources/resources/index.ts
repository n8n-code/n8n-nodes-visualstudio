import type { INodeProperties } from 'n8n-workflow';

export const resourcesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 1 Geneva Actions Resources Under Investigation",
					"value": "POST Api V 1 Geneva Actions Resources Under Investigation",
					"action": "POST Api V 1 Geneva Actions Resources Under Investigation",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Resources/{{$parameter[\"resourceId\"]}}/under-investigation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Resources/{resourceId}/under-investigation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Resources Under Investigation"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Resources"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Resources Under Investigation"
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
						"Resources"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Resources Under Investigation"
					]
				}
			}
		},
];
