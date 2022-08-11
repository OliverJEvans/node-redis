import { RedisCommandArgument, RedisCommandArguments } from '@redis/client/dist/lib/commands';

export const FIRST_KEY_INDEX = 1;

export const IS_READ_ONLY = true;

export function transformArguments(key: RedisCommandArgument): RedisCommandArguments {
    return [
        'TDIGEST.MAX',
        key
    ];
}

type MaxRawReply = `${'DBL_MIN' | number}`;

export function transformReply(reply: MaxRawReply): number {
    return reply === 'DBL_MIN' ? -Infinity : Number(reply);
}
