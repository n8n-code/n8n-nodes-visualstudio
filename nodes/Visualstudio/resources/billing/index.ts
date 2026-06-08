import type { INodeProperties } from 'n8n-workflow';

export const billingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 1 Geneva Actions Billing Resend",
					"value": "POST Api V 1 Geneva Actions Billing Resend",
					"action": "POST Api V 1 Geneva Actions Billing Resend",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Billing/resend"
						}
					}
				},
				{
					"name": "GET Api V 1 Geneva Actions Billing",
					"value": "GET Api V 1 Geneva Actions Billing",
					"action": "GET Api V 1 Geneva Actions Billing",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/GenevaActions/Billing/{{$parameter[\"environmentId\"]}}"
						}
					}
				},
				{
					"name": "GET Api V 1 Geneva Actions Billing State Changes",
					"value": "GET Api V 1 Geneva Actions Billing State Changes",
					"action": "GET Api V 1 Geneva Actions Billing State Changes",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/GenevaActions/Billing/{{$parameter[\"environmentId\"]}}/state-changes"
						}
					}
				},
				{
					"name": "POST Api V 1 Geneva Actions Billing State Changes",
					"value": "POST Api V 1 Geneva Actions Billing State Changes",
					"action": "POST Api V 1 Geneva Actions Billing State Changes",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Billing/{{$parameter[\"environmentId\"]}}/state-changes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Billing/resend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Billing Resend"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "endTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Billing Resend"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "startTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Billing Resend"
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
						"Billing"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Billing Resend"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/GenevaActions/Billing/{environmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Billing"
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
						"Billing"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Billing"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "startTime",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Billing"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "endTime",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Billing"
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
						"Billing"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Billing"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/GenevaActions/Billing/{environmentId}/state-changes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Billing State Changes"
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
						"Billing"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Billing State Changes"
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
						"Billing"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Billing State Changes"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Billing/{environmentId}/state-changes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Billing State Changes"
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
						"Billing"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Billing State Changes"
					]
				}
			}
		},
		{
			"displayName": "New Value",
			"name": "newValue",
			"type": "options",
			"default": "0 (None)",
			"options": [
				{
					"name": "0 None",
					"value": "0 (None)"
				},
				{
					"name": "1 Created",
					"value": "1 (Created)"
				},
				{
					"name": "2 Queued",
					"value": "2 (Queued)"
				},
				{
					"name": "3 Provisioning",
					"value": "3 (Provisioning)"
				},
				{
					"name": "4 Available",
					"value": "4 (Available)"
				},
				{
					"name": "5 Awaiting",
					"value": "5 (Awaiting)"
				},
				{
					"name": "6 Unavailable",
					"value": "6 (Unavailable)"
				},
				{
					"name": "7 Deleted",
					"value": "7 (Deleted)"
				},
				{
					"name": "8 Moved",
					"value": "8 (Moved)"
				},
				{
					"name": "9 Shutdown",
					"value": "9 (Shutdown)"
				},
				{
					"name": "10 Archived",
					"value": "10 (Archived)"
				},
				{
					"name": "11 Starting",
					"value": "11 (Starting)"
				},
				{
					"name": "12 Shutting Down",
					"value": "12 (ShuttingDown)"
				},
				{
					"name": "13 Failed",
					"value": "13 (Failed)"
				},
				{
					"name": "14 Exporting",
					"value": "14 (Exporting)"
				},
				{
					"name": "15 Updating",
					"value": "15 (Updating)"
				},
				{
					"name": "16 Rebuilding",
					"value": "16 (Rebuilding)"
				}
			],
			"routing": {
				"send": {
					"property": "newValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Billing State Changes"
					]
				}
			}
		},
		{
			"displayName": "Old Value",
			"name": "oldValue",
			"type": "options",
			"default": "0 (None)",
			"options": [
				{
					"name": "0 None",
					"value": "0 (None)"
				},
				{
					"name": "1 Created",
					"value": "1 (Created)"
				},
				{
					"name": "2 Queued",
					"value": "2 (Queued)"
				},
				{
					"name": "3 Provisioning",
					"value": "3 (Provisioning)"
				},
				{
					"name": "4 Available",
					"value": "4 (Available)"
				},
				{
					"name": "5 Awaiting",
					"value": "5 (Awaiting)"
				},
				{
					"name": "6 Unavailable",
					"value": "6 (Unavailable)"
				},
				{
					"name": "7 Deleted",
					"value": "7 (Deleted)"
				},
				{
					"name": "8 Moved",
					"value": "8 (Moved)"
				},
				{
					"name": "9 Shutdown",
					"value": "9 (Shutdown)"
				},
				{
					"name": "10 Archived",
					"value": "10 (Archived)"
				},
				{
					"name": "11 Starting",
					"value": "11 (Starting)"
				},
				{
					"name": "12 Shutting Down",
					"value": "12 (ShuttingDown)"
				},
				{
					"name": "13 Failed",
					"value": "13 (Failed)"
				},
				{
					"name": "14 Exporting",
					"value": "14 (Exporting)"
				},
				{
					"name": "15 Updating",
					"value": "15 (Updating)"
				},
				{
					"name": "16 Rebuilding",
					"value": "16 (Rebuilding)"
				}
			],
			"routing": {
				"send": {
					"property": "oldValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Billing State Changes"
					]
				}
			}
		},
		{
			"displayName": "Time",
			"name": "time",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "time",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Billing State Changes"
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
						"Billing"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Billing State Changes"
					]
				}
			}
		},
];
