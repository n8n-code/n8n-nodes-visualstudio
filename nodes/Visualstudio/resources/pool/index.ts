import type { INodeProperties } from 'n8n-workflow';

export const poolDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					]
				}
			},
			"options": [
				{
					"name": "DELETE Api V 1 Tenant Pool",
					"value": "DELETE Api V 1 Tenant Pool",
					"action": "DELETE Api V 1 Tenant Pool",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/Pool/{{$parameter[\"poolName\"]}}"
						}
					}
				},
				{
					"name": "GET Api V 1 Tenant Pool",
					"value": "GET Api V 1 Tenant Pool",
					"action": "GET Api V 1 Tenant Pool",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/Pool/{{$parameter[\"poolName\"]}}"
						}
					}
				},
				{
					"name": "PATCH Api V 1 Tenant Pool",
					"value": "PATCH Api V 1 Tenant Pool",
					"action": "PATCH Api V 1 Tenant Pool",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/Pool/{{$parameter[\"poolName\"]}}"
						}
					}
				},
				{
					"name": "PUT Api V 1 Tenant Pool",
					"value": "PUT Api V 1 Tenant Pool",
					"action": "PUT Api V 1 Tenant Pool",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/Pool/{{$parameter[\"poolName\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /api/v1/tenant/{tenantId}/Pool/{poolName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool"
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
						"Pool"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "Pool Name",
			"name": "poolName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool"
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
						"Pool"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/tenant/{tenantId}/Pool/{poolName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"GET Api V 1 Tenant Pool"
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
						"Pool"
					],
					"operation": [
						"GET Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "Pool Name",
			"name": "poolName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"GET Api V 1 Tenant Pool"
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
						"Pool"
					],
					"operation": [
						"GET Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/tenant/{tenantId}/Pool/{poolName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool"
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
						"Pool"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "Pool Name",
			"name": "poolName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "Domain User Credentials",
			"name": "domainUserCredentials",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "domainUserCredentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "Hot Pool Settings",
			"name": "hotPoolSettings",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "hotPoolSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Pool Group Name",
			"name": "poolGroupName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "poolGroupName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "User Group Name",
			"name": "userGroupName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userGroupName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Vm Specs",
			"name": "vmSpecs",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "vmSpecs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool"
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
						"Pool"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/tenant/{tenantId}/Pool/{poolName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool"
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
						"Pool"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "Pool Name",
			"name": "poolName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "Domain User Credentials",
			"name": "domainUserCredentials",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "domainUserCredentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "Hot Pool Settings",
			"name": "hotPoolSettings",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "hotPoolSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Pool Group Name",
			"name": "poolGroupName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "poolGroupName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"displayName": "User Group Name",
			"name": "userGroupName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userGroupName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Vm Specs",
			"name": "vmSpecs",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "vmSpecs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool"
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
						"Pool"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool"
					]
				}
			}
		},
];
