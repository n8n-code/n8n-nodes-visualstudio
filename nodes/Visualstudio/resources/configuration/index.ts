import type { INodeProperties } from 'n8n-workflow';

export const configurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 1 Geneva Actions Configuration",
					"value": "POST Api V 1 Geneva Actions Configuration",
					"action": "POST Api V 1 Geneva Actions Configuration",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Configuration/{{$parameter[\"target\"]}}"
						}
					}
				},
				{
					"name": "DELETE Api V 1 Geneva Actions Configuration",
					"value": "DELETE Api V 1 Geneva Actions Configuration",
					"action": "DELETE Api V 1 Geneva Actions Configuration",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/GenevaActions/Configuration/{{$parameter[\"target\"]}}/{{$parameter[\"key\"]}}"
						}
					}
				},
				{
					"name": "GET Api V 1 Geneva Actions Configuration",
					"value": "GET Api V 1 Geneva Actions Configuration",
					"action": "GET Api V 1 Geneva Actions Configuration",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/GenevaActions/Configuration/{{$parameter[\"target\"]}}/{{$parameter[\"key\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Configuration/{target}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Configuration"
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
						"Configuration"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Configuration"
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
						"Configuration"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Configuration"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Configuration"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Configuration"
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
						"Configuration"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Configuration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/GenevaActions/Configuration/{target}/{key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Configuration"
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
						"Configuration"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Configuration"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Configuration"
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
						"Configuration"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/GenevaActions/Configuration/{target}/{key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Configuration"
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
						"Configuration"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Configuration"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Configuration"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Configuration"
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
						"Configuration"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Configuration"
					]
				}
			}
		},
];
