import type { INodeProperties } from 'n8n-workflow';

export const agentTelemetryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Telemetry"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 1 Agent Telemetry",
					"value": "POST Api V 1 Agent Telemetry",
					"action": "POST Api V 1 Agent Telemetry",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/AgentTelemetry"
						}
					}
				},
				{
					"name": "POST Api V 1 Agent Telemetry Standalone",
					"value": "POST Api V 1 Agent Telemetry Standalone",
					"action": "POST Api V 1 Agent Telemetry Standalone",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/AgentTelemetry/standalone"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/AgentTelemetry",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Telemetry"
					],
					"operation": [
						"POST Api V 1 Agent Telemetry"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Telemetry"
					],
					"operation": [
						"POST Api V 1 Agent Telemetry"
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
						"Agent Telemetry"
					],
					"operation": [
						"POST Api V 1 Agent Telemetry"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/AgentTelemetry/standalone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Telemetry"
					],
					"operation": [
						"POST Api V 1 Agent Telemetry Standalone"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Telemetry"
					],
					"operation": [
						"POST Api V 1 Agent Telemetry Standalone"
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
						"Agent Telemetry"
					],
					"operation": [
						"POST Api V 1 Agent Telemetry Standalone"
					]
				}
			}
		},
];
