# @cumbre/test-utils

Shared integration testing helpers for the CUMBRE backend.

This package provides:

- ephemeral HTTP server bootstrapping for service apps
- JSON request helpers for standardized envelope assertions
- silent test logging
- local PostgreSQL safety checks for destructive test resets

The integration suites use these helpers to avoid duplicating server and request boilerplate across services.
