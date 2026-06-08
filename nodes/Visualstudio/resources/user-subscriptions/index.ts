import type { INodeProperties } from 'n8n-workflow';

export const userSubscriptionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User Subscriptions"
					]
				}
			},
			"options": [
				{
					"name": "DELETE Api V 1 User Subscriptions",
					"value": "DELETE Api V 1 User Subscriptions",
					"action": "DELETE Api V 1 User Subscriptions",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/UserSubscriptions"
						}
					}
				},
				{
					"name": "POST Api V 1 User Subscriptions",
					"value": "POST Api V 1 User Subscriptions",
					"action": "POST Api V 1 User Subscriptions",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/UserSubscriptions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /api/v1/UserSubscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User Subscriptions"
					],
					"operation": [
						"DELETE Api V 1 User Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Subscriptions"
					],
					"operation": [
						"DELETE Api V 1 User Subscriptions"
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
						"User Subscriptions"
					],
					"operation": [
						"DELETE Api V 1 User Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/UserSubscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User Subscriptions"
					],
					"operation": [
						"POST Api V 1 User Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Subscriptions"
					],
					"operation": [
						"POST Api V 1 User Subscriptions"
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
						"User Subscriptions"
					],
					"operation": [
						"POST Api V 1 User Subscriptions"
					]
				}
			}
		},
];
