// Change BASE_URL when migrating API from _opendistro to _opensearch
const BASE_URL = "/_opendistro/_performanceanalyzer";
const BASE_URL_PA = BASE_URL + "/metrics";
const BASE_URL_RCA = BASE_URL + "/rca";

const LEGACY_BASE_URL = "/_opendistro/_performanceanalyzer";
const LEGACY_BASE_URL_PA = BASE_URL + "/metrics";
const LEGACY_BASE_URL_RCA = BASE_URL + "/rca";

var paUrlPrefix;
var rcaUrlPrefix;

function setBaseUrlPa () {
  paUrlPrefix = BASE_URL_PA;
}

function setLegacyBaseUrlPA () {
  paUrlPrefix = LEGACY_BASE_URL_PA;
}

function setBaseUrlRca () {
  rcaUrlPrefix = BASE_URL_RCA;
}

function setLegacyBaseUrlRca () {
  rcaUrlPrefix = LEGACY_BASE_URL_RCA;
}

function getPaUrlPrefix () {
  return paUrlPrefix === undefined ? BASE_URL_PA : paUrlPrefix;
}

function getRcaUrlPrefix () {
  return rcaUrlPrefix === undefined ? BASE_URL_RCA : rcaUrlPrefix;
}

module.exports = {setBaseUrlPa, setLegacyBaseUrlPA, setBaseUrlRca, setLegacyBaseUrlRca, getPaUrlPrefix, getRcaUrlPrefix}