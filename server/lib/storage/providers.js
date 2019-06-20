import path from 'path';
import { S3StorageContext } from 'auth0-extension-s3-tools';
import { RDBMSRecordProvider } from 'rdbmsRecordProvider';
import { PGSQLStorageContext } from 'pgsqlStorageContext';
import { FileStorageContext, WebtaskStorageContext, BlobRecordProvider } from 'auth0-extension-tools';

import config from '../config';
import logger from '../logger';

export function createProvider(storageContext) {
  switch (config('STORAGE_TYPE')) {
    case 's3': {
      logger.info('Initializing the S3 Storage Context.');

      const context = new S3StorageContext({
        path: config('S3_PATH'),
        bucket: config('S3_BUCKET'),
        keyId: config('S3_KEY'),
        keySecret: config('S3_SECRET'),
        defaultData: {}
      });
      return new BlobRecordProvider(context, { concurrentWrites: false });
    }
    case 'pgsql': {
      logger.info('Initializing the Postgres Context.');

      const context = new PGSQLStorageContext({
        pgUser: config('PGUSER'),
        pgHost: config('PGHOST'),
        pgPassword: config('PGPASSWORD'),
        pgDatabase: config('PGDATABASE'),
        pgPort: config('PGPORT'),
        defaultData: {}
      });
      return new RDBMSRecordProvider(context, { concurrentWrites: true });
    }      
    case 'webtask':
    default: {
      logger.info('Initializing the Webtask Storage Context.');

      const context = storageContext
          ? new WebtaskStorageContext(storageContext, { force: 0 })
          : new FileStorageContext(path.join(__dirname, '../../data.json'), { mergeWrites: true });
      return new BlobRecordProvider(context, { concurrentWrites: false });
    }
  }
}
