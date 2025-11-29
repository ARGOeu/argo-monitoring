---
sidebar_position: 4
title: Examples
---

## Overview

In the [examples](https://github.com/ARGOeu/argo-mon-library/tree/main/examples) folder, you may find the following library usage examples:

* getting a list of reports for a tenant
* getting endpoint statuses
* getting A/R results
* getting information on issues
* getting metric results for an endpoint
* getting flapping trends

Help on running each example is available by running the example with `-h`.

## Examples location

Depending on your method of installation, the `examples` folder may reside in one of several locations:

- `/usr/share/doc/python3-argo-mon-library/examples` for RPM installations using the platform Python
- `/usr/share/doc/python3.XY-argo-mon-library/examples` for RPM installations using a specific Python version
- `/usr/local/lib/python3.XY/site-packages/argo_mon_library/examples` for global (root) PyPI installations
- `~/.local/lib/python3.XY/site-packages/argo_mon_library/examples` for local (user) PyPI installations
- `VENV/lib/python3.XY/site-packages/argo_mon_library/examples` for venv PyPI installations, where `VENV` is the virtual enviroment's base directory
- `SRC/examples` for installations from source, where `SRC` is the base directory of the checked-out codebase

## Listing reports

[This example](https://github.com/ARGOeu/argo-mon-library/blob/main/examples/get_reports.py) will print out a list of reports for the tenant, along with some information about the report, such as thresholds and the topology schema group hierarchy.

#### Running the example in the terminal (Bash)

To test it, assuming you've saved your API key in a file under `~/mon.key`, you may run the example against the development instance of the service by navigating to the installation's `examples` folder and executing

```bash
$ python3 ./examples/get_reports.py --host api.devel.mon.argo.grnet.gr --api-key ~/mon.key -f
```

#### Python code rundown

The following Python code snippet from the example

- initializes a connection to the API, using a tenant API key (`mon = ArgoMonitoringService…`)
- loops over the tenant's reports to print out report and threshold data (`for m in mon.reports`)
- walks the topology\_schema in each report, to print out group types (`while g is not None`)


```python
from argo_mon_library import ArgoMonitoringService

mon = ArgoMonitoringService(args.host, api_key)
    i = 0
    for m in mon.reports:
        i += 1
        print("Report #{0}".format(i))
        print("  ID: {0}".format(m.id))
        print("  Name: {0}".format(m.name))
        print("  Description: {0}".format(m.description))
        print("  Thresholds:")
        print("    - Availability: {0}%".format(m.thresholds.availability))
        print("    - Reliability: {0}%".format(m.thresholds.reliability))
        print("    - Uptime: {0}".format(m.thresholds.uptime))
        print("    - Unknown: {0}".format(m.thresholds.unknown))
        print("    - Downtime: {0}".format(m.thresholds.downtime))
        print("  Topology Schema:")
        g = m.topology_schema.group
        j = 0
        while g is not None:
            print(" {0} ↳ {1}".format("".join([" " for x in range(0, i)]), g.type))
            g = g.group
            # Indent by two spaces
            j =+ 2
```

## Getting endpoint statuses

[This example](https://github.com/ARGOeu/argo-mon-library/blob/main/examples/get_endpoint_statuses.py) prints out the status of endpoints for a specific report.

#### Running the example in the terminal (Bash)

To test it, you may run the example against the development instance of the service by navigating to the installation's `examples` folder and executing

```bash
python3 ./examples/get_endpoint_statuses.py --host api.devel.mon.argo.grnet.gr --api-key ~/mon.key -f --report REPORTNAME --start-date YYYY-MM-DD
```

where `REPORTNAME` is the name of a report, as listed in the 1st example, and `YYYY-MM-DD` is an ISO formated date. An optional end date may be passed with `--end-date YYY-MM-DD`, which otherwise defaults to the day defined by `--start-date`.

#### Python code rundown

The following Python code snippet from the example

- initializes a connection to the API, using a tenant API key (`mon = ArgoMonitoringService…`)
- calls `mon.period` to define a reporting period which will apply to subsequent calls
- calls `mon.reports.by_name` to fetch a specific report by its name
- calls `report.status` to access the report's status object
- loops over the report groups (`for group in … .status.groups`) in the status object
- loops over the endpoints in each group (`for endpoint in group.endpoints`)
- loops over the statuses for each endpoint (`for status in endpoint.statuses`) and prints out information

```python
from argo_mon_library import ArgoMonitoringService

mon = ArgoMonitoringService(args.host, api_key)
for group in (
    mon.period(
        datetime.strptime(args.start_date, "%Y-%m-%d"),
        datetime.strptime(args.end_date, "%Y-%m-%d"),
    )
    .reports.by_name(args.report)
    .status.groups
):
    for endpoint in group.endpoints:
        for status in endpoint.statuses:
            print(
                group.name,
                "[" + endpoint.id + "]",
                status.timestamp,
                status.value,
            )
```

## Getting A/R results

[This example](https://github.com/ARGOeu/argo-mon-library/blob/main/examples/get_group_results.py) prints out daily A/R results for all groups in a report.

#### Running the example in the terminal (Bash)

To test it, you may run the example against the development instance of the service by navigating to the installation's `examples` folder and executing

```bash
python3 ./examples/get_group_results.py --host api.devel.mon.argo.grnet.gr --api-key ~/mon.key -f --report REPORTNAME --start-date YYYY-MM-DD
```

where `REPORTNAME` is the name of a report, as listed in the 1st example, and `YYYY-MM-DD` is an ISO formated date. An optional end date may be passed with `--end-date YYY-MM-DD`, which otherwise defaults to the day defined by `--start-date`. Additionally,

* The optional argument `--monthly` may be specified to fetch results with a monthy granularity, instead of daily.
* The optional argument `--supergroup SUPERGROUPNAME` may be specified, in order to fetch results for a specific top-level group (supergroup)
* The optional argument `--group GROUNAME` may be specified in order to fetch results for specific a group of each supergroup, instead of all groups

#### Python code rundown

The following Python code snippet from the example:

- initializes a connection to the API, using a tenant API key (`mon = ArgoMonitoringService…`)
- calls `mon.period` to define a reporting period which will apply to subsequent calls and uses the `granularity` parameter to set the period's granularity
- calls `mon.reports.by_name` to fetch a specific report by its name
- calls `report.results` to access the report's results object
- optionally calls `results.supergroups.by_name` to filter for a specific supergroup
- loops over the supergroups in the results object (`for supergroup in supergroups`)
- loops over groups in each supergroup (`for group in supergroup.groups`)
- loop over group results for each group (`for result in group.results`) and prints out information

```python
from argo_mon_library import ArgoMonitoringService

mon = ArgoMonitoringService(args.host, api_key)
results = (
    mon.period(
        datetime.strptime(args.start_date, "%Y-%m-%d"),
        datetime.strptime(args.end_date, "%Y-%m-%d"),
        granularity="monthly" if args.monthly else "daily",
    )
    .reports.by_name(args.report)
    .results
)
if args.supergroup == "all":
    supergroups = results.supergroups
else:
    supergroups = [results.supergroups.by_name(args.supergroup)]
for supergroup in supergroups:
    for result in supergroup.results:
        print(
            supergroup.type + ":",
            supergroup.name,
            result.date,
            "A/R: {0:.2f}/{1:.2f}".format(
                float(result.availability), float(result.reliability)
            ),
        )
    if args.group == "all":
        groups = supergroup.groups
    else:
        groups = [supergroup.groups.by_name(args.group)]
    for group in groups:
        for result in group.results:
            print(
                "  ",
                group.type + ":",
                group.name,
                result.date,
                "A/R: {0:.2f}/{1:.2f}, Uptime: {2}, Downtime: {3}, Unknown: {4}".format(
                    float(result.availability),
                    float(result.reliability),
                    result.uptime,
                    result.downtime,
                    result.unknown,
                ),
            )
```

## Getting information on issues

[This example](https://github.com/ARGOeu/argo-mon-library/blob/main/examples/get_issues.py) prints out information on issues of endpoints or metrics, for a specific report.

#### Running the example in the terminal (Bash)

To test it, you may run the example against the development instance of the service by navigating to the installation's `examples` folder and executing

```bash
python3 ./examples/get_issues.py --host api.devel.mon.argo.grnet.gr --api-key ~/mon.key -f --report REPORTNAME --date YYYY-MM-DD --status STATUS
```

where `date` may be an optionally provided date in order to receive historic information (if omitted, defaults to live issues), and `status` is an optional criticality filter (CRITICAL, WARNING, etc.). To get information on issues for a service group's **metrics** instead of endpoints, use the `--metrics` flag, followed by a `--group <GROUPNAME>` parameter, to set the service group.

When getting information on endpoint issues, **details** about metric results may be obtained by employing the `--details <any|ENDPOINT>` parameter. A specific metric may be requested by using the `--metric <METRIC>` flag, or a specific point in time within the day specified by `--date <YYYY-MM-DD>` may be requested by adding the `--timestamp <YYYY-MM-DDTHH:mm:ssZ>` parameter, where the timestamp value must be provided in Zulu format.

#### Python code rundown

The following Python code snippet from the example:

- initializes a connection to the API, using a tenant API key (`mon = ArgoMonitoringService…`)
- calls `mon.period` to define a reporting period which will apply to subsequent calls
- calls `mon.issues.by_metric` or `mon.issues.by_endpoint` to fetch issues for metric or endpoints, respectively
- loops of the fetched issues (`for i in issues`) and stores the status value in arrays, to produce a summary

```puthon3
from argo_mon_library import ArgoMonitoringService

mon = ArgoMonitoringService(args.host, api_key)
if args.metrics:
    issues = (
        mon.period(datetime.strptime(args.date, "%Y-%m-%d"))
        .reports.by_name(args.report)
        .issues.by_metric(args.group, args.status)
    )
else:
    issues = (
        mon.period(datetime.strptime(args.date, "%Y-%m-%d"))
        .reports.by_name(args.report)
        .issues.by_endpoint(args.status)
    )
for i in issues:
    tot += 1
    if i.status == "CRITICAL":
        crit += 1
        if args.metrics:
            crit_issues.append("{0} ({1})".format(i.metric, i.service))
        else:
            crit_issues.append("{0} ({1})".format(i.url, i.service))
    elif i.status == "WARNING":
        warn += 1
        if args.metrics:
            warn_issues.append("{0} ({1})".format(i.metric, i.service))
        else:
            warn_issues.append("{0} ({1})".format(i.url, i.service))
```

## Getting metric results for an endpoint

Similarly to the previous example, [this example](https://github.com/ARGOeu/argo-mon-library/blob/main/examples/get_metric_results.py) allows one to succintly get details about metric issues, or results in general, by making use of the `metric_results` resource, provided one knows the endpoint and, optionally, metric of interest, beforehand. 

#### Running the example in the terminal (Bash)

To test it, you may run the example against the development instance of the service by navigating to the installation's `examples` folder and executing

```bash
python3 ./examples/get_metric_results.py --host api.devel.mon.argo.grnet.gr --api-key ~/mon.key -f --date YYYY-MM-DD --endpoint ENDPOINT
```

where the `date` parameter works the same as in the previous example, and the `endpoint` parameter defines the endpoint of interest. Optionally, the parameters `status` and `metric` may be added, in order to filter by specific criticality or metric. If a metric has been specified, an optional `timestamp` parameter may be added as well, in order to pinpoint the returned details to a specific event.

#### Python code rundown

The following Python code snippet from the example:

- initializes a connection to the API, using a tenant API key (`mon = ArgoMonitoringService…`)
- calls `mon.period` to define a reporting period which will apply to subsequent calls
- calls `mon.metric_results` to fetch metric results for a specific endpoint and optionally sets the metric and timestamp parameters for filtering
- loops of the fetched metric results (`for i in metric_results`) and prints out information

```python
from argo_mon_library import ArgoMonitoringService

mon = ArgoMonitoringService(args.host, api_key)
metric_results = mon.period(datetime.strptime(args.date, "%Y-%m-%d")).metric_results(
        args.endpoint,
        args.metric or None,
        args.timestamp or None
        )
for i in metric_results:
    print(i)
```

## Getting flapping trends

[This example](https://github.com/ARGOeu/argo-mon-library/blob/main/examples/get_metric_results.py) prints out a list of flapping trends with respect to endpoint groups, services, endpoints, or metrics, for a specific report.

#### Running the example in the terminal (Bash)

To test it, you may run the example against the development instance of the service by navigating to the installation's `examples` folder and executing

```bash
python3 ./examples/get_flapping_trends.py --host api.devel.mon.argo.grnet.gr --api-key ~/mon.key -f --report REPORTNAME --type FLAPTYPE --start-date YYYY-MM-DD --end-date YYYY-MM-DD
```

where the start and end date parameters are optional (default is current date) and `FLAPTYPE` is one of `GROUPS`, `SERVICES`, `ENDPOINTS`, `METRICS`, or `METRICS_TAGS`. In the case of `METRIC_TAGS`, the optional parameter `--ext-tags` may be specified in order to print out data about metrics per tag, in addition to tags themselves. Additionally,

* The optional argument `--monthly` may be specified to fetch results with a monthy granularity, instead of daily, when `start-date` and `end-date` are distinct
* The optional argument `--top TOP` may be specified to fetch up to `TOP` results

#### Python code rundown

The following Python code snippet from the example:

- initializes a connection to the API, using a tenant API key (`mon = ArgoMonitoringService…`)
- calls `mon.period` to define a reporting period which will apply to subsequent calls and uses the `granularity` parameter to set the period's granularity
- calls `mon.reports.by_name` to fetch a specific report by its name
- calls `reports.trends` to access the report's trends object
- calls `trends.flapping` to access the trends' flapping object, setting the requested flapping trend type
- loops over flapping trends (`for i in trends`), and prints out information
- optionally loops over metrics (`for m in i.metrics`) for each tag and prints out metric information, when the requested flapping trend type is `METRICS_TAG`

```python
from argo_mon_library import ArgoMonitoringService

mon = ArgoMonitoringService(args.host, api_key)
trends = (
    mon.period(
        datetime.strptime(args.start_date, "%Y-%m-%d"),
        datetime.strptime(args.end_date, "%Y-%m-%d"),
        granularity="monthly" if args.monthly else "daily",
    )
    .reports.by_name(args.report)
    .trends
    .flapping(flap_type, max_res)
)
for i in trends:
    print(i)
    if flap_type == FlappingType.METRIC_TAGS and args.ext_tags:
        for m in i.metrics:
            print("  ", m)
```
