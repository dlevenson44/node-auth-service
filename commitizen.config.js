const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable')
const defaultTypes = require('@digitalroute/cz-conventional-changelog-for-jira/types')
const pick = require('lodash/pick')

module.exports = custom({
    types: pick(defaultTypes, ['feat', 'fix', 'refactor', 'revert', 'docs']),
    jiraMode: false,
    scopes: [
        'build',
        'component',
        'page',
        'service',
        'style',
        'types',
        'other',
    ],
})
