import type { INodeProperties } from 'n8n-workflow';

export const heartBeatDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Heart Beat"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 1 Heart Beat",
					"value": "POST Api V 1 Heart Beat",
					"action": "POST Api V 1 Heart Beat",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/HeartBeat"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/HeartBeat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Heart Beat"
					],
					"operation": [
						"POST Api V 1 Heart Beat"
					]
				}
			}
		},
		{
			"displayName": "Agent Version",
			"name": "agentVersion",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "agentVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Heart Beat"
					],
					"operation": [
						"POST Api V 1 Heart Beat"
					]
				}
			}
		},
		{
			"displayName": "Collected Data List",
			"name": "collectedDataList",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "collectedDataList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Heart Beat"
					],
					"operation": [
						"POST Api V 1 Heart Beat"
					]
				}
			}
		},
		{
			"displayName": "Environment Id",
			"name": "environmentId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "environmentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Heart Beat"
					],
					"operation": [
						"POST Api V 1 Heart Beat"
					]
				}
			}
		},
		{
			"displayName": "Resource Id",
			"name": "resourceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "resourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Heart Beat"
					],
					"operation": [
						"POST Api V 1 Heart Beat"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "timeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "timeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Heart Beat"
					],
					"operation": [
						"POST Api V 1 Heart Beat"
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
						"Heart Beat"
					],
					"operation": [
						"POST Api V 1 Heart Beat"
					]
				}
			}
		},
];
