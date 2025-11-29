---
sidebar_position: 2
title: Installation
---

## Library installation

The library has been tested with Python versions 3.9, 3.11, and 3.12 on Rocky Linux 9. The recommended installation method is to use one of the prepared packages, but instructions for installation from source are also available.

### Prepared packages

Prepared packages may be [installed from PyPI](https://pypi.org/project/argo-mon-library/) using pip. For information on installing pip, if not readily available by your Python installation, please refer to [this guide](https://packaging.python.org/en/latest/tutorials/installing-packages/#requirements-for-installing-packages).

Production RPM packages for Rocky Linux 9 are also available at the [ARGO Repository](http://rpm-repo.argo.grnet.gr/ARGO/prod/rocky9). Users who want to test out new features may download packages from the [development area](http://rpm-repo.argo.grnet.gr/ARGO/devel/rocky9/) of the repository.

### Installation from source

In order to install the library from source, you'll need to check out the [code from GitHub](https://github.com/ARGOeu/argo-mon-library), have Python [setuptools installed](https://packaging.python.org/en/latest/tutorials/installing-packages/#ensure-pip-setuptools-and-wheel-are-up-to-date), and run the following in a Bash terminal

```bash
$ python3 ./setup.py build && \
  sudo python3 ./setup.py install
```

Alternatively, on RHEL-based systems with the `rpm-build` and `python3-dev` packages installed, you may run

```bash
$ mkdir -p ~/rpmbuild/SOURCES && \
  python3 ./setup.py build && \
  python3 ./setup.py bdist_rpm && \
  cp dist/argo-mon-library-0.1.0.tar.gz && \
  rpmbuild -bb argo-mon-library.spec
```

to create an RPM file under `~/rpmbuild/RPMS/noarch` for each supported Python version, and then use `rpm` or `yum`/`dnf` to install the desired RPM packages, e.g.

```bash
$ sudo dnf install ~/rpmbuild/RPMS/noarch/python3-argo-mon-library-0.1.0-1.el9.noarch.rpm
```

for version `0.1.0-1` of the library using the default (platform) Python.
