# @n8n-dev/n8n-nodes-visualstudio

![visualstudio Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-visualstudio.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-visualstudio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing visualstudio API integrations by hand.**

Every time you connect n8n to visualstudio, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to visualstudio took 5 minutes, not half a day?**

This node gives you **28+ resources** out of the box: **Agent Telemetry**, **Agents**, **Environments**, **Billing**, **Configuration**, and 23 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-visualstudio
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-visualstudio`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **visualstudio API** → paste your API key
3. Drag the **visualstudio** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Agent Telemetry | Post api v 1 agent telemetry, Post api v 1 agent telemetry standalone |
| Agents | Get api v 1 agents |
| Environments | Get api v 1 environments, Post api v 1 environments, Delete api v 1 environments, Get environment route, Patch api v 1 environments, Post update environment route, Get api v 1 environments archive, Post api v 1 environments archive, Post api v 1 environments export, Patch api v 1 environments folder, Get api v 1 environments heartbeattoken, Post api v 1 environments notify, Delete api v 1 environments ports, Put api v 1 environments ports, Patch api v 1 environments restore, Put api v 1 environments secrets, Post api v 1 environments shutdown, Post api v 1 environments start, Get api v 1 environments state, Get api v 1 environments updates, Delete api v 1 geneva actions environments, Get api v 1 geneva actions environments, Put api v 1 geneva actions environments archive, Get api v 1 geneva actions environments archived storage sas, Put api v 1 geneva actions environments shutdown, Post api v 1 geneva actions environments upload running vm logs |
| Billing | Post api v 1 geneva actions billing resend, Get api v 1 geneva actions billing, Get api v 1 geneva actions billing state changes, Post api v 1 geneva actions billing state changes |
| Configuration | Post api v 1 geneva actions configuration, Delete api v 1 geneva actions configuration, Get api v 1 geneva actions configuration |
| Pools | Post api v 1 geneva actions pools change resource deletion setting, Post api v 1 geneva actions pools rotate pool, Post api v 1 geneva actions pools, Get api v 1 pools default |
| Prebuilds | Post api v 1 geneva actions prebuilds pools createorupdatesettings, Post api v 1 geneva actions prebuilds pools delete, Post api v 1 prebuilds pools instances, Put api v 1 prebuilds pools instances, Get template info route, Get prebuild readiness route |
| Privacy | Post api v 1 geneva actions privacy refresh profile telemetry properties |
| Resources | Post api v 1 geneva actions resources under investigation |
| Vnet Pool Definitions | Delete api v 1 geneva actions vnet pool definitions, Post api v 1 geneva actions vnet pool definitions |
| Heart Beat | Post api v 1 heart beat |
| Locations | Get api v 1 locations |
| Sas | Get api v 1 sas |
| Secrets | Get api v 1 secrets, Post api v 1 secrets, Delete api v 1 secrets, Put api v 1 secrets |
| Tenant | Delete api v 1 tenant, Get api v 1 tenant, Put api v 1 tenant |
| Tokens | Post api v 1 tokens plans delete all codespaces, Post api v 1 tokens plans read all codespaces, Post api v 1 tokens plans write codespaces, Post api v 1 tokens plans write delegates, Put api v 1 tokens subscriptions resource groups providers plans, Post api v 1 tokens subscriptions resource groups providers plans delete all codespaces, Post api v 1 tokens subscriptions resource groups providers plans delete all environments, Post api v 1 tokens subscriptions resource groups providers plans read all codespaces, Post api v 1 tokens subscriptions resource groups providers plans read all environments, Post api v 1 tokens subscriptions resource groups providers plans write codespaces, Post api v 1 tokens subscriptions resource groups providers plans write delegates, Post api v 1 tokens subscriptions resource groups providers plans write environments |
| Tunnel | Get api v 1 tunnel port info |
| User Subscriptions | Delete api v 1 user subscriptions, Post api v 1 user subscriptions |
| Network Settings | Put api v 1 subscriptions providers git hub network subscription life cycle notification, Post api v 1 subscriptions providers git hub network resource read begin, Post api v 1 subscriptions resource groups providers git hub network resource read begin, Delete api v 1 subscriptions resource groups providers git hub network, Patch api v 1 subscriptions resource groups providers git hub network, Put api v 1 subscriptions resource groups providers git hub network, Post api v 1 subscriptions resource groups providers git hub network resource creation completed, Post api v 1 subscriptions resource groups providers git hub network resource creation validate, Post api v 1 subscriptions resource groups providers git hub network resource deletion completed, Post api v 1 subscriptions resource groups providers git hub network resource deletion validate, Post api v 1 subscriptions resource groups providers git hub network resource patch completed, Post api v 1 subscriptions resource groups providers git hub network resource patch validate |
| Plans | Put api v 1 subscriptions providers microsoft codespaces plans subscription life cycle notification, Post api v 1 subscriptions providers microsoft codespaces plans resource read begin, Put api v 1 subscriptions providers microsoft vs online plans subscription life cycle notification, Post api v 1 subscriptions providers microsoft vs online plans resource read begin, Post api v 1 subscriptions resource groups providers microsoft codespaces plans resource read begin, Put api v 1 subscriptions resource groups providers microsoft codespaces plans, Post api v 1 subscriptions resource groups providers microsoft codespaces plans delete all codespaces, Post api v 1 subscriptions resource groups providers microsoft codespaces plans delete all environments, Post api v 1 subscriptions resource groups providers microsoft codespaces plans read all codespaces, Post api v 1 subscriptions resource groups providers microsoft codespaces plans read all environments, Post api v 1 subscriptions resource groups providers microsoft codespaces plans read delegates, Post api v 1 subscriptions resource groups providers microsoft codespaces plans resource creation completed, Post api v 1 subscriptions resource groups providers microsoft codespaces plans resource creation validate, Post api v 1 subscriptions resource groups providers microsoft codespaces plans resource deletion validate, Post api v 1 subscriptions resource groups providers microsoft codespaces plans resource patch completed, Post api v 1 subscriptions resource groups providers microsoft codespaces plans resource patch validate, Post api v 1 subscriptions resource groups providers microsoft codespaces plans write codespaces, Post api v 1 subscriptions resource groups providers microsoft codespaces plans write delegates, Post api v 1 subscriptions resource groups providers microsoft codespaces plans write environments, Post api v 1 subscriptions resource groups providers microsoft vs online plans resource read begin, Put api v 1 subscriptions resource groups providers microsoft vs online plans, Post api v 1 subscriptions resource groups providers microsoft vs online plans delete all codespaces, Post api v 1 subscriptions resource groups providers microsoft vs online plans delete all environments, Post api v 1 subscriptions resource groups providers microsoft vs online plans read all codespaces, Post api v 1 subscriptions resource groups providers microsoft vs online plans read all environments, Post api v 1 subscriptions resource groups providers microsoft vs online plans read delegates, Post api v 1 subscriptions resource groups providers microsoft vs online plans resource creation completed, Post api v 1 subscriptions resource groups providers microsoft vs online plans resource creation validate, Post api v 1 subscriptions resource groups providers microsoft vs online plans resource deletion validate, Post api v 1 subscriptions resource groups providers microsoft vs online plans resource patch completed, Post api v 1 subscriptions resource groups providers microsoft vs online plans resource patch validate, Post api v 1 subscriptions resource groups providers microsoft vs online plans write codespaces, Post api v 1 subscriptions resource groups providers microsoft vs online plans write delegates, Post api v 1 subscriptions resource groups providers microsoft vs online plans write environments, Post api v 1 subscriptions providers microsoft codespaces plans delete delegates, Post api v 1 subscriptions providers microsoft vs online plans delete delegates |
| Pool | Delete api v 1 tenant pool, Get api v 1 tenant pool, Patch api v 1 tenant pool, Put api v 1 tenant pool |
| Pool Group | Delete api v 1 tenant pool group, Get api v 1 tenant pool group, Patch api v 1 tenant pool group, Put api v 1 tenant pool group |
| Vm | Get api v 1 tenant pool vm, Delete api v 1 tenant pool vm, Put api v 1 tenant pool vm, Post api v 1 tenant pool vm start, Post api v 1 tenant pool vm stop |
| Prebuilds V | Post api v 2 prebuilds delete, Delete api v 2 prebuilds repository branch, Post api v 2 prebuilds templates, Get prebuild readiness skus route, Post api v 2 prebuilds templates updatemaxversions, Post api v 2 prebuilds templates updatestatus |
| Health | Get health |
| Netmon | Get internal netmon correlation |
| Authentication | Get tunnelauth, Post tunnelauth |
| Warmup | Get warmup |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from visualstudio docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official visualstudio OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **visualstudio** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the visualstudio API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
