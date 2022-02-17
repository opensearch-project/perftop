/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const BASE_URL = "/_plugins/_performanceanalyzer";
const BASE_URL_METRICS = BASE_URL + "/metrics";
const BASE_URL_RCA = BASE_URL + "/rca";

const LEGACY_BASE_URL = "/_opendistro/_performanceanalyzer";
const LEGACY_BASE_URL_METRICS = LEGACY_BASE_URL + "/metrics";
const LEGACY_BASE_URL_RCA = LEGACY_BASE_URL + "/rca";

var metricsUrlPrefix;
var rcaUrlPrefix;

function setBaseMetricsUrl () {
  metricsUrlPrefix = BASE_URL_METRICS;
}

function setLegacyBaseMetricsUrl () {
  metricsUrlPrefix = LEGACY_BASE_URL_METRICS;
}

function setBaseRcaUrl () {
  rcaUrlPrefix = BASE_URL_RCA;
}

function setLegacyBaseRcaUrl () {
  rcaUrlPrefix = LEGACY_BASE_URL_RCA;
}

function getMetricsUrlPrefix () {
  return metricsUrlPrefix === undefined ? BASE_URL_METRICS : metricsUrlPrefix;
}

function getRcaUrlPrefix () {
  return rcaUrlPrefix === undefined ? BASE_URL_RCA : rcaUrlPrefix;
}

module.exports = {setBaseMetricsUrl, setLegacyBaseMetricsUrl, setBaseRcaUrl, setLegacyBaseRcaUrl, getMetricsUrlPrefix, getRcaUrlPrefix};
