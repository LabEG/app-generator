
export interface ISwaggerInfoContact {
    email: string;
}

export interface ISwaggerInfoLicense {
    name: string;
    url: string;
}

export interface ISwaggerInfo {
    description: string;
    version: string;
    title: string;
    termsOfService: string;
    contact: ISwaggerInfoContact;
    license: ISwaggerInfoLicense;
}

export interface ISwaggerTagExternalDocs {
    description: string;
    url: string;
}

export interface ISwaggerTag {
    name: string;
    description: string;
    externalDocs: ISwaggerTagExternalDocs;
}

export interface ISwaggerSchemaItems {
    $ref?: string;
    type?: string;
    enum?: string[];
    default?: string;
}

export interface ISwaggerSchema {
    $ref?: string;
    type?: string;
    items?: ISwaggerSchemaItems;
}

export interface ISwaggerPathParameter {
    name: string;
    in: string;
    description: string;
    required: boolean;
    schema?: ISwaggerSchema;
    maximum?: number;
    minimum?: number;
    format?: string;
    type?: string;
    items?: ISwaggerSchemaItems;
    collectionFormat: string;
}

export interface ISwaggerPathResponseHeader {
    type: string;
    format: string;
    description: string;
}

export interface ISwaggerPathResponseAdditionalProperties {
    type: string;
    format: string;
}

export interface ISwaggerPathResponse {
    description: string;
    schema?: ISwaggerSchema;
    type?: string;
    headers?: { [key: string]: ISwaggerPathResponseHeader };
    additionalProperties: ISwaggerPathResponseAdditionalProperties;
}

export interface ISwaggerPath {
    tags: string[];
    summary: string;
    description: string;
    operationId: string;
    produces: string[];
    parameters: ISwaggerPathParameter[];
    responses: { [key: string]: ISwaggerPathResponse };
    security?: { [key: string]: string[] };
    consumes?: string[];
}

export interface ISwaggerSecurityDefinitionsAuth {
    type: string;
    authorizationUrl: string;
    flow: string;
    scopes: { [key: string]: string };
}

export interface ISwaggerSecurityDefinitionsApiKey {
    type: string;
    name: string;
    in: string;
}

export interface ISwaggerDefinitionsXml {
    name: string;
    wrapped?: boolean;
}

export interface ISwaggerDefinitionsProperty {
    type: string;
    format?: string;
    description?: string;
    default: Object | null;
    example?: string;
    enum?: string[];
    xml?: ISwaggerDefinitionsXml;
    items?: ISwaggerSchemaItems;
    $ref?: string;
}

export interface ISwaggerDefinitions {
    type: string;
    required?: string[];
    properties: { [key: string]: ISwaggerDefinitionsProperty };
    xml?: ISwaggerDefinitionsXml;
}

export interface ISwaggerExternalDocs2 {
    description: string;
    url: string;
}

export interface ISwagger {
    swagger: string;
    info: ISwaggerInfo;
    host: string;
    basePath: string;
    tags: ISwaggerTag[];
    schemes: string[];
    paths: { [key: string]: { [key: string]: ISwaggerPath } };
    securityDefinitions: { [key: string]: (ISwaggerSecurityDefinitionsAuth | ISwaggerSecurityDefinitionsApiKey) };
    definitions: { [key: string]: ISwaggerDefinitions };
    externalDocs: ISwaggerExternalDocs2;
}
