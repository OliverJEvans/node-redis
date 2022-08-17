/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from 'events';
import * as net from 'net';
import * as tls from 'tls';
import { RedisCommandArguments } from '../commands';
declare type ReconnectStrategy = (retires: number) => number | Error;
export interface RedisSocketCommonOptions {
    connectTimeout?: number;
    noDelay?: boolean;
    keepAlive?: number | false;
    reconnectStrategy?: ReconnectStrategy;
}
declare type RedisNetSocketOptions = Partial<net.SocketConnectOpts> & {
    tls?: false;
};
export interface RedisTlsSocketOptions extends tls.ConnectionOptions {
    tls: true;
}
export declare type RedisSocketOptions = RedisSocketCommonOptions & (RedisNetSocketOptions | RedisTlsSocketOptions);
export declare type RedisSocketInitiator = () => Promise<void>;
export default class RedisSocket extends EventEmitter {
    #private;
    get isOpen(): boolean;
    get isReady(): boolean;
    get writableNeedDrain(): boolean;
    constructor(initiator: RedisSocketInitiator, options?: RedisSocketOptions);
    reconnectStrategy(retries: number): number | Error;
    connect(): Promise<void>;
    writeCommand(args: RedisCommandArguments): void;
    disconnect(): void;
    quit(fn: () => Promise<unknown>): Promise<void>;
    cork(): void;
    ref(): void;
    unref(): void;
}
export {};