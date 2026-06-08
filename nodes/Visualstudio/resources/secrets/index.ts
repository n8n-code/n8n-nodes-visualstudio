import type { INodeProperties } from 'n8n-workflow';

export const secretsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					]
				}
			},
			"options": [
				{
					"name": "GET Api V 1 Secrets",
					"value": "GET Api V 1 Secrets",
					"action": "GET Api V 1 Secrets",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Secrets"
						}
					}
				},
				{
					"name": "POST Api V 1 Secrets",
					"value": "POST Api V 1 Secrets",
					"action": "POST Api V 1 Secrets",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Secrets"
						}
					}
				},
				{
					"name": "DELETE Api V 1 Secrets",
					"value": "DELETE Api V 1 Secrets",
					"action": "DELETE Api V 1 Secrets",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/Secrets/{{$parameter[\"secretId\"]}}"
						}
					}
				},
				{
					"name": "PUT Api V 1 Secrets",
					"value": "PUT Api V 1 Secrets",
					"action": "PUT Api V 1 Secrets",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/Secrets/{{$parameter[\"secretId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/Secrets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"GET Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Plan Id",
			"name": "planId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "planId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"GET Api V 1 Secrets"
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
						"Secrets"
					],
					"operation": [
						"GET Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Secrets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"POST Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Plan Id",
			"name": "planId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "planId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"POST Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Filters",
			"name": "filters",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "filters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"POST Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"POST Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "options",
			"default": "1 (Plan)",
			"options": [
				{
					"name": "1 Plan",
					"value": "1 (Plan)"
				},
				{
					"name": "2 User",
					"value": "2 (User)"
				}
			],
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"POST Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Secret Name",
			"name": "secretName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "secretName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"POST Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "1 (EnvironmentVariable)",
			"options": [
				{
					"name": "1 Environment Variable",
					"value": "1 (EnvironmentVariable)"
				},
				{
					"name": "2 Container Registry",
					"value": "2 (ContainerRegistry)"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"POST Api V 1 Secrets"
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
						"Secrets"
					],
					"operation": [
						"POST Api V 1 Secrets"
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
						"Secrets"
					],
					"operation": [
						"POST Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/Secrets/{secretId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"DELETE Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Plan Id",
			"name": "planId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "planId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"DELETE Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"default": "1 (Plan)",
			"type": "options",
			"options": [
				{
					"name": "1 Plan",
					"value": "1 (Plan)"
				},
				{
					"name": "2 User",
					"value": "2 (User)"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"DELETE Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Secret Id",
			"name": "secretId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"DELETE Api V 1 Secrets"
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
						"Secrets"
					],
					"operation": [
						"DELETE Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/Secrets/{secretId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"PUT Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Plan Id",
			"name": "planId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "planId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"PUT Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Secret Id",
			"name": "secretId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"PUT Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Filters",
			"name": "filters",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "filters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"PUT Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"PUT Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "options",
			"default": "1 (Plan)",
			"options": [
				{
					"name": "1 Plan",
					"value": "1 (Plan)"
				},
				{
					"name": "2 User",
					"value": "2 (User)"
				}
			],
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"PUT Api V 1 Secrets"
					]
				}
			}
		},
		{
			"displayName": "Secret Name",
			"name": "secretName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "secretName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Secrets"
					],
					"operation": [
						"PUT Api V 1 Secrets"
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
						"Secrets"
					],
					"operation": [
						"PUT Api V 1 Secrets"
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
						"Secrets"
					],
					"operation": [
						"PUT Api V 1 Secrets"
					]
				}
			}
		},
];
