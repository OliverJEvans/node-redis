import { RedisCommandArguments } from '@redis/client/dist/lib/commands';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string, items: string | Array<string>): RedisCommandArguments;
export declare function transformReply(): Array<number>;
