import * as path from 'path';

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: 'chrss.db',
    },
  },
};
