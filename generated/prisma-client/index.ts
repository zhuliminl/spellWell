// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  material: (where?: MaterialWhereInput) => Promise<boolean>;
  system: (where?: SystemWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  material: (where: MaterialWhereUniqueInput) => MaterialNullablePromise;
  materials: (args?: {
    where?: MaterialWhereInput;
    orderBy?: MaterialOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Material>;
  materialsConnection: (args?: {
    where?: MaterialWhereInput;
    orderBy?: MaterialOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MaterialConnectionPromise;
  system: (where: SystemWhereUniqueInput) => SystemNullablePromise;
  systems: (args?: {
    where?: SystemWhereInput;
    orderBy?: SystemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<System>;
  systemsConnection: (args?: {
    where?: SystemWhereInput;
    orderBy?: SystemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => SystemConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMaterial: (data: MaterialCreateInput) => MaterialPromise;
  updateMaterial: (args: {
    data: MaterialUpdateInput;
    where: MaterialWhereUniqueInput;
  }) => MaterialPromise;
  updateManyMaterials: (args: {
    data: MaterialUpdateManyMutationInput;
    where?: MaterialWhereInput;
  }) => BatchPayloadPromise;
  upsertMaterial: (args: {
    where: MaterialWhereUniqueInput;
    create: MaterialCreateInput;
    update: MaterialUpdateInput;
  }) => MaterialPromise;
  deleteMaterial: (where: MaterialWhereUniqueInput) => MaterialPromise;
  deleteManyMaterials: (where?: MaterialWhereInput) => BatchPayloadPromise;
  createSystem: (data: SystemCreateInput) => SystemPromise;
  updateSystem: (args: {
    data: SystemUpdateInput;
    where: SystemWhereUniqueInput;
  }) => SystemPromise;
  updateManySystems: (args: {
    data: SystemUpdateManyMutationInput;
    where?: SystemWhereInput;
  }) => BatchPayloadPromise;
  upsertSystem: (args: {
    where: SystemWhereUniqueInput;
    create: SystemCreateInput;
    update: SystemUpdateInput;
  }) => SystemPromise;
  deleteSystem: (where: SystemWhereUniqueInput) => SystemPromise;
  deleteManySystems: (where?: SystemWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  material: (
    where?: MaterialSubscriptionWhereInput
  ) => MaterialSubscriptionPayloadSubscription;
  system: (
    where?: SystemSubscriptionWhereInput
  ) => SystemSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MaterialOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "desc_ASC"
  | "desc_DESC"
  | "published_ASC"
  | "published_DESC";

export type SystemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "slogan_ASC"
  | "slogan_DESC"
  | "tel_ASC"
  | "tel_DESC"
  | "version_code_ASC"
  | "version_code_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "role_ASC"
  | "role_DESC"
  | "email_ASC"
  | "email_DESC"
  | "name_ASC"
  | "name_DESC"
  | "openid_ASC"
  | "openid_DESC"
  | "status_ASC"
  | "status_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneWithoutMaterialsInput {
  create?: Maybe<UserCreateWithoutMaterialsInput>;
  update?: Maybe<UserUpdateWithoutMaterialsDataInput>;
  upsert?: Maybe<UserUpsertWithoutMaterialsInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type MaterialWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface MaterialUpdateManyMutationInput {
  title?: Maybe<String>;
  desc?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface MaterialWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  desc?: Maybe<String>;
  desc_not?: Maybe<String>;
  desc_in?: Maybe<String[] | String>;
  desc_not_in?: Maybe<String[] | String>;
  desc_lt?: Maybe<String>;
  desc_lte?: Maybe<String>;
  desc_gt?: Maybe<String>;
  desc_gte?: Maybe<String>;
  desc_contains?: Maybe<String>;
  desc_not_contains?: Maybe<String>;
  desc_starts_with?: Maybe<String>;
  desc_not_starts_with?: Maybe<String>;
  desc_ends_with?: Maybe<String>;
  desc_not_ends_with?: Maybe<String>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  author?: Maybe<UserWhereInput>;
  AND?: Maybe<MaterialWhereInput[] | MaterialWhereInput>;
  OR?: Maybe<MaterialWhereInput[] | MaterialWhereInput>;
  NOT?: Maybe<MaterialWhereInput[] | MaterialWhereInput>;
}

export interface UserUpdateInput {
  role?: Maybe<String>;
  email?: Maybe<String>;
  name?: Maybe<String>;
  openid?: Maybe<String>;
  materials?: Maybe<MaterialUpdateManyWithoutAuthorInput>;
  status?: Maybe<String>;
}

export interface SystemUpdateInput {
  name?: Maybe<String>;
  slogan?: Maybe<String>;
  tel?: Maybe<String>;
  version_code?: Maybe<String>;
}

export interface MaterialCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  title: String;
  desc?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface SystemSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<SystemWhereInput>;
  AND?: Maybe<SystemSubscriptionWhereInput[] | SystemSubscriptionWhereInput>;
  OR?: Maybe<SystemSubscriptionWhereInput[] | SystemSubscriptionWhereInput>;
  NOT?: Maybe<SystemSubscriptionWhereInput[] | SystemSubscriptionWhereInput>;
}

export type SystemWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface SystemCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  slogan?: Maybe<String>;
  tel?: Maybe<String>;
  version_code?: Maybe<String>;
}

export interface MaterialCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  desc?: Maybe<String>;
  published?: Maybe<Boolean>;
  author?: Maybe<UserCreateOneWithoutMaterialsInput>;
}

export interface UserUpdateManyMutationInput {
  role?: Maybe<String>;
  email?: Maybe<String>;
  name?: Maybe<String>;
  openid?: Maybe<String>;
  status?: Maybe<String>;
}

export interface UserCreateOneWithoutMaterialsInput {
  create?: Maybe<UserCreateWithoutMaterialsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface SystemWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  slogan?: Maybe<String>;
  slogan_not?: Maybe<String>;
  slogan_in?: Maybe<String[] | String>;
  slogan_not_in?: Maybe<String[] | String>;
  slogan_lt?: Maybe<String>;
  slogan_lte?: Maybe<String>;
  slogan_gt?: Maybe<String>;
  slogan_gte?: Maybe<String>;
  slogan_contains?: Maybe<String>;
  slogan_not_contains?: Maybe<String>;
  slogan_starts_with?: Maybe<String>;
  slogan_not_starts_with?: Maybe<String>;
  slogan_ends_with?: Maybe<String>;
  slogan_not_ends_with?: Maybe<String>;
  tel?: Maybe<String>;
  tel_not?: Maybe<String>;
  tel_in?: Maybe<String[] | String>;
  tel_not_in?: Maybe<String[] | String>;
  tel_lt?: Maybe<String>;
  tel_lte?: Maybe<String>;
  tel_gt?: Maybe<String>;
  tel_gte?: Maybe<String>;
  tel_contains?: Maybe<String>;
  tel_not_contains?: Maybe<String>;
  tel_starts_with?: Maybe<String>;
  tel_not_starts_with?: Maybe<String>;
  tel_ends_with?: Maybe<String>;
  tel_not_ends_with?: Maybe<String>;
  version_code?: Maybe<String>;
  version_code_not?: Maybe<String>;
  version_code_in?: Maybe<String[] | String>;
  version_code_not_in?: Maybe<String[] | String>;
  version_code_lt?: Maybe<String>;
  version_code_lte?: Maybe<String>;
  version_code_gt?: Maybe<String>;
  version_code_gte?: Maybe<String>;
  version_code_contains?: Maybe<String>;
  version_code_not_contains?: Maybe<String>;
  version_code_starts_with?: Maybe<String>;
  version_code_not_starts_with?: Maybe<String>;
  version_code_ends_with?: Maybe<String>;
  version_code_not_ends_with?: Maybe<String>;
  AND?: Maybe<SystemWhereInput[] | SystemWhereInput>;
  OR?: Maybe<SystemWhereInput[] | SystemWhereInput>;
  NOT?: Maybe<SystemWhereInput[] | SystemWhereInput>;
}

export interface UserCreateWithoutMaterialsInput {
  id?: Maybe<ID_Input>;
  role?: Maybe<String>;
  email?: Maybe<String>;
  name: String;
  openid?: Maybe<String>;
  status?: Maybe<String>;
}

export interface MaterialScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  desc?: Maybe<String>;
  desc_not?: Maybe<String>;
  desc_in?: Maybe<String[] | String>;
  desc_not_in?: Maybe<String[] | String>;
  desc_lt?: Maybe<String>;
  desc_lte?: Maybe<String>;
  desc_gt?: Maybe<String>;
  desc_gte?: Maybe<String>;
  desc_contains?: Maybe<String>;
  desc_not_contains?: Maybe<String>;
  desc_starts_with?: Maybe<String>;
  desc_not_starts_with?: Maybe<String>;
  desc_ends_with?: Maybe<String>;
  desc_not_ends_with?: Maybe<String>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  AND?: Maybe<MaterialScalarWhereInput[] | MaterialScalarWhereInput>;
  OR?: Maybe<MaterialScalarWhereInput[] | MaterialScalarWhereInput>;
  NOT?: Maybe<MaterialScalarWhereInput[] | MaterialScalarWhereInput>;
}

export interface MaterialUpdateInput {
  title?: Maybe<String>;
  desc?: Maybe<String>;
  published?: Maybe<Boolean>;
  author?: Maybe<UserUpdateOneWithoutMaterialsInput>;
}

export interface MaterialUpdateWithoutAuthorDataInput {
  title?: Maybe<String>;
  desc?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface MaterialCreateManyWithoutAuthorInput {
  create?: Maybe<
    MaterialCreateWithoutAuthorInput[] | MaterialCreateWithoutAuthorInput
  >;
  connect?: Maybe<MaterialWhereUniqueInput[] | MaterialWhereUniqueInput>;
}

export interface MaterialUpdateWithWhereUniqueWithoutAuthorInput {
  where: MaterialWhereUniqueInput;
  data: MaterialUpdateWithoutAuthorDataInput;
}

export interface UserUpdateWithoutMaterialsDataInput {
  role?: Maybe<String>;
  email?: Maybe<String>;
  name?: Maybe<String>;
  openid?: Maybe<String>;
  status?: Maybe<String>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface MaterialUpdateManyDataInput {
  title?: Maybe<String>;
  desc?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface SystemUpdateManyMutationInput {
  name?: Maybe<String>;
  slogan?: Maybe<String>;
  tel?: Maybe<String>;
  version_code?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  role?: Maybe<String>;
  email?: Maybe<String>;
  name: String;
  openid?: Maybe<String>;
  materials?: Maybe<MaterialCreateManyWithoutAuthorInput>;
  status?: Maybe<String>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  role?: Maybe<String>;
  role_not?: Maybe<String>;
  role_in?: Maybe<String[] | String>;
  role_not_in?: Maybe<String[] | String>;
  role_lt?: Maybe<String>;
  role_lte?: Maybe<String>;
  role_gt?: Maybe<String>;
  role_gte?: Maybe<String>;
  role_contains?: Maybe<String>;
  role_not_contains?: Maybe<String>;
  role_starts_with?: Maybe<String>;
  role_not_starts_with?: Maybe<String>;
  role_ends_with?: Maybe<String>;
  role_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  openid?: Maybe<String>;
  openid_not?: Maybe<String>;
  openid_in?: Maybe<String[] | String>;
  openid_not_in?: Maybe<String[] | String>;
  openid_lt?: Maybe<String>;
  openid_lte?: Maybe<String>;
  openid_gt?: Maybe<String>;
  openid_gte?: Maybe<String>;
  openid_contains?: Maybe<String>;
  openid_not_contains?: Maybe<String>;
  openid_starts_with?: Maybe<String>;
  openid_not_starts_with?: Maybe<String>;
  openid_ends_with?: Maybe<String>;
  openid_not_ends_with?: Maybe<String>;
  materials_every?: Maybe<MaterialWhereInput>;
  materials_some?: Maybe<MaterialWhereInput>;
  materials_none?: Maybe<MaterialWhereInput>;
  status?: Maybe<String>;
  status_not?: Maybe<String>;
  status_in?: Maybe<String[] | String>;
  status_not_in?: Maybe<String[] | String>;
  status_lt?: Maybe<String>;
  status_lte?: Maybe<String>;
  status_gt?: Maybe<String>;
  status_gte?: Maybe<String>;
  status_contains?: Maybe<String>;
  status_not_contains?: Maybe<String>;
  status_starts_with?: Maybe<String>;
  status_not_starts_with?: Maybe<String>;
  status_ends_with?: Maybe<String>;
  status_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserUpsertWithoutMaterialsInput {
  update: UserUpdateWithoutMaterialsDataInput;
  create: UserCreateWithoutMaterialsInput;
}

export interface MaterialUpdateManyWithWhereNestedInput {
  where: MaterialScalarWhereInput;
  data: MaterialUpdateManyDataInput;
}

export interface MaterialSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<MaterialWhereInput>;
  AND?: Maybe<
    MaterialSubscriptionWhereInput[] | MaterialSubscriptionWhereInput
  >;
  OR?: Maybe<MaterialSubscriptionWhereInput[] | MaterialSubscriptionWhereInput>;
  NOT?: Maybe<
    MaterialSubscriptionWhereInput[] | MaterialSubscriptionWhereInput
  >;
}

export interface MaterialUpdateManyWithoutAuthorInput {
  create?: Maybe<
    MaterialCreateWithoutAuthorInput[] | MaterialCreateWithoutAuthorInput
  >;
  delete?: Maybe<MaterialWhereUniqueInput[] | MaterialWhereUniqueInput>;
  connect?: Maybe<MaterialWhereUniqueInput[] | MaterialWhereUniqueInput>;
  set?: Maybe<MaterialWhereUniqueInput[] | MaterialWhereUniqueInput>;
  disconnect?: Maybe<MaterialWhereUniqueInput[] | MaterialWhereUniqueInput>;
  update?: Maybe<
    | MaterialUpdateWithWhereUniqueWithoutAuthorInput[]
    | MaterialUpdateWithWhereUniqueWithoutAuthorInput
  >;
  upsert?: Maybe<
    | MaterialUpsertWithWhereUniqueWithoutAuthorInput[]
    | MaterialUpsertWithWhereUniqueWithoutAuthorInput
  >;
  deleteMany?: Maybe<MaterialScalarWhereInput[] | MaterialScalarWhereInput>;
  updateMany?: Maybe<
    | MaterialUpdateManyWithWhereNestedInput[]
    | MaterialUpdateManyWithWhereNestedInput
  >;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
  openid?: Maybe<String>;
}>;

export interface MaterialUpsertWithWhereUniqueWithoutAuthorInput {
  where: MaterialWhereUniqueInput;
  update: MaterialUpdateWithoutAuthorDataInput;
  create: MaterialCreateWithoutAuthorInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  role?: String;
  email?: String;
  name: String;
  openid?: String;
  status?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  role: () => Promise<String>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  openid: () => Promise<String>;
  status: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  role: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  openid: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<String>>;
}

export interface System {
  id: ID_Output;
  name: String;
  slogan?: String;
  tel?: String;
  version_code?: String;
}

export interface SystemPromise extends Promise<System>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  slogan: () => Promise<String>;
  tel: () => Promise<String>;
  version_code: () => Promise<String>;
}

export interface SystemSubscription
  extends Promise<AsyncIterator<System>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  slogan: () => Promise<AsyncIterator<String>>;
  tel: () => Promise<AsyncIterator<String>>;
  version_code: () => Promise<AsyncIterator<String>>;
}

export interface SystemNullablePromise
  extends Promise<System | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  slogan: () => Promise<String>;
  tel: () => Promise<String>;
  version_code: () => Promise<String>;
}

export interface User {
  id: ID_Output;
  role?: String;
  email?: String;
  name: String;
  openid?: String;
  status?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  role: () => Promise<String>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  openid: () => Promise<String>;
  materials: <T = FragmentableArray<Material>>(args?: {
    where?: MaterialWhereInput;
    orderBy?: MaterialOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  status: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  role: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  openid: () => Promise<AsyncIterator<String>>;
  materials: <T = Promise<AsyncIterator<MaterialSubscription>>>(args?: {
    where?: MaterialWhereInput;
    orderBy?: MaterialOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  status: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  role: () => Promise<String>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  openid: () => Promise<String>;
  materials: <T = FragmentableArray<Material>>(args?: {
    where?: MaterialWhereInput;
    orderBy?: MaterialOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  status: () => Promise<String>;
}

export interface SystemPreviousValues {
  id: ID_Output;
  name: String;
  slogan?: String;
  tel?: String;
  version_code?: String;
}

export interface SystemPreviousValuesPromise
  extends Promise<SystemPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  slogan: () => Promise<String>;
  tel: () => Promise<String>;
  version_code: () => Promise<String>;
}

export interface SystemPreviousValuesSubscription
  extends Promise<AsyncIterator<SystemPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  slogan: () => Promise<AsyncIterator<String>>;
  tel: () => Promise<AsyncIterator<String>>;
  version_code: () => Promise<AsyncIterator<String>>;
}

export interface SystemSubscriptionPayload {
  mutation: MutationType;
  node: System;
  updatedFields: String[];
  previousValues: SystemPreviousValues;
}

export interface SystemSubscriptionPayloadPromise
  extends Promise<SystemSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SystemPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SystemPreviousValuesPromise>() => T;
}

export interface SystemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SystemSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SystemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SystemPreviousValuesSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateMaterial {
  count: Int;
}

export interface AggregateMaterialPromise
  extends Promise<AggregateMaterial>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMaterialSubscription
  extends Promise<AsyncIterator<AggregateMaterial>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface MaterialEdge {
  node: Material;
  cursor: String;
}

export interface MaterialEdgePromise
  extends Promise<MaterialEdge>,
    Fragmentable {
  node: <T = MaterialPromise>() => T;
  cursor: () => Promise<String>;
}

export interface MaterialEdgeSubscription
  extends Promise<AsyncIterator<MaterialEdge>>,
    Fragmentable {
  node: <T = MaterialSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateSystem {
  count: Int;
}

export interface AggregateSystemPromise
  extends Promise<AggregateSystem>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSystemSubscription
  extends Promise<AsyncIterator<AggregateSystem>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface MaterialPreviousValues {
  id: ID_Output;
  title: String;
  desc?: String;
  published: Boolean;
}

export interface MaterialPreviousValuesPromise
  extends Promise<MaterialPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  desc: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface MaterialPreviousValuesSubscription
  extends Promise<AsyncIterator<MaterialPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  desc: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface MaterialSubscriptionPayload {
  mutation: MutationType;
  node: Material;
  updatedFields: String[];
  previousValues: MaterialPreviousValues;
}

export interface MaterialSubscriptionPayloadPromise
  extends Promise<MaterialSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MaterialPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MaterialPreviousValuesPromise>() => T;
}

export interface MaterialSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MaterialSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MaterialSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MaterialPreviousValuesSubscription>() => T;
}

export interface Material {
  id: ID_Output;
  title: String;
  desc?: String;
  published: Boolean;
}

export interface MaterialPromise extends Promise<Material>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  desc: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
}

export interface MaterialSubscription
  extends Promise<AsyncIterator<Material>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  desc: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
}

export interface MaterialNullablePromise
  extends Promise<Material | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  desc: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
}

export interface SystemEdge {
  node: System;
  cursor: String;
}

export interface SystemEdgePromise extends Promise<SystemEdge>, Fragmentable {
  node: <T = SystemPromise>() => T;
  cursor: () => Promise<String>;
}

export interface SystemEdgeSubscription
  extends Promise<AsyncIterator<SystemEdge>>,
    Fragmentable {
  node: <T = SystemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface MaterialConnection {
  pageInfo: PageInfo;
  edges: MaterialEdge[];
}

export interface MaterialConnectionPromise
  extends Promise<MaterialConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MaterialEdge>>() => T;
  aggregate: <T = AggregateMaterialPromise>() => T;
}

export interface MaterialConnectionSubscription
  extends Promise<AsyncIterator<MaterialConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MaterialEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMaterialSubscription>() => T;
}

export interface SystemConnection {
  pageInfo: PageInfo;
  edges: SystemEdge[];
}

export interface SystemConnectionPromise
  extends Promise<SystemConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<SystemEdge>>() => T;
  aggregate: <T = AggregateSystemPromise>() => T;
}

export interface SystemConnectionSubscription
  extends Promise<AsyncIterator<SystemConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SystemEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSystemSubscription>() => T;
}

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Material",
    embedded: false
  },
  {
    name: "System",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
