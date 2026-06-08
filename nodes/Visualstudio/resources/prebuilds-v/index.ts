import type { INodeProperties } from 'n8n-workflow';

export const prebuildsVDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					]
				}
			},
			"options": [
				{
					"name": "POST Api V 2 Prebuilds Delete",
					"value": "POST Api V 2 Prebuilds Delete",
					"action": "POST Api V 2 Prebuilds Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v2/prebuilds/delete"
						}
					}
				},
				{
					"name": "DELETE Api V 2 Prebuilds Repository Branch",
					"value": "DELETE Api V 2 Prebuilds Repository Branch",
					"action": "DELETE Api V 2 Prebuilds Repository Branch",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v2/prebuilds/repository/{{$parameter[\"repoId\"]}}/branch/{{$parameter[\"branchName\"]}}"
						}
					}
				},
				{
					"name": "POST Api V 2 Prebuilds Templates",
					"value": "POST Api V 2 Prebuilds Templates",
					"action": "POST Api V 2 Prebuilds Templates",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v2/prebuilds/templates"
						}
					}
				},
				{
					"name": "Get Prebuild Readiness Skus Route",
					"value": "Get Prebuild Readiness Skus Route",
					"action": "Get Prebuild Readiness Skus Route",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v2/prebuilds/templates/skus/repo/{{$parameter[\"repoId\"]}}/branch/{{$parameter[\"branchName\"]}}/hash/{{$parameter[\"prebuildHash\"]}}/location/{{$parameter[\"location\"]}}/devcontainerpath/{{$parameter[\"devContainerPath\"]}}"
						}
					}
				},
				{
					"name": "POST Api V 2 Prebuilds Templates Updatemaxversions",
					"value": "POST Api V 2 Prebuilds Templates Updatemaxversions",
					"action": "POST Api V 2 Prebuilds Templates Updatemaxversions",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v2/prebuilds/templates/updatemaxversions"
						}
					}
				},
				{
					"name": "POST Api V 2 Prebuilds Templates Updatestatus",
					"value": "POST Api V 2 Prebuilds Templates Updatestatus",
					"action": "POST Api V 2 Prebuilds Templates Updatestatus",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v2/prebuilds/templates/{{$parameter[\"templateId\"]}}/updatestatus"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v2/prebuilds/delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Delete"
					]
				}
			}
		},
		{
			"required": true,
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Delete"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Delete"
					]
				}
			}
		},
		{
			"displayName": "Prebuild Configuration Id",
			"name": "prebuildConfigurationId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "prebuildConfigurationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Delete"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Repo Id",
			"name": "repoId",
			"type": "number",
			"default": 0,
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Delete"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Delete"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v2/prebuilds/repository/{repoId}/branch/{branchName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"DELETE Api V 2 Prebuilds Repository Branch"
					]
				}
			}
		},
		{
			"displayName": "Repo Id",
			"name": "repoId",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"DELETE Api V 2 Prebuilds Repository Branch"
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
						"Prebuilds V"
					],
					"operation": [
						"DELETE Api V 2 Prebuilds Repository Branch"
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
						"Prebuilds V"
					],
					"operation": [
						"DELETE Api V 2 Prebuilds Repository Branch"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v2/prebuilds/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates"
					]
				}
			}
		},
		{
			"displayName": "Template Info",
			"name": "templateInfo",
			"type": "json",
			"default": "{\n  \"container\": {}\n}",
			"routing": {
				"send": {
					"property": "templateInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v2/prebuilds/templates/skus/repo/{repoId}/branch/{branchName}/hash/{prebuildHash}/location/{location}/devcontainerpath/{devContainerPath}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"Get Prebuild Readiness Skus Route"
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
						"Prebuilds V"
					],
					"operation": [
						"Get Prebuild Readiness Skus Route"
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
						"Prebuilds V"
					],
					"operation": [
						"Get Prebuild Readiness Skus Route"
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
						"Prebuilds V"
					],
					"operation": [
						"Get Prebuild Readiness Skus Route"
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
						"Prebuilds V"
					],
					"operation": [
						"Get Prebuild Readiness Skus Route"
					]
				}
			}
		},
		{
			"displayName": "Dev Container Path",
			"name": "devContainerPath",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"Get Prebuild Readiness Skus Route"
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
						"Prebuilds V"
					],
					"operation": [
						"Get Prebuild Readiness Skus Route"
					]
				}
			}
		},
		{
			"displayName": "Fast Path Enabled",
			"name": "fastPathEnabled",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fastPathEnabled",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"Get Prebuild Readiness Skus Route"
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
						"Prebuilds V"
					],
					"operation": [
						"Get Prebuild Readiness Skus Route"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v2/prebuilds/templates/updatemaxversions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates Updatemaxversions"
					]
				}
			}
		},
		{
			"required": true,
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates Updatemaxversions"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates Updatemaxversions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Max Prebuild Template Versions",
			"name": "maxPrebuildTemplateVersions",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "maxPrebuildTemplateVersions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates Updatemaxversions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Repo Id",
			"name": "repoId",
			"type": "number",
			"default": 0,
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates Updatemaxversions"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates Updatemaxversions"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v2/prebuilds/templates/{templateId}/updatestatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates Updatestatus"
					]
				}
			}
		},
		{
			"displayName": "Template Id",
			"name": "templateId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates Updatestatus"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Success",
			"name": "isSuccess",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "isSuccess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates Updatestatus"
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
						"Prebuilds V"
					],
					"operation": [
						"POST Api V 2 Prebuilds Templates Updatestatus"
					]
				}
			}
		},
];
