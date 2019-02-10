
export interface IInfoContact {
    email: string;
}

export interface IInfoLicense {
    name: string;
    url: string;
}

export interface IInfo {
    description: string;
    version: string;
    title: string;
    termsOfService: string;
    contact: IInfoContact;
    license: IInfoLicense;
}

export interface ITagExternalDocs {
    description: string;
    url: string;
}

export interface ITag {
    name: string;
    description: string;
    externalDocs: ITagExternalDocs;
}

export interface IDefinitionsXml {
    name: string;
    wrapped?: boolean;
}

export interface IDefinitionsPropertyItems {
    $ref?: string;
    type: string;
}

export interface IDefinitionsProperty {
    type: string;
    format?: string;
    description?: string;
    example?: string;
    enum?: string[];
    xml?: IDefinitionsXml;
    items?: IDefinitionsPropertyItems;
    $ref?: string;
}

export interface IDefinitions {
    type: string;
    required?: string[];
    properties: { [key: string]: IDefinitionsProperty };
    xml?: IDefinitionsXml;
}

export interface ISecurityDefinitionsAuth {
    type: string;
    authorizationUrl: string;
    flow: string;
    scopes: { [key: string]: string };
}

export interface ISecurityDefinitionsApiKey {
    type: string;
    name: string;
    in: string;
}

export interface IExternalDocs2 {
    description: string;
    url: string;
}

export interface ISwaggerJson {
    swagger: string;
    info: IInfo;
    host: string;
    basePath: string;
    tags: ITag[];
    schemes: string[];
    paths: Paths;
    securityDefinitions: { [key: string]: (ISecurityDefinitionsAuth | ISecurityDefinitionsApiKey) };
    definitions: { [key: string]: IDefinitions };
    externalDocs: IExternalDocs2;
}