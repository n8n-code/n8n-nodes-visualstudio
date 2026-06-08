import type { INodeProperties } from 'n8n-workflow';

export const environmentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					]
				}
			},
			"options": [
				{
					"name": "GET Api V 1 Environments",
					"value": "GET Api V 1 Environments",
					"action": "GET Api V 1 Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Environments"
						}
					}
				},
				{
					"name": "POST Api V 1 Environments",
					"value": "POST Api V 1 Environments",
					"action": "POST Api V 1 Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Environments"
						}
					}
				},
				{
					"name": "DELETE Api V 1 Environments",
					"value": "DELETE Api V 1 Environments",
					"action": "DELETE Api V 1 Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}"
						}
					}
				},
				{
					"name": "Get Environment Route",
					"value": "Get Environment Route",
					"action": "Get Environment Route",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Api V 1 Environments",
					"value": "PATCH Api V 1 Environments",
					"action": "PATCH Api V 1 Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}"
						}
					}
				},
				{
					"name": "Update Environment Route",
					"value": "Update Environment Route",
					"action": "Update Environment Route",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/_callback"
						}
					}
				},
				{
					"name": "GET Api V 1 Environments Archive",
					"value": "GET Api V 1 Environments Archive",
					"action": "GET Api V 1 Environments Archive",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/archive"
						}
					}
				},
				{
					"name": "POST Api V 1 Environments Archive",
					"value": "POST Api V 1 Environments Archive",
					"action": "POST Api V 1 Environments Archive",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/archive"
						}
					}
				},
				{
					"name": "POST Api V 1 Environments Export",
					"value": "POST Api V 1 Environments Export",
					"action": "POST Api V 1 Environments Export",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/export"
						}
					}
				},
				{
					"name": "PATCH Api V 1 Environments Folder",
					"value": "PATCH Api V 1 Environments Folder",
					"action": "PATCH Api V 1 Environments Folder",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/folder"
						}
					}
				},
				{
					"name": "GET Api V 1 Environments Heartbeattoken",
					"value": "GET Api V 1 Environments Heartbeattoken",
					"action": "GET Api V 1 Environments Heartbeattoken",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/heartbeattoken"
						}
					}
				},
				{
					"name": "POST Api V 1 Environments Notify",
					"value": "POST Api V 1 Environments Notify",
					"action": "POST Api V 1 Environments Notify",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/notify"
						}
					}
				},
				{
					"name": "DELETE Api V 1 Environments Ports",
					"value": "DELETE Api V 1 Environments Ports",
					"action": "DELETE Api V 1 Environments Ports",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/ports/{{$parameter[\"port\"]}}"
						}
					}
				},
				{
					"name": "PUT Api V 1 Environments Ports",
					"value": "PUT Api V 1 Environments Ports",
					"action": "PUT Api V 1 Environments Ports",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/ports/{{$parameter[\"port\"]}}"
						}
					}
				},
				{
					"name": "PATCH Api V 1 Environments Restore",
					"value": "PATCH Api V 1 Environments Restore",
					"action": "PATCH Api V 1 Environments Restore",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/restore"
						}
					}
				},
				{
					"name": "PUT Api V 1 Environments Secrets",
					"value": "PUT Api V 1 Environments Secrets",
					"action": "PUT Api V 1 Environments Secrets",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/secrets"
						}
					}
				},
				{
					"name": "POST Api V 1 Environments Shutdown",
					"value": "POST Api V 1 Environments Shutdown",
					"action": "POST Api V 1 Environments Shutdown",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/shutdown"
						}
					}
				},
				{
					"name": "POST Api V 1 Environments Start",
					"value": "POST Api V 1 Environments Start",
					"action": "POST Api V 1 Environments Start",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/start"
						}
					}
				},
				{
					"name": "GET Api V 1 Environments State",
					"value": "GET Api V 1 Environments State",
					"action": "GET Api V 1 Environments State",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/state"
						}
					}
				},
				{
					"name": "GET Api V 1 Environments Updates",
					"value": "GET Api V 1 Environments Updates",
					"action": "GET Api V 1 Environments Updates",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Environments/{{$parameter[\"environmentId\"]}}/updates"
						}
					}
				},
				{
					"name": "DELETE Api V 1 Geneva Actions Environments",
					"value": "DELETE Api V 1 Geneva Actions Environments",
					"action": "DELETE Api V 1 Geneva Actions Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/GenevaActions/Environments/{{$parameter[\"environmentId\"]}}"
						}
					}
				},
				{
					"name": "GET Api V 1 Geneva Actions Environments",
					"value": "GET Api V 1 Geneva Actions Environments",
					"action": "GET Api V 1 Geneva Actions Environments",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/GenevaActions/Environments/{{$parameter[\"environmentId\"]}}"
						}
					}
				},
				{
					"name": "PUT Api V 1 Geneva Actions Environments Archive",
					"value": "PUT Api V 1 Geneva Actions Environments Archive",
					"action": "PUT Api V 1 Geneva Actions Environments Archive",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/GenevaActions/Environments/{{$parameter[\"environmentId\"]}}/archive"
						}
					}
				},
				{
					"name": "GET Api V 1 Geneva Actions Environments Archived Storage Sas",
					"value": "GET Api V 1 Geneva Actions Environments Archived Storage Sas",
					"action": "GET Api V 1 Geneva Actions Environments Archived Storage Sas",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/GenevaActions/Environments/{{$parameter[\"environmentId\"]}}/archived_storage_sas/{{$parameter[\"targetBlob\"]}}"
						}
					}
				},
				{
					"name": "PUT Api V 1 Geneva Actions Environments Shutdown",
					"value": "PUT Api V 1 Geneva Actions Environments Shutdown",
					"action": "PUT Api V 1 Geneva Actions Environments Shutdown",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/GenevaActions/Environments/{{$parameter[\"environmentId\"]}}/shutdown"
						}
					}
				},
				{
					"name": "POST Api V 1 Geneva Actions Environments Upload Running Vm Logs",
					"value": "POST Api V 1 Geneva Actions Environments Upload Running Vm Logs",
					"action": "POST Api V 1 Geneva Actions Environments Upload Running Vm Logs",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Environments/{{$parameter[\"environmentId\"]}}/upload/running/vm/logs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/Environments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Deleted",
			"name": "deleted",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "deleted",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Environments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Access",
			"name": "access",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "access",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Analytics Tracking Id",
			"name": "analyticsTrackingId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "analyticsTrackingId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Auto Shutdown Delay Minutes",
			"name": "autoShutdownDelayMinutes",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "autoShutdownDelayMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Billable Owner",
			"name": "billableOwner",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "billableOwner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Connection",
			"name": "connection",
			"type": "json",
			"default": "{\n  \"hostPublicKeys\": [\n    null\n  ],\n  \"tunnelProperties\": {}\n}",
			"routing": {
				"send": {
					"property": "connection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Container Image",
			"name": "containerImage",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "containerImage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Create As Prebuild",
			"name": "createAsPrebuild",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "createAsPrebuild",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Dev Container Json",
			"name": "devContainerJson",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "devContainerJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Dev Container Path",
			"name": "devContainerPath",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "devContainerPath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Experimental Features",
			"name": "experimentalFeatures",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "experimentalFeatures",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Features",
			"name": "features",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "features",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Friendly Name",
			"name": "friendlyName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "friendlyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Git Hub Api Url",
			"name": "gitHubApiUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "gitHubApiUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Git Hub App Url",
			"name": "gitHubAppUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "gitHubAppUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Git Hub Pfs Auth Endpoint",
			"name": "gitHubPfsAuthEndpoint",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "gitHubPfsAuthEndpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Github Environment Endpoint",
			"name": "githubEnvironmentEndpoint",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "githubEnvironmentEndpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Has Devcontainer Json",
			"name": "hasDevcontainerJson",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "hasDevcontainerJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Netmon Correlation Data",
			"name": "netmonCorrelationData",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "netmonCorrelationData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Personalization",
			"name": "personalization",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "personalization",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Plan Id",
			"name": "planId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "planId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "platform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Runtime Constraints",
			"name": "runtimeConstraints",
			"type": "json",
			"default": "{\n  \"allowedPortPrivacySettings\": [\n    null\n  ],\n  \"imageAllowList\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "runtimeConstraints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Secrets",
			"name": "secrets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "secrets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Seed",
			"name": "seed",
			"type": "json",
			"default": "{\n  \"gitConfig\": {},\n  \"repository\": {}\n}",
			"routing": {
				"send": {
					"property": "seed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Sku Name",
			"name": "skuName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "skuName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Test Account",
			"name": "testAccount",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "testAccount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "User Tier",
			"name": "userTier",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userTier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Working Directory",
			"name": "workingDirectory",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "workingDirectory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/Environments/{environmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Environments"
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
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Environments"
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
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/Environments/{environmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Get Environment Route"
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
						"Environments"
					],
					"operation": [
						"Get Environment Route"
					]
				}
			}
		},
		{
			"displayName": "Connect",
			"name": "connect",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "connect",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Get Environment Route"
					]
				}
			}
		},
		{
			"displayName": "Pf Connect",
			"name": "pfConnect",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "pfConnect",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Get Environment Route"
					]
				}
			}
		},
		{
			"displayName": "Deleted",
			"name": "deleted",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "deleted",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Get Environment Route"
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
						"Environments"
					],
					"operation": [
						"Get Environment Route"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/Environments/{environmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments"
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
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Auto Shutdown Delay Minutes",
			"name": "autoShutdownDelayMinutes",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "autoShutdownDelayMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Failover Details",
			"name": "failoverDetails",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "failoverDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Friendly Name",
			"name": "friendlyName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "friendlyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Plan Access Token",
			"name": "planAccessToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "planAccessToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Plan Id",
			"name": "planId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "planId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "Sku Name",
			"name": "skuName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "skuName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments"
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
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Environments/{environmentId}/_callback",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Update Environment Route"
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
						"Environments"
					],
					"operation": [
						"Update Environment Route"
					]
				}
			}
		},
		{
			"displayName": "Payload",
			"name": "payload",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "payload",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Update Environment Route"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
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
						"Environments"
					],
					"operation": [
						"Update Environment Route"
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
						"Environments"
					],
					"operation": [
						"Update Environment Route"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/Environments/{environmentId}/archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments Archive"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments Archive"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments Archive"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Environments/{environmentId}/archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Archive"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Archive"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Archive"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Environments/{environmentId}/export",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Export"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Export"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Export"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/Environments/{environmentId}/folder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments Folder"
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
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments Folder"
					]
				}
			}
		},
		{
			"displayName": "Recent Folder Paths",
			"name": "recentFolderPaths",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "recentFolderPaths",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments Folder"
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
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments Folder"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/Environments/{environmentId}/heartbeattoken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments Heartbeattoken"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments Heartbeattoken"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments Heartbeattoken"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Environments/{environmentId}/notify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Notify"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Notify"
					]
				}
			}
		},
		{
			"displayName": "Details",
			"name": "details",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "details",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Notify"
					]
				}
			}
		},
		{
			"displayName": "Display Mode",
			"name": "displayMode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Notify"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Notify"
					]
				}
			}
		},
		{
			"displayName": "Modal",
			"name": "modal",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "modal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Notify"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Notify"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/Environments/{environmentId}/ports/{port}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Environments Ports"
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
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Environments Ports"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Environments Ports"
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
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Environments Ports"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/Environments/{environmentId}/ports/{port}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Environments Ports"
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
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Environments Ports"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Environments Ports"
					]
				}
			}
		},
		{
			"displayName": "Privacy",
			"name": "privacy",
			"type": "options",
			"default": "0 (Private)",
			"options": [
				{
					"name": "0 Private",
					"value": "0 (Private)"
				},
				{
					"name": "1 Public",
					"value": "1 (Public)"
				},
				{
					"name": "2 Org",
					"value": "2 (Org)"
				}
			],
			"routing": {
				"send": {
					"property": "privacy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Environments Ports"
					]
				}
			}
		},
		{
			"displayName": "Tunnel Type",
			"name": "tunnelType",
			"type": "options",
			"default": "0 (Basis)",
			"options": [
				{
					"name": "0 Basis",
					"value": "0 (Basis)"
				},
				{
					"name": "1 Liveshare",
					"value": "1 (Liveshare)"
				}
			],
			"routing": {
				"send": {
					"property": "tunnelType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Environments Ports"
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
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Environments Ports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/Environments/{environmentId}/restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments Restore"
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
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments Restore"
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
						"Environments"
					],
					"operation": [
						"PATCH Api V 1 Environments Restore"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/Environments/{environmentId}/secrets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Environments Secrets"
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
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Environments Secrets"
					]
				}
			}
		},
		{
			"displayName": "Secrets",
			"name": "secrets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "secrets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Environments Secrets"
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
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Environments Secrets"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Environments/{environmentId}/shutdown",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Shutdown"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Shutdown"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Shutdown"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Environments/{environmentId}/start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Start"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Start"
					]
				}
			}
		},
		{
			"displayName": "Access",
			"name": "access",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "access",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Start"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Environments Start"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/Environments/{environmentId}/state",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments State"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments State"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments State"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/Environments/{environmentId}/updates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments Updates"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments Updates"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Environments Updates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/GenevaActions/Environments/{environmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Environments"
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
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Environments"
					]
				}
			}
		},
		{
			"displayName": "Deletion Type",
			"name": "deletionType",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deletionType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Environments"
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
						"Environments"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Environments"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/GenevaActions/Environments/{environmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Environments"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Environments"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Environments"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/GenevaActions/Environments/{environmentId}/archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Geneva Actions Environments Archive"
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
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Geneva Actions Environments Archive"
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
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Geneva Actions Environments Archive"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/GenevaActions/Environments/{environmentId}/archived_storage_sas/{targetBlob}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Environments Archived Storage Sas"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Environments Archived Storage Sas"
					]
				}
			}
		},
		{
			"displayName": "Target Blob",
			"name": "targetBlob",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Environments Archived Storage Sas"
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
						"Environments"
					],
					"operation": [
						"GET Api V 1 Geneva Actions Environments Archived Storage Sas"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/GenevaActions/Environments/{environmentId}/shutdown",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Geneva Actions Environments Shutdown"
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
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Geneva Actions Environments Shutdown"
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
						"Environments"
					],
					"operation": [
						"PUT Api V 1 Geneva Actions Environments Shutdown"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Environments/{environmentId}/upload/running/vm/logs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Environments Upload Running Vm Logs"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Environments Upload Running Vm Logs"
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
						"Environments"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Environments Upload Running Vm Logs"
					]
				}
			}
		},
];
