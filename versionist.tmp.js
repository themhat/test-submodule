'use strict';

module.exports = {

  updateVersion: 'update-version-file',

  template: 'default',

  transformTemplateDataAsync: {
    preset: 'nested-changelogs',
    upstream: [
    ]
  }
};
