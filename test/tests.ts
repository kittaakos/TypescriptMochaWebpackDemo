/// <reference path="require.d.ts"/>

const testsContext = require.context(".", true, /.spec.ts$/);
testsContext.keys().forEach(testsContext);