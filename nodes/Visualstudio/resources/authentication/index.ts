import type { INodeProperties } from 'n8n-workflow';

export const authenticationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					]
				}
			},
			"options": [
				{
					"name": "GET Tunnelauth",
					"value": "GET Tunnelauth",
					"action": "GET Tunnelauth",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tunnelauth"
						}
					}
				},
				{
					"name": "POST Tunnelauth",
					"value": "POST Tunnelauth",
					"action": "POST Tunnelauth",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tunnelauth"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /tunnelauth",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"GET Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"GET Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "Cluster",
			"name": "cluster",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"GET Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"GET Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "port",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"GET Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "Pb",
			"name": "pb",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pb",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"GET Tunnelauth"
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
						"Authentication"
					],
					"operation": [
						"GET Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "POST /tunnelauth",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"POST Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "Op",
			"name": "op",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "op",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"POST Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"POST Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "Cluster",
			"name": "cluster",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"POST Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"POST Tunnelauth"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "port",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"POST Tunnelauth"
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
						"Authentication"
					],
					"operation": [
						"POST Tunnelauth"
					]
				}
			}
		},
];
