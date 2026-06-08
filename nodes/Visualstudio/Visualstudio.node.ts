import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { agentTelemetryDescription } from './resources/agent-telemetry';
import { agentsDescription } from './resources/agents';
import { environmentsDescription } from './resources/environments';
import { billingDescription } from './resources/billing';
import { configurationDescription } from './resources/configuration';
import { poolsDescription } from './resources/pools';
import { prebuildsDescription } from './resources/prebuilds';
import { privacyDescription } from './resources/privacy';
import { resourcesDescription } from './resources/resources';
import { vnetPoolDefinitionsDescription } from './resources/vnet-pool-definitions';
import { heartBeatDescription } from './resources/heart-beat';
import { locationsDescription } from './resources/locations';
import { sasDescription } from './resources/sas';
import { secretsDescription } from './resources/secrets';
import { tenantDescription } from './resources/tenant';
import { tokensDescription } from './resources/tokens';
import { tunnelDescription } from './resources/tunnel';
import { userSubscriptionsDescription } from './resources/user-subscriptions';
import { networkSettingsDescription } from './resources/network-settings';
import { plansDescription } from './resources/plans';
import { poolDescription } from './resources/pool';
import { poolGroupDescription } from './resources/pool-group';
import { vmDescription } from './resources/vm';
import { prebuildsVDescription } from './resources/prebuilds-v';
import { healthDescription } from './resources/health';
import { netmonDescription } from './resources/netmon';
import { authenticationDescription } from './resources/authentication';
import { warmupDescription } from './resources/warmup';

export class Visualstudio implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'visualstudio',
		name: 'N8nDevVisualstudio',
		icon: { light: 'file:./visualstudio.svg', dark: 'file:./visualstudio.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Public APIs for managing VS Codespaces',
		defaults: { name: 'visualstudio' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVisualstudioApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Agent Telemetry",
					"value": "Agent Telemetry",
					"description": ""
				},
				{
					"name": "Agents",
					"value": "Agents",
					"description": ""
				},
				{
					"name": "Environments",
					"value": "Environments",
					"description": ""
				},
				{
					"name": "Billing",
					"value": "Billing",
					"description": ""
				},
				{
					"name": "Configuration",
					"value": "Configuration",
					"description": ""
				},
				{
					"name": "Pools",
					"value": "Pools",
					"description": ""
				},
				{
					"name": "Prebuilds",
					"value": "Prebuilds",
					"description": ""
				},
				{
					"name": "Privacy",
					"value": "Privacy",
					"description": ""
				},
				{
					"name": "Resources",
					"value": "Resources",
					"description": ""
				},
				{
					"name": "Vnet Pool Definitions",
					"value": "Vnet Pool Definitions",
					"description": ""
				},
				{
					"name": "Heart Beat",
					"value": "Heart Beat",
					"description": ""
				},
				{
					"name": "Locations",
					"value": "Locations",
					"description": ""
				},
				{
					"name": "Sas",
					"value": "Sas",
					"description": ""
				},
				{
					"name": "Secrets",
					"value": "Secrets",
					"description": ""
				},
				{
					"name": "Tenant",
					"value": "Tenant",
					"description": ""
				},
				{
					"name": "Tokens",
					"value": "Tokens",
					"description": ""
				},
				{
					"name": "Tunnel",
					"value": "Tunnel",
					"description": ""
				},
				{
					"name": "User Subscriptions",
					"value": "User Subscriptions",
					"description": ""
				},
				{
					"name": "Network Settings",
					"value": "Network Settings",
					"description": ""
				},
				{
					"name": "Plans",
					"value": "Plans",
					"description": ""
				},
				{
					"name": "Pool",
					"value": "Pool",
					"description": ""
				},
				{
					"name": "Pool Group",
					"value": "Pool Group",
					"description": ""
				},
				{
					"name": "Vm",
					"value": "Vm",
					"description": ""
				},
				{
					"name": "Prebuilds V",
					"value": "Prebuilds V",
					"description": ""
				},
				{
					"name": "Health",
					"value": "Health",
					"description": ""
				},
				{
					"name": "Netmon",
					"value": "Netmon",
					"description": ""
				},
				{
					"name": "Authentication",
					"value": "Authentication",
					"description": ""
				},
				{
					"name": "Warmup",
					"value": "Warmup",
					"description": ""
				}
			],
			"default": ""
		},
		...agentTelemetryDescription,
		...agentsDescription,
		...environmentsDescription,
		...billingDescription,
		...configurationDescription,
		...poolsDescription,
		...prebuildsDescription,
		...privacyDescription,
		...resourcesDescription,
		...vnetPoolDefinitionsDescription,
		...heartBeatDescription,
		...locationsDescription,
		...sasDescription,
		...secretsDescription,
		...tenantDescription,
		...tokensDescription,
		...tunnelDescription,
		...userSubscriptionsDescription,
		...networkSettingsDescription,
		...plansDescription,
		...poolDescription,
		...poolGroupDescription,
		...vmDescription,
		...prebuildsVDescription,
		...healthDescription,
		...netmonDescription,
		...authenticationDescription,
		...warmupDescription
		],
	};
}
