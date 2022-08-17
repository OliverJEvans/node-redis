import * as _LIST from './_LIST';
import * as ALTER from './ALTER';
import * as AGGREGATE from './AGGREGATE';
import * as ALIASADD from './ALIASADD';
import * as ALIASDEL from './ALIASDEL';
import * as ALIASUPDATE from './ALIASUPDATE';
import * as CONFIG_GET from './CONFIG_GET';
import * as CONFIG_SET from './CONFIG_SET';
import * as CREATE from './CREATE';
import * as DICTADD from './DICTADD';
import * as DICTDEL from './DICTDEL';
import * as DICTDUMP from './DICTDUMP';
import * as DROPINDEX from './DROPINDEX';
import * as EXPLAIN from './EXPLAIN';
import * as EXPLAINCLI from './EXPLAINCLI';
import * as INFO from './INFO';
import * as PROFILESEARCH from './PROFILE_SEARCH';
import * as PROFILEAGGREGATE from './PROFILE_AGGREGATE';
import * as SEARCH from './SEARCH';
import * as SPELLCHECK from './SPELLCHECK';
import * as SUGADD from './SUGADD';
import * as SUGDEL from './SUGDEL';
import * as SUGGET_WITHPAYLOADS from './SUGGET_WITHPAYLOADS';
import * as SUGGET_WITHSCORES_WITHPAYLOADS from './SUGGET_WITHSCORES_WITHPAYLOADS';
import * as SUGGET_WITHSCORES from './SUGGET_WITHSCORES';
import * as SUGGET from './SUGGET';
import * as SUGLEN from './SUGLEN';
import * as SYNDUMP from './SYNDUMP';
import * as SYNUPDATE from './SYNUPDATE';
import * as TAGVALS from './TAGVALS';
import { RedisCommandArgument, RedisCommandArguments } from '@redis/client/dist/lib/commands';
import { SearchOptions } from './SEARCH';
declare const _default: {
    _LIST: typeof _LIST;
    _list: typeof _LIST;
    ALTER: typeof ALTER;
    alter: typeof ALTER;
    AGGREGATE: typeof AGGREGATE;
    aggregate: typeof AGGREGATE;
    ALIASADD: typeof ALIASADD;
    aliasAdd: typeof ALIASADD;
    ALIASDEL: typeof ALIASDEL;
    aliasDel: typeof ALIASDEL;
    ALIASUPDATE: typeof ALIASUPDATE;
    aliasUpdate: typeof ALIASUPDATE;
    CONFIG_GET: typeof CONFIG_GET;
    configGet: typeof CONFIG_GET;
    CONFIG_SET: typeof CONFIG_SET;
    configSet: typeof CONFIG_SET;
    CREATE: typeof CREATE;
    create: typeof CREATE;
    DICTADD: typeof DICTADD;
    dictAdd: typeof DICTADD;
    DICTDEL: typeof DICTDEL;
    dictDel: typeof DICTDEL;
    DICTDUMP: typeof DICTDUMP;
    dictDump: typeof DICTDUMP;
    DROPINDEX: typeof DROPINDEX;
    dropIndex: typeof DROPINDEX;
    EXPLAIN: typeof EXPLAIN;
    explain: typeof EXPLAIN;
    EXPLAINCLI: typeof EXPLAINCLI;
    explainCli: typeof EXPLAINCLI;
    INFO: typeof INFO;
    info: typeof INFO;
    PROFILESEARCH: typeof PROFILESEARCH;
    profileSearch: typeof PROFILESEARCH;
    PROFILEAGGREGATE: typeof PROFILEAGGREGATE;
    profileAggregate: typeof PROFILEAGGREGATE;
    SEARCH: typeof SEARCH;
    search: typeof SEARCH;
    SPELLCHECK: typeof SPELLCHECK;
    spellCheck: typeof SPELLCHECK;
    SUGADD: typeof SUGADD;
    sugAdd: typeof SUGADD;
    SUGDEL: typeof SUGDEL;
    sugDel: typeof SUGDEL;
    SUGGET_WITHPAYLOADS: typeof SUGGET_WITHPAYLOADS;
    sugGetWithPayloads: typeof SUGGET_WITHPAYLOADS;
    SUGGET_WITHSCORES_WITHPAYLOADS: typeof SUGGET_WITHSCORES_WITHPAYLOADS;
    sugGetWithScoresWithPayloads: typeof SUGGET_WITHSCORES_WITHPAYLOADS;
    SUGGET_WITHSCORES: typeof SUGGET_WITHSCORES;
    sugGetWithScores: typeof SUGGET_WITHSCORES;
    SUGGET: typeof SUGGET;
    sugGet: typeof SUGGET;
    SUGLEN: typeof SUGLEN;
    sugLen: typeof SUGLEN;
    SYNDUMP: typeof SYNDUMP;
    synDump: typeof SYNDUMP;
    SYNUPDATE: typeof SYNUPDATE;
    synUpdate: typeof SYNUPDATE;
    TAGVALS: typeof TAGVALS;
    tagVals: typeof TAGVALS;
};
export default _default;
export declare enum RedisSearchLanguages {
    ARABIC = "Arabic",
    BASQUE = "Basque",
    CATALANA = "Catalan",
    DANISH = "Danish",
    DUTCH = "Dutch",
    ENGLISH = "English",
    FINNISH = "Finnish",
    FRENCH = "French",
    GERMAN = "German",
    GREEK = "Greek",
    HUNGARIAN = "Hungarian",
    INDONESAIN = "Indonesian",
    IRISH = "Irish",
    ITALIAN = "Italian",
    LITHUANIAN = "Lithuanian",
    NEPALI = "Nepali",
    NORWEIGAN = "Norwegian",
    PORTUGUESE = "Portuguese",
    ROMANIAN = "Romanian",
    RUSSIAN = "Russian",
    SPANISH = "Spanish",
    SWEDISH = "Swedish",
    TAMIL = "Tamil",
    TURKISH = "Turkish",
    CHINESE = "Chinese"
}
export declare type PropertyName = `${'@' | '$.'}${string}`;
export declare type SortByProperty = PropertyName | {
    BY: PropertyName;
    DIRECTION?: 'ASC' | 'DESC';
};
export declare function pushSortByProperty(args: RedisCommandArguments, sortBy: SortByProperty): void;
export declare function pushSortByArguments(args: RedisCommandArguments, name: string, sortBy: SortByProperty | Array<SortByProperty>): RedisCommandArguments;
export declare function pushArgumentsWithLength(args: RedisCommandArguments, fn: (args: RedisCommandArguments) => void): RedisCommandArguments;
export declare enum SchemaFieldTypes {
    TEXT = "TEXT",
    NUMERIC = "NUMERIC",
    GEO = "GEO",
    TAG = "TAG",
    VECTOR = "VECTOR"
}
declare type CreateSchemaField<T extends SchemaFieldTypes, E = Record<keyof any, any>> = T | ({
    type: T;
    AS?: string;
} & E);
declare type CreateSchemaCommonField<T extends SchemaFieldTypes, E = Record<string, never>> = CreateSchemaField<T, ({
    SORTABLE?: true | 'UNF';
    NOINDEX?: true;
} & E)>;
export declare enum SchemaTextFieldPhonetics {
    DM_EN = "dm:en",
    DM_FR = "dm:fr",
    FM_PT = "dm:pt",
    DM_ES = "dm:es"
}
declare type CreateSchemaTextField = CreateSchemaCommonField<SchemaFieldTypes.TEXT, {
    NOSTEM?: true;
    WEIGHT?: number;
    PHONETIC?: SchemaTextFieldPhonetics;
    WITHSUFFIXTRIE?: boolean;
}>;
declare type CreateSchemaNumericField = CreateSchemaCommonField<SchemaFieldTypes.NUMERIC>;
declare type CreateSchemaGeoField = CreateSchemaCommonField<SchemaFieldTypes.GEO>;
declare type CreateSchemaTagField = CreateSchemaCommonField<SchemaFieldTypes.TAG, {
    SEPARATOR?: string;
    CASESENSITIVE?: true;
    WITHSUFFIXTRIE?: boolean;
}>;
export declare enum VectorAlgorithms {
    FLAT = "FLAT",
    HNSW = "HNSW"
}
declare type CreateSchemaVectorField<T extends VectorAlgorithms, A extends Record<string, unknown>> = CreateSchemaField<SchemaFieldTypes.VECTOR, {
    ALGORITHM: T;
    TYPE: string;
    DIM: number;
    DISTANCE_METRIC: 'L2' | 'IP' | 'COSINE';
    INITIAL_CAP?: number;
} & A>;
declare type CreateSchemaFlatVectorField = CreateSchemaVectorField<VectorAlgorithms.FLAT, {
    BLOCK_SIZE?: number;
}>;
declare type CreateSchemaHNSWVectorField = CreateSchemaVectorField<VectorAlgorithms.HNSW, {
    M?: number;
    EF_CONSTRUCTION?: number;
    EF_RUNTIME?: number;
}>;
export interface RediSearchSchema {
    [field: string]: CreateSchemaTextField | CreateSchemaNumericField | CreateSchemaGeoField | CreateSchemaTagField | CreateSchemaFlatVectorField | CreateSchemaHNSWVectorField;
}
export declare function pushSchema(args: RedisCommandArguments, schema: RediSearchSchema): void;
export declare type Params = Record<string, RedisCommandArgument | number>;
export declare function pushParamsArgs(args: RedisCommandArguments, params?: Params): RedisCommandArguments;
export declare function pushSearchOptions(args: RedisCommandArguments, options?: SearchOptions): RedisCommandArguments;
interface SearchDocumentValue {
    [key: string]: string | number | null | Array<SearchDocumentValue> | SearchDocumentValue;
}
export interface SearchReply {
    total: number;
    documents: Array<{
        id: string;
        value: SearchDocumentValue;
    }>;
}
export interface ProfileOptions {
    LIMITED?: true;
}
export declare type ProfileRawReply<T> = [
    results: T,
    profile: [
        _: string,
        TotalProfileTime: string,
        _: string,
        ParsingTime: string,
        _: string,
        PipelineCreationTime: string,
        _: string,
        IteratorsProfile: Array<any>
    ]
];
export interface ProfileReply {
    results: SearchReply | AGGREGATE.AggregateReply;
    profile: ProfileData;
}
interface ChildIterator {
    type?: string;
    counter?: number;
    term?: string;
    size?: number;
    time?: string;
    childIterators?: Array<ChildIterator>;
}
interface IteratorsProfile {
    type?: string;
    counter?: number;
    queryType?: string;
    time?: string;
    childIterators?: Array<ChildIterator>;
}
interface ProfileData {
    totalProfileTime: string;
    parsingTime: string;
    pipelineCreationTime: string;
    iteratorsProfile: IteratorsProfile;
}
export declare function transformProfile(reply: Array<any>): ProfileData;