import type { INodeProperties } from 'n8n-workflow';

export const vnetPoolDefinitionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					]
				}
			},
			"options": [
				{
					"name": "DELETE Api V 1 Geneva Actions Vnet Pool Definitions",
					"value": "DELETE Api V 1 Geneva Actions Vnet Pool Definitions",
					"action": "DELETE Api V 1 Geneva Actions Vnet Pool Definitions",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/GenevaActions/VnetPoolDefinitions"
						}
					}
				},
				{
					"name": "POST Api V 1 Geneva Actions Vnet Pool Definitions",
					"value": "POST Api V 1 Geneva Actions Vnet Pool Definitions",
					"action": "POST Api V 1 Geneva Actions Vnet Pool Definitions",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/GenevaActions/VnetPoolDefinitions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /api/v1/GenevaActions/VnetPoolDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Dimensions",
			"name": "dimensions",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "dimensions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Enabled",
			"name": "isEnabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "isEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Location",
			"name": "location",
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
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"displayName": "Logical Skus",
			"name": "logicalSkus",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "logicalSkus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subtype",
			"name": "subtype",
			"type": "options",
			"default": "0 (Default)",
			"options": [
				{
					"name": "0 Default",
					"value": "0 (Default)"
				},
				{
					"name": "2 Shrunk Blob",
					"value": "2 (ShrunkBlob)"
				},
				{
					"name": "3 Full Blob",
					"value": "3 (FullBlob)"
				},
				{
					"name": "4 User Parameters Blob",
					"value": "4 (UserParametersBlob)"
				},
				{
					"name": "5 Prebuild Hash",
					"value": "5 (PrebuildHash)"
				},
				{
					"name": "6 Vnet Injected",
					"value": "6 (VnetInjected)"
				}
			],
			"routing": {
				"send": {
					"property": "subtype",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Target Count",
			"name": "targetCount",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "targetCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "1 (ComputeVM)",
			"options": [
				{
					"name": "1 Compute VM",
					"value": "1 (ComputeVM)"
				},
				{
					"name": "2 Storage File Share",
					"value": "2 (StorageFileShare)"
				},
				{
					"name": "3 Storage Archive",
					"value": "3 (StorageArchive)"
				},
				{
					"name": "4 Key Vault",
					"value": "4 (KeyVault)"
				},
				{
					"name": "5 OS Disk",
					"value": "5 (OSDisk)"
				},
				{
					"name": "6 Network Interface",
					"value": "6 (NetworkInterface)"
				},
				{
					"name": "7 Input Queue",
					"value": "7 (InputQueue)"
				},
				{
					"name": "8 Snapshot",
					"value": "8 (Snapshot)"
				},
				{
					"name": "9 Pool Queue",
					"value": "9 (PoolQueue)"
				},
				{
					"name": "10 Virtual Network",
					"value": "10 (VirtualNetwork)"
				},
				{
					"name": "11 Network Security Group",
					"value": "11 (NetworkSecurityGroup)"
				},
				{
					"name": "12 Live Share Workspace",
					"value": "12 (LiveShareWorkspace)"
				},
				{
					"name": "13 Basis Tunnel",
					"value": "13 (BasisTunnel)"
				},
				{
					"name": "14 Storage Block Blob",
					"value": "14 (StorageBlockBlob)"
				},
				{
					"name": "15 Data Disk",
					"value": "15 (DataDisk)"
				},
				{
					"name": "16 Port Forwarding Workspace",
					"value": "16 (PortForwardingWorkspace)"
				}
			],
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
						"Vnet Pool Definitions"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Vnet Pool Definitions"
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
						"Vnet Pool Definitions"
					],
					"operation": [
						"DELETE Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/GenevaActions/VnetPoolDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Dimensions",
			"name": "dimensions",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "dimensions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Enabled",
			"name": "isEnabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "isEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Location",
			"name": "location",
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
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"displayName": "Logical Skus",
			"name": "logicalSkus",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "logicalSkus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subtype",
			"name": "subtype",
			"type": "options",
			"default": "0 (Default)",
			"options": [
				{
					"name": "0 Default",
					"value": "0 (Default)"
				},
				{
					"name": "2 Shrunk Blob",
					"value": "2 (ShrunkBlob)"
				},
				{
					"name": "3 Full Blob",
					"value": "3 (FullBlob)"
				},
				{
					"name": "4 User Parameters Blob",
					"value": "4 (UserParametersBlob)"
				},
				{
					"name": "5 Prebuild Hash",
					"value": "5 (PrebuildHash)"
				},
				{
					"name": "6 Vnet Injected",
					"value": "6 (VnetInjected)"
				}
			],
			"routing": {
				"send": {
					"property": "subtype",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Target Count",
			"name": "targetCount",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "targetCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vnet Pool Definitions"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "1 (ComputeVM)",
			"options": [
				{
					"name": "1 Compute VM",
					"value": "1 (ComputeVM)"
				},
				{
					"name": "2 Storage File Share",
					"value": "2 (StorageFileShare)"
				},
				{
					"name": "3 Storage Archive",
					"value": "3 (StorageArchive)"
				},
				{
					"name": "4 Key Vault",
					"value": "4 (KeyVault)"
				},
				{
					"name": "5 OS Disk",
					"value": "5 (OSDisk)"
				},
				{
					"name": "6 Network Interface",
					"value": "6 (NetworkInterface)"
				},
				{
					"name": "7 Input Queue",
					"value": "7 (InputQueue)"
				},
				{
					"name": "8 Snapshot",
					"value": "8 (Snapshot)"
				},
				{
					"name": "9 Pool Queue",
					"value": "9 (PoolQueue)"
				},
				{
					"name": "10 Virtual Network",
					"value": "10 (VirtualNetwork)"
				},
				{
					"name": "11 Network Security Group",
					"value": "11 (NetworkSecurityGroup)"
				},
				{
					"name": "12 Live Share Workspace",
					"value": "12 (LiveShareWorkspace)"
				},
				{
					"name": "13 Basis Tunnel",
					"value": "13 (BasisTunnel)"
				},
				{
					"name": "14 Storage Block Blob",
					"value": "14 (StorageBlockBlob)"
				},
				{
					"name": "15 Data Disk",
					"value": "15 (DataDisk)"
				},
				{
					"name": "16 Port Forwarding Workspace",
					"value": "16 (PortForwardingWorkspace)"
				}
			],
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
						"Vnet Pool Definitions"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Vnet Pool Definitions"
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
						"Vnet Pool Definitions"
					],
					"operation": [
						"POST Api V 1 Geneva Actions Vnet Pool Definitions"
					]
				}
			}
		},
];
