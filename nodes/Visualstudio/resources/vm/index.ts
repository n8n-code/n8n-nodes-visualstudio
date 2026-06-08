import type { INodeProperties } from 'n8n-workflow';

export const vmDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					]
				}
			},
			"options": [
				{
					"name": "GET Api V 1 Tenant Pool Vm",
					"value": "GET Api V 1 Tenant Pool Vm",
					"action": "GET Api V 1 Tenant Pool Vm",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/pool/{{$parameter[\"poolName\"]}}/Vm"
						}
					}
				},
				{
					"name": "DELETE Api V 1 Tenant Pool Vm",
					"value": "DELETE Api V 1 Tenant Pool Vm",
					"action": "DELETE Api V 1 Tenant Pool Vm",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/pool/{{$parameter[\"poolName\"]}}/Vm/{{$parameter[\"vmName\"]}}"
						}
					}
				},
				{
					"name": "PUT Api V 1 Tenant Pool Vm",
					"value": "PUT Api V 1 Tenant Pool Vm",
					"action": "PUT Api V 1 Tenant Pool Vm",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/pool/{{$parameter[\"poolName\"]}}/Vm/{{$parameter[\"vmName\"]}}"
						}
					}
				},
				{
					"name": "POST Api V 1 Tenant Pool Vm Start",
					"value": "POST Api V 1 Tenant Pool Vm Start",
					"action": "POST Api V 1 Tenant Pool Vm Start",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/pool/{{$parameter[\"poolName\"]}}/Vm/{{$parameter[\"vmName\"]}}/start"
						}
					}
				},
				{
					"name": "POST Api V 1 Tenant Pool Vm Stop",
					"value": "POST Api V 1 Tenant Pool Vm Stop",
					"action": "POST Api V 1 Tenant Pool Vm Stop",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/pool/{{$parameter[\"poolName\"]}}/Vm/{{$parameter[\"vmName\"]}}/stop"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/tenant/{tenantId}/pool/{poolName}/Vm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					],
					"operation": [
						"GET Api V 1 Tenant Pool Vm"
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
						"Vm"
					],
					"operation": [
						"GET Api V 1 Tenant Pool Vm"
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
						"Vm"
					],
					"operation": [
						"GET Api V 1 Tenant Pool Vm"
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
						"Vm"
					],
					"operation": [
						"GET Api V 1 Tenant Pool Vm"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool Vm"
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
						"Vm"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool Vm"
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
						"Vm"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool Vm"
					]
				}
			}
		},
		{
			"displayName": "Vm Name",
			"name": "vmName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool Vm"
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
						"Vm"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool Vm"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Vm"
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
						"Vm"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Vm"
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
						"Vm"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Vm"
					]
				}
			}
		},
		{
			"displayName": "Vm Name",
			"name": "vmName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Vm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User",
			"name": "user",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Vm"
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
						"Vm"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Vm"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					],
					"operation": [
						"POST Api V 1 Tenant Pool Vm Start"
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
						"Vm"
					],
					"operation": [
						"POST Api V 1 Tenant Pool Vm Start"
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
						"Vm"
					],
					"operation": [
						"POST Api V 1 Tenant Pool Vm Start"
					]
				}
			}
		},
		{
			"displayName": "Vm Name",
			"name": "vmName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					],
					"operation": [
						"POST Api V 1 Tenant Pool Vm Start"
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
						"Vm"
					],
					"operation": [
						"POST Api V 1 Tenant Pool Vm Start"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					],
					"operation": [
						"POST Api V 1 Tenant Pool Vm Stop"
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
						"Vm"
					],
					"operation": [
						"POST Api V 1 Tenant Pool Vm Stop"
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
						"Vm"
					],
					"operation": [
						"POST Api V 1 Tenant Pool Vm Stop"
					]
				}
			}
		},
		{
			"displayName": "Vm Name",
			"name": "vmName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Vm"
					],
					"operation": [
						"POST Api V 1 Tenant Pool Vm Stop"
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
						"Vm"
					],
					"operation": [
						"POST Api V 1 Tenant Pool Vm Stop"
					]
				}
			}
		},
];
