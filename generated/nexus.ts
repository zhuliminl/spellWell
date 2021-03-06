/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  MaterialCreateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['MaterialWhereUniqueInput'][] | null; // [MaterialWhereUniqueInput!]
    create?: NexusGenInputs['MaterialCreateWithoutAuthorInput'][] | null; // [MaterialCreateWithoutAuthorInput!]
  }
  MaterialCreateWithoutAuthorInput: { // input type
    content?: string | null; // String
    desc?: string | null; // String
    id?: string | null; // ID
    published?: boolean | null; // Boolean
    title: string; // String!
  }
  MaterialScalarWhereInput: { // input type
    AND?: NexusGenInputs['MaterialScalarWhereInput'][] | null; // [MaterialScalarWhereInput!]
    content?: string | null; // String
    content_contains?: string | null; // String
    content_ends_with?: string | null; // String
    content_gt?: string | null; // String
    content_gte?: string | null; // String
    content_in?: string[] | null; // [String!]
    content_lt?: string | null; // String
    content_lte?: string | null; // String
    content_not?: string | null; // String
    content_not_contains?: string | null; // String
    content_not_ends_with?: string | null; // String
    content_not_in?: string[] | null; // [String!]
    content_not_starts_with?: string | null; // String
    content_starts_with?: string | null; // String
    desc?: string | null; // String
    desc_contains?: string | null; // String
    desc_ends_with?: string | null; // String
    desc_gt?: string | null; // String
    desc_gte?: string | null; // String
    desc_in?: string[] | null; // [String!]
    desc_lt?: string | null; // String
    desc_lte?: string | null; // String
    desc_not?: string | null; // String
    desc_not_contains?: string | null; // String
    desc_not_ends_with?: string | null; // String
    desc_not_in?: string[] | null; // [String!]
    desc_not_starts_with?: string | null; // String
    desc_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['MaterialScalarWhereInput'][] | null; // [MaterialScalarWhereInput!]
    OR?: NexusGenInputs['MaterialScalarWhereInput'][] | null; // [MaterialScalarWhereInput!]
    published?: boolean | null; // Boolean
    published_not?: boolean | null; // Boolean
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
  }
  MaterialUpdateManyDataInput: { // input type
    content?: string | null; // String
    desc?: string | null; // String
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  MaterialUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['MaterialUpdateManyDataInput']; // MaterialUpdateManyDataInput!
    where: NexusGenInputs['MaterialScalarWhereInput']; // MaterialScalarWhereInput!
  }
  MaterialUpdateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['MaterialWhereUniqueInput'][] | null; // [MaterialWhereUniqueInput!]
    create?: NexusGenInputs['MaterialCreateWithoutAuthorInput'][] | null; // [MaterialCreateWithoutAuthorInput!]
    delete?: NexusGenInputs['MaterialWhereUniqueInput'][] | null; // [MaterialWhereUniqueInput!]
    deleteMany?: NexusGenInputs['MaterialScalarWhereInput'][] | null; // [MaterialScalarWhereInput!]
    disconnect?: NexusGenInputs['MaterialWhereUniqueInput'][] | null; // [MaterialWhereUniqueInput!]
    set?: NexusGenInputs['MaterialWhereUniqueInput'][] | null; // [MaterialWhereUniqueInput!]
    update?: NexusGenInputs['MaterialUpdateWithWhereUniqueWithoutAuthorInput'][] | null; // [MaterialUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany?: NexusGenInputs['MaterialUpdateManyWithWhereNestedInput'][] | null; // [MaterialUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['MaterialUpsertWithWhereUniqueWithoutAuthorInput'][] | null; // [MaterialUpsertWithWhereUniqueWithoutAuthorInput!]
  }
  MaterialUpdateWithWhereUniqueWithoutAuthorInput: { // input type
    data: NexusGenInputs['MaterialUpdateWithoutAuthorDataInput']; // MaterialUpdateWithoutAuthorDataInput!
    where: NexusGenInputs['MaterialWhereUniqueInput']; // MaterialWhereUniqueInput!
  }
  MaterialUpdateWithoutAuthorDataInput: { // input type
    content?: string | null; // String
    desc?: string | null; // String
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  MaterialUpsertWithWhereUniqueWithoutAuthorInput: { // input type
    create: NexusGenInputs['MaterialCreateWithoutAuthorInput']; // MaterialCreateWithoutAuthorInput!
    update: NexusGenInputs['MaterialUpdateWithoutAuthorDataInput']; // MaterialUpdateWithoutAuthorDataInput!
    where: NexusGenInputs['MaterialWhereUniqueInput']; // MaterialWhereUniqueInput!
  }
  MaterialWhereInput: { // input type
    AND?: NexusGenInputs['MaterialWhereInput'][] | null; // [MaterialWhereInput!]
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    content?: string | null; // String
    content_contains?: string | null; // String
    content_ends_with?: string | null; // String
    content_gt?: string | null; // String
    content_gte?: string | null; // String
    content_in?: string[] | null; // [String!]
    content_lt?: string | null; // String
    content_lte?: string | null; // String
    content_not?: string | null; // String
    content_not_contains?: string | null; // String
    content_not_ends_with?: string | null; // String
    content_not_in?: string[] | null; // [String!]
    content_not_starts_with?: string | null; // String
    content_starts_with?: string | null; // String
    desc?: string | null; // String
    desc_contains?: string | null; // String
    desc_ends_with?: string | null; // String
    desc_gt?: string | null; // String
    desc_gte?: string | null; // String
    desc_in?: string[] | null; // [String!]
    desc_lt?: string | null; // String
    desc_lte?: string | null; // String
    desc_not?: string | null; // String
    desc_not_contains?: string | null; // String
    desc_not_ends_with?: string | null; // String
    desc_not_in?: string[] | null; // [String!]
    desc_not_starts_with?: string | null; // String
    desc_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['MaterialWhereInput'][] | null; // [MaterialWhereInput!]
    OR?: NexusGenInputs['MaterialWhereInput'][] | null; // [MaterialWhereInput!]
    published?: boolean | null; // Boolean
    published_not?: boolean | null; // Boolean
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
  }
  MaterialWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  SystemWhereInput: { // input type
    AND?: NexusGenInputs['SystemWhereInput'][] | null; // [SystemWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['SystemWhereInput'][] | null; // [SystemWhereInput!]
    OR?: NexusGenInputs['SystemWhereInput'][] | null; // [SystemWhereInput!]
    slogan?: string | null; // String
    slogan_contains?: string | null; // String
    slogan_ends_with?: string | null; // String
    slogan_gt?: string | null; // String
    slogan_gte?: string | null; // String
    slogan_in?: string[] | null; // [String!]
    slogan_lt?: string | null; // String
    slogan_lte?: string | null; // String
    slogan_not?: string | null; // String
    slogan_not_contains?: string | null; // String
    slogan_not_ends_with?: string | null; // String
    slogan_not_in?: string[] | null; // [String!]
    slogan_not_starts_with?: string | null; // String
    slogan_starts_with?: string | null; // String
    tel?: string | null; // String
    tel_contains?: string | null; // String
    tel_ends_with?: string | null; // String
    tel_gt?: string | null; // String
    tel_gte?: string | null; // String
    tel_in?: string[] | null; // [String!]
    tel_lt?: string | null; // String
    tel_lte?: string | null; // String
    tel_not?: string | null; // String
    tel_not_contains?: string | null; // String
    tel_not_ends_with?: string | null; // String
    tel_not_in?: string[] | null; // [String!]
    tel_not_starts_with?: string | null; // String
    tel_starts_with?: string | null; // String
    version_code?: string | null; // String
    version_code_contains?: string | null; // String
    version_code_ends_with?: string | null; // String
    version_code_gt?: string | null; // String
    version_code_gte?: string | null; // String
    version_code_in?: string[] | null; // [String!]
    version_code_lt?: string | null; // String
    version_code_lte?: string | null; // String
    version_code_not?: string | null; // String
    version_code_not_contains?: string | null; // String
    version_code_not_ends_with?: string | null; // String
    version_code_not_in?: string[] | null; // [String!]
    version_code_not_starts_with?: string | null; // String
    version_code_starts_with?: string | null; // String
  }
  UserCreateInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
    materials?: NexusGenInputs['MaterialCreateManyWithoutAuthorInput'] | null; // MaterialCreateManyWithoutAuthorInput
    name: string; // String!
    nickname?: string | null; // String
    openid?: string | null; // String
    password?: string | null; // String
    phone_number?: string | null; // String
    role?: string | null; // String
    status?: string | null; // String
  }
  UserUpdateInput: { // input type
    email?: string | null; // String
    materials?: NexusGenInputs['MaterialUpdateManyWithoutAuthorInput'] | null; // MaterialUpdateManyWithoutAuthorInput
    name?: string | null; // String
    nickname?: string | null; // String
    openid?: string | null; // String
    password?: string | null; // String
    phone_number?: string | null; // String
    role?: string | null; // String
    status?: string | null; // String
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    materials_every?: NexusGenInputs['MaterialWhereInput'] | null; // MaterialWhereInput
    materials_none?: NexusGenInputs['MaterialWhereInput'] | null; // MaterialWhereInput
    materials_some?: NexusGenInputs['MaterialWhereInput'] | null; // MaterialWhereInput
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    nickname?: string | null; // String
    nickname_contains?: string | null; // String
    nickname_ends_with?: string | null; // String
    nickname_gt?: string | null; // String
    nickname_gte?: string | null; // String
    nickname_in?: string[] | null; // [String!]
    nickname_lt?: string | null; // String
    nickname_lte?: string | null; // String
    nickname_not?: string | null; // String
    nickname_not_contains?: string | null; // String
    nickname_not_ends_with?: string | null; // String
    nickname_not_in?: string[] | null; // [String!]
    nickname_not_starts_with?: string | null; // String
    nickname_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    openid?: string | null; // String
    openid_contains?: string | null; // String
    openid_ends_with?: string | null; // String
    openid_gt?: string | null; // String
    openid_gte?: string | null; // String
    openid_in?: string[] | null; // [String!]
    openid_lt?: string | null; // String
    openid_lte?: string | null; // String
    openid_not?: string | null; // String
    openid_not_contains?: string | null; // String
    openid_not_ends_with?: string | null; // String
    openid_not_in?: string[] | null; // [String!]
    openid_not_starts_with?: string | null; // String
    openid_starts_with?: string | null; // String
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: string | null; // String
    password_contains?: string | null; // String
    password_ends_with?: string | null; // String
    password_gt?: string | null; // String
    password_gte?: string | null; // String
    password_in?: string[] | null; // [String!]
    password_lt?: string | null; // String
    password_lte?: string | null; // String
    password_not?: string | null; // String
    password_not_contains?: string | null; // String
    password_not_ends_with?: string | null; // String
    password_not_in?: string[] | null; // [String!]
    password_not_starts_with?: string | null; // String
    password_starts_with?: string | null; // String
    phone_number?: string | null; // String
    phone_number_contains?: string | null; // String
    phone_number_ends_with?: string | null; // String
    phone_number_gt?: string | null; // String
    phone_number_gte?: string | null; // String
    phone_number_in?: string[] | null; // [String!]
    phone_number_lt?: string | null; // String
    phone_number_lte?: string | null; // String
    phone_number_not?: string | null; // String
    phone_number_not_contains?: string | null; // String
    phone_number_not_ends_with?: string | null; // String
    phone_number_not_in?: string[] | null; // [String!]
    phone_number_not_starts_with?: string | null; // String
    phone_number_starts_with?: string | null; // String
    role?: string | null; // String
    role_contains?: string | null; // String
    role_ends_with?: string | null; // String
    role_gt?: string | null; // String
    role_gte?: string | null; // String
    role_in?: string[] | null; // [String!]
    role_lt?: string | null; // String
    role_lte?: string | null; // String
    role_not?: string | null; // String
    role_not_contains?: string | null; // String
    role_not_ends_with?: string | null; // String
    role_not_in?: string[] | null; // [String!]
    role_not_starts_with?: string | null; // String
    role_starts_with?: string | null; // String
    status?: string | null; // String
    status_contains?: string | null; // String
    status_ends_with?: string | null; // String
    status_gt?: string | null; // String
    status_gte?: string | null; // String
    status_in?: string[] | null; // [String!]
    status_lt?: string | null; // String
    status_lte?: string | null; // String
    status_not?: string | null; // String
    status_not_contains?: string | null; // String
    status_not_ends_with?: string | null; // String
    status_not_in?: string[] | null; // [String!]
    status_not_starts_with?: string | null; // String
    status_starts_with?: string | null; // String
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
    openid?: string | null; // String
  }
}

export interface NexusGenEnums {
  MaterialOrderByInput: "content_ASC" | "content_DESC" | "createdAt_ASC" | "createdAt_DESC" | "desc_ASC" | "desc_DESC" | "id_ASC" | "id_DESC" | "published_ASC" | "published_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  SystemOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "slogan_ASC" | "slogan_DESC" | "tel_ASC" | "tel_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "version_code_ASC" | "version_code_DESC"
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "nickname_ASC" | "nickname_DESC" | "openid_ASC" | "openid_DESC" | "password_ASC" | "password_DESC" | "phone_number_ASC" | "phone_number_DESC" | "role_ASC" | "role_DESC" | "status_ASC" | "status_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  Material: { // root type
    content?: string | null; // String
    desc?: string | null; // String
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Mutation: {};
  Query: {};
  System: { // root type
    id: string; // ID!
    name: string; // String!
    slogan?: string | null; // String
  }
  User: { // root type
    id: string; // ID!
    name: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  MaterialCreateManyWithoutAuthorInput: NexusGenInputs['MaterialCreateManyWithoutAuthorInput'];
  MaterialCreateWithoutAuthorInput: NexusGenInputs['MaterialCreateWithoutAuthorInput'];
  MaterialScalarWhereInput: NexusGenInputs['MaterialScalarWhereInput'];
  MaterialUpdateManyDataInput: NexusGenInputs['MaterialUpdateManyDataInput'];
  MaterialUpdateManyWithWhereNestedInput: NexusGenInputs['MaterialUpdateManyWithWhereNestedInput'];
  MaterialUpdateManyWithoutAuthorInput: NexusGenInputs['MaterialUpdateManyWithoutAuthorInput'];
  MaterialUpdateWithWhereUniqueWithoutAuthorInput: NexusGenInputs['MaterialUpdateWithWhereUniqueWithoutAuthorInput'];
  MaterialUpdateWithoutAuthorDataInput: NexusGenInputs['MaterialUpdateWithoutAuthorDataInput'];
  MaterialUpsertWithWhereUniqueWithoutAuthorInput: NexusGenInputs['MaterialUpsertWithWhereUniqueWithoutAuthorInput'];
  MaterialWhereInput: NexusGenInputs['MaterialWhereInput'];
  MaterialWhereUniqueInput: NexusGenInputs['MaterialWhereUniqueInput'];
  SystemWhereInput: NexusGenInputs['SystemWhereInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  MaterialOrderByInput: NexusGenEnums['MaterialOrderByInput'];
  SystemOrderByInput: NexusGenEnums['SystemOrderByInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  Material: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string | null; // String
    desc: string | null; // String
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Mutation: { // field return type
    createUser: NexusGenRootTypes['User']; // User!
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    materials: NexusGenRootTypes['Material'][]; // [Material!]!
    saul: string; // String!
    systems: NexusGenRootTypes['System'][]; // [System!]!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  System: { // field return type
    id: string; // ID!
    name: string; // String!
    slogan: string | null; // String
  }
  User: { // field return type
    id: string; // ID!
    materials: NexusGenRootTypes['Material'][] | null; // [Material!]
    name: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    updateUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    materials: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['MaterialOrderByInput'] | null; // MaterialOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['MaterialWhereInput'] | null; // MaterialWhereInput
    }
    systems: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['SystemOrderByInput'] | null; // SystemOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['SystemWhereInput'] | null; // SystemWhereInput
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  User: {
    materials: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['MaterialOrderByInput'] | null; // MaterialOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['MaterialWhereInput'] | null; // MaterialWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Material" | "Mutation" | "Query" | "System" | "User";

export type NexusGenInputNames = "MaterialCreateManyWithoutAuthorInput" | "MaterialCreateWithoutAuthorInput" | "MaterialScalarWhereInput" | "MaterialUpdateManyDataInput" | "MaterialUpdateManyWithWhereNestedInput" | "MaterialUpdateManyWithoutAuthorInput" | "MaterialUpdateWithWhereUniqueWithoutAuthorInput" | "MaterialUpdateWithoutAuthorDataInput" | "MaterialUpsertWithWhereUniqueWithoutAuthorInput" | "MaterialWhereInput" | "MaterialWhereUniqueInput" | "SystemWhereInput" | "UserCreateInput" | "UserUpdateInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "MaterialOrderByInput" | "SystemOrderByInput" | "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}