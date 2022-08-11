import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../../test-utils';
import { transformArguments,  transformReply } from './TRIMMED_MEAN';

describe('TDIGEST.RESET', () => {
    it('transformArguments', () => {
        assert.deepEqual(
            transformArguments('key', 0, 1),
            ['TDIGEST.TRIMMED_MIN', 'key', '0', '1']
        );
    });

    describe('transformReply', () => {
        it('DBL_MAX', () => {
            assert.deepEqual(
                transformReply('DBL_MAX'),
                Infinity
            );
        });

        it('number', () => {
            assert.deepEqual(
                transformReply('0'),
                0
            );
        });
    });

    testUtils.testWithClient('client.tDigest.trimmedMean', async client => {
        const [, reply] = await Promise.all([
            client.tDigest.create('key'),
            client.tDigest.trimmedMean('key', 0, 1)
        ]);

        assert.equal(reply, Infinity);
    }, GLOBAL.SERVERS.OPEN);
});
