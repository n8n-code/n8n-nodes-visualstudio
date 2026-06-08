import type { INodeProperties } from 'n8n-workflow';

export const tunnelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tunnel"
					]
				}
			},
			"options": [
				{
					"name": "GET Api V 1 Tunnel Port Info",
					"value": "GET Api V 1 Tunnel Port Info",
					"action": "GET Api V 1 Tunnel Port Info",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Tunnel/{{$parameter[\"environmentId\"]}}/portInfo"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/Tunnel/{environmentId}/portInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tunnel"
					],
					"operation": [
						"GET Api V 1 Tunnel Port Info"
					]
				}
			}
		},
		{
			"displayName": "Environment Id",
			"name": "environmentId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tunnel"
					],
					"operation": [
						"GET Api V 1 Tunnel Port Info"
					]
				}
			}
		},
		{
			"displayName": "Port Number",
			"name": "portNumber",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "portNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tunnel"
					],
					"operation": [
						"GET Api V 1 Tunnel Port Info"
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
						"Tunnel"
					],
					"operation": [
						"GET Api V 1 Tunnel Port Info"
					]
				}
			}
		},
];
