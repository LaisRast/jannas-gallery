import PocketBase from 'pocketbase';
import { POCKETBASE_URL } from '../config/env.ts';
import { TypedPocketBase } from '../types/pocketbase-types.ts';
import { getVisitorId } from '../utils/visitorUtils.ts';

const pocketbase = new PocketBase(POCKETBASE_URL) as TypedPocketBase;

pocketbase.beforeSend = function (url, options) {
  options.headers = {
    ...options.headers,
    'X-Visitor-Id': getVisitorId(),
  };
  return { url, options };
};

export { pocketbase };
