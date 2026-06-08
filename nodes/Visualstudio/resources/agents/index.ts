import type { INodeProperties } from 'n8n-workflow';

export const agentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					]
				}
			},
			"options": [
				{
					"name": "GET Api V 1 Agents",
					"value": "GET Api V 1 Agents",
					"action": "GET Api V 1 Agents",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Agents/{{$parameter[\"family\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/Agents/{family}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"GET Api V 1 Agents"
					]
				}
			}
		},
		{
			"displayName": "Family",
			"name": "family",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"GET Api V 1 Agents"
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
						"Agents"
					],
					"operation": [
						"GET Api V 1 Agents"
					]
				}
			}
		},
];
