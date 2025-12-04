---
sidebar_position: 3
title: Authentication
---

## Authentication against the REST API

The Argo Monitoring library needs a valid API key to authenticate against the service's REST API. Each API key gives access to a specific tenant. Once a valid key has been obtained, a monitoring service object may be initialized as follows:

```python
from argo_mon_library import ArgoMonitoringService
mon = ArgoMonitoringService(endpoint="mon_endpoint", apikey="your_api_key")
```

