import type { INodeProperties } from 'n8n-workflow';

export const prebuildsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 1 Geneva Actions Prebuilds Pools Createorupdatesettings",
					"value": "POST Api V 1 Geneva Actions Prebuilds Pools Createorupdatesettings",
					"action": "POST Api V 1 Geneva Actions Prebuilds Pools Createorupdatesettings",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings"
						}
					}
				},
				{
					"name": "POST Api V 1 Geneva Actions Prebuilds Pools Delete",
					"value": "POST Api V 1 Geneva Actions Prebuilds Pools Delete",
					"action": "POST Api V 1 Geneva Actions Prebuilds Pools Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/Prebuilds/pools/delete"
						}
					}
				},
				{
					"name": "POST Api V 1 Prebuilds Pools Instances",
					"value": "POST Api V 1 Prebuilds Pools Instances",
					"action": "POST Api V 1 Prebuilds Pools Instances",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/Prebuilds/pools/{{$parameter[\"poolId\"]}}/instances"
						}
					}
				},
				{
					"name": "PUT Api V 1 Prebuilds Pools Instances",
					"value": "PUT Api V 1 Prebuilds Pools Instances",
					"action": "PUT Api V 1 Prebuilds Pools Instances",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/Prebuilds/pools/{{$parameter[\"poolId\"]}}/instances"
						}
					}
				},
				{
					"name": "Get Template Info Route",
					"value": "Get Template Info Route",
					"action": "Get Template Info Route",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Prebuilds/template/{{$parameter[\"environmentId\"]}}"
						}
					}
				},
				{
					"name": "Get Prebuild Readiness Route",
					"value": "Get Prebuild Readiness Route",
					"action": "Get Prebuild Readiness Route",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Prebuilds/templates/repo/{{$parameter[\"repoId\"]}}/branch/{{$parameter[\"branchName\"]}}/hash/{{$parameter[\"prebuildHash\"]}}/location/{{$parameter[\"location\"]}}/skus"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Createorupdatesettings"
					]
				}
			}
		},
		{
			"displayName": "Branch Name",
			"name": "branchName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "branchName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Createorupdatesettings"
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
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Createorupdatesettings"
					]
				}
			}
		},
		{
			"displayName": "Pools",
			"name": "pools",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "pools",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Createorupdatesettings"
					]
				}
			}
		},
		{
			"displayName": "Repo Id",
			"name": "repoId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "repoId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Createorupdatesettings"
					]
				}
			}
		},
		{
			"displayName": "Storage Type",
			"name": "storageType",
			"type": "options",
			"default": "0 (V1)",
			"options": [
				{
					"name": "0 V 1",
					"value": "0 (V1)"
				},
				{
					"name": "1 V 2",
					"value": "1 (V2)"
				}
			],
			"routing": {
				"send": {
					"property": "storageType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Createorupdatesettings"
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
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Createorupdatesettings"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/GenevaActions/Prebuilds/pools/delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Delete"
					]
				}
			}
		},
		{
			"displayName": "Branch Name",
			"name": "branchName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "branchName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Delete"
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
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Delete"
					]
				}
			}
		},
		{
			"displayName": "Pools",
			"name": "pools",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "pools",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Delete"
					]
				}
			}
		},
		{
			"displayName": "Repo Id",
			"name": "repoId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "repoId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Delete"
					]
				}
			}
		},
		{
			"displayName": "Storage Type",
			"name": "storageType",
			"type": "options",
			"default": "0 (V1)",
			"options": [
				{
					"name": "0 V 1",
					"value": "0 (V1)"
				},
				{
					"name": "1 V 2",
					"value": "1 (V2)"
				}
			],
			"routing": {
				"send": {
					"property": "storageType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Delete"
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
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Prebuilds Pools Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/Prebuilds/pools/{poolId}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Prebuilds Pools Instances"
					]
				}
			}
		},
		{
			"displayName": "Pool Id",
			"name": "poolId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Prebuilds Pools Instances"
					]
				}
			}
		},
		{
			"displayName": "Environment Options",
			"name": "environmentOptions",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "environmentOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Prebuilds Pools Instances"
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
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Prebuilds Pools Instances"
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
						"Prebuilds"
					],
					"operation": [
						"POST Api V 1 Prebuilds Pools Instances"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/Prebuilds/pools/{poolId}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"PUT Api V 1 Prebuilds Pools Instances"
					]
				}
			}
		},
		{
			"displayName": "Pool Id",
			"name": "poolId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"PUT Api V 1 Prebuilds Pools Instances"
					]
				}
			}
		},
		{
			"displayName": "Environment Options",
			"name": "environmentOptions",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "environmentOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"PUT Api V 1 Prebuilds Pools Instances"
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
						"Prebuilds"
					],
					"operation": [
						"PUT Api V 1 Prebuilds Pools Instances"
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
						"Prebuilds"
					],
					"operation": [
						"PUT Api V 1 Prebuilds Pools Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/Prebuilds/template/{environmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"Get Template Info Route"
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
						"Prebuilds"
					],
					"operation": [
						"Get Template Info Route"
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
						"Prebuilds"
					],
					"operation": [
						"Get Template Info Route"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/Prebuilds/templates/repo/{repoId}/branch/{branchName}/hash/{prebuildHash}/location/{location}/skus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"Get Prebuild Readiness Route"
					]
				}
			}
		},
		{
			"displayName": "Repo Id",
			"name": "repoId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"Get Prebuild Readiness Route"
					]
				}
			}
		},
		{
			"displayName": "Branch Name",
			"name": "branchName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"Get Prebuild Readiness Route"
					]
				}
			}
		},
		{
			"displayName": "Prebuild Hash",
			"name": "prebuildHash",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"Get Prebuild Readiness Route"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"Get Prebuild Readiness Route"
					]
				}
			}
		},
		{
			"displayName": "Storage Type",
			"name": "storageType",
			"default": "0 (V1)",
			"type": "options",
			"options": [
				{
					"name": "0 V 1",
					"value": "0 (V1)"
				},
				{
					"name": "1 V 2",
					"value": "1 (V2)"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "storageType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds"
					],
					"operation": [
						"Get Prebuild Readiness Route"
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
						"Prebuilds"
					],
					"operation": [
						"Get Prebuild Readiness Route"
					]
				}
			}
		},
];
