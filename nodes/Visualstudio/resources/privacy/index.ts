import type { INodeProperties } from 'n8n-workflow';

export const privacyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privacy"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 1 Geneva Actions Privacy Refresh Profile Telemetry Properties",
					"value": "POST Api V 1 Geneva Actions Privacy Refresh Profile Telemetry Properties",
					"action": "POST Api V 1 Geneva Actions Privacy Refresh Profile Telemetry Properties",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privacy"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Privacy Refresh Profile Telemetry Properties"
					]
				}
			}
		},
		{
			"displayName": "Partner",
			"name": "partner",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "partner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privacy"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Privacy Refresh Profile Telemetry Properties"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privacy"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Privacy Refresh Profile Telemetry Properties"
					]
				}
			}
		},
		{
			"displayName": "User Ids",
			"name": "userIds",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privacy"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Privacy Refresh Profile Telemetry Properties"
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
						"Privacy"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Privacy Refresh Profile Telemetry Properties"
					]
				}
			}
		},
];
