import type { INodeProperties } from 'n8n-workflow';

export const tenantDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant"
					]
				}
			},
			"options": [
				{
					"name": "DELETE Api V 1 Tenant",
					"value": "DELETE Api V 1 Tenant",
					"action": "DELETE Api V 1 Tenant",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/Tenant/{{$parameter[\"tenantId\"]}}"
						}
					}
				},
				{
					"name": "GET Api V 1 Tenant",
					"value": "GET Api V 1 Tenant",
					"action": "GET Api V 1 Tenant",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Tenant/{{$parameter[\"tenantId\"]}}"
						}
					}
				},
				{
					"name": "PUT Api V 1 Tenant",
					"value": "PUT Api V 1 Tenant",
					"action": "PUT Api V 1 Tenant",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/Tenant/{{$parameter[\"tenantId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /api/v1/Tenant/{tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant"
					],
					"operation": [
						"DELETE Api V 1 Tenant"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant"
					],
					"operation": [
						"DELETE Api V 1 Tenant"
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
						"Tenant"
					],
					"operation": [
						"DELETE Api V 1 Tenant"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/Tenant/{tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant"
					],
					"operation": [
						"GET Api V 1 Tenant"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant"
					],
					"operation": [
						"GET Api V 1 Tenant"
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
						"Tenant"
					],
					"operation": [
						"GET Api V 1 Tenant"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/Tenant/{tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant"
					],
					"operation": [
						"PUT Api V 1 Tenant"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant"
					],
					"operation": [
						"PUT Api V 1 Tenant"
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
						"Tenant"
					],
					"operation": [
						"PUT Api V 1 Tenant"
					]
				}
			}
		},
];
