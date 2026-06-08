import type { INodeProperties } from 'n8n-workflow';

export const poolGroupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					]
				}
			},
			"options": [
				{
					"name": "DELETE Api V 1 Tenant Pool Group",
					"value": "DELETE Api V 1 Tenant Pool Group",
					"action": "DELETE Api V 1 Tenant Pool Group",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/PoolGroup/{{$parameter[\"poolGroupName\"]}}"
						}
					}
				},
				{
					"name": "GET Api V 1 Tenant Pool Group",
					"value": "GET Api V 1 Tenant Pool Group",
					"action": "GET Api V 1 Tenant Pool Group",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/PoolGroup/{{$parameter[\"poolGroupName\"]}}"
						}
					}
				},
				{
					"name": "PATCH Api V 1 Tenant Pool Group",
					"value": "PATCH Api V 1 Tenant Pool Group",
					"action": "PATCH Api V 1 Tenant Pool Group",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/PoolGroup/{{$parameter[\"poolGroupName\"]}}"
						}
					}
				},
				{
					"name": "PUT Api V 1 Tenant Pool Group",
					"value": "PUT Api V 1 Tenant Pool Group",
					"action": "PUT Api V 1 Tenant Pool Group",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/tenant/{{$parameter[\"tenantId\"]}}/PoolGroup/{{$parameter[\"poolGroupName\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool Group"
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
						"Pool Group"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool Group"
					]
				}
			}
		},
		{
			"displayName": "Pool Group Name",
			"name": "poolGroupName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool Group"
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
						"Pool Group"
					],
					"operation": [
						"DELETE Api V 1 Tenant Pool Group"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"GET Api V 1 Tenant Pool Group"
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
						"Pool Group"
					],
					"operation": [
						"GET Api V 1 Tenant Pool Group"
					]
				}
			}
		},
		{
			"displayName": "Pool Group Name",
			"name": "poolGroupName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"GET Api V 1 Tenant Pool Group"
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
						"Pool Group"
					],
					"operation": [
						"GET Api V 1 Tenant Pool Group"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool Group"
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
						"Pool Group"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool Group"
					]
				}
			}
		},
		{
			"displayName": "Pool Group Name",
			"name": "poolGroupName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool Group"
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
						"Pool Group"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool Group"
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
						"Pool Group"
					],
					"operation": [
						"PATCH Api V 1 Tenant Pool Group"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Group"
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
						"Pool Group"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Group"
					]
				}
			}
		},
		{
			"displayName": "Pool Group Name",
			"name": "poolGroupName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Region",
			"name": "region",
			"type": "options",
			"default": "101 (EastAsia)",
			"options": [
				{
					"name": "101 East Asia",
					"value": "101 (EastAsia)"
				},
				{
					"name": "102 South East Asia",
					"value": "102 (SouthEastAsia)"
				},
				{
					"name": "201 Australia Central",
					"value": "201 (AustraliaCentral)"
				},
				{
					"name": "202 Australia Central 2",
					"value": "202 (AustraliaCentral2)"
				},
				{
					"name": "203 Australia East",
					"value": "203 (AustraliaEast)"
				},
				{
					"name": "205 Australia South East",
					"value": "205 (AustraliaSouthEast)"
				},
				{
					"name": "301 Brazil South",
					"value": "301 (BrazilSouth)"
				},
				{
					"name": "401 Canada Central",
					"value": "401 (CanadaCentral)"
				},
				{
					"name": "402 Canada East",
					"value": "402 (CanadaEast)"
				},
				{
					"name": "501 North Europe",
					"value": "501 (NorthEurope)"
				},
				{
					"name": "502 West Europe",
					"value": "502 (WestEurope)"
				},
				{
					"name": "601 France Central",
					"value": "601 (FranceCentral)"
				},
				{
					"name": "602 France South",
					"value": "602 (FranceSouth)"
				},
				{
					"name": "701 Central India",
					"value": "701 (CentralIndia)"
				},
				{
					"name": "702 South India",
					"value": "702 (SouthIndia)"
				},
				{
					"name": "703 West India",
					"value": "703 (WestIndia)"
				},
				{
					"name": "801 Japan East",
					"value": "801 (JapanEast)"
				},
				{
					"name": "802 Japan West",
					"value": "802 (JapanWest)"
				},
				{
					"name": "901 Korea Central",
					"value": "901 (KoreaCentral)"
				},
				{
					"name": "902 Korea South",
					"value": "902 (KoreaSouth)"
				},
				{
					"name": "1001 South Africa North",
					"value": "1001 (SouthAfricaNorth)"
				},
				{
					"name": "1002 South Africa West",
					"value": "1002 (SouthAfricaWest)"
				},
				{
					"name": "1201 Uae Central",
					"value": "1201 (UaeCentral)"
				},
				{
					"name": "1202 Uae North",
					"value": "1202 (UaeNorth)"
				},
				{
					"name": "1401 Uk South",
					"value": "1401 (UkSouth)"
				},
				{
					"name": "1402 Uk West",
					"value": "1402 (UkWest)"
				},
				{
					"name": "1501 Central Us",
					"value": "1501 (CentralUs)"
				},
				{
					"name": "1502 East Us",
					"value": "1502 (EastUs)"
				},
				{
					"name": "1503 East Us 2",
					"value": "1503 (EastUs2)"
				},
				{
					"name": "1504 North Central Us",
					"value": "1504 (NorthCentralUs)"
				},
				{
					"name": "1505 South Central Us",
					"value": "1505 (SouthCentralUs)"
				},
				{
					"name": "1506 West Central Us",
					"value": "1506 (WestCentralUs)"
				},
				{
					"name": "1507 West Us",
					"value": "1507 (WestUs)"
				},
				{
					"name": "1508 West Us 2",
					"value": "1508 (WestUs2)"
				},
				{
					"name": "1509 West Us 3",
					"value": "1509 (WestUs3)"
				},
				{
					"name": "1601 Central Us Euap",
					"value": "1601 (CentralUsEuap)"
				},
				{
					"name": "1602 East Us 2 Euap",
					"value": "1602 (EastUs2Euap)"
				},
				{
					"name": "1701 Switzerland North",
					"value": "1701 (SwitzerlandNorth)"
				},
				{
					"name": "1702 Switzerland West",
					"value": "1702 (SwitzerlandWest)"
				},
				{
					"name": "1801 Germany North",
					"value": "1801 (GermanyNorth)"
				},
				{
					"name": "1802 Germany West Central",
					"value": "1802 (GermanyWestCentral)"
				},
				{
					"name": "1901 Norway West",
					"value": "1901 (NorwayWest)"
				},
				{
					"name": "1902 Norway East",
					"value": "1902 (NorwayEast)"
				}
			],
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool Group"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Group"
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
						"Pool Group"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Group"
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
						"Pool Group"
					],
					"operation": [
						"PUT Api V 1 Tenant Pool Group"
					]
				}
			}
		},
];
