export enum EventSection {
  BALANCES = 'Balances',
  COMMON = 'Common',
  SYSTEM = 'System',
  TREASURY = 'Treasury',
  UNIQUE = 'Unique',
}

export enum EventMethod {
  // Unique
  ALLOW_LIST_ADDRESS_ADDDED = 'AllowListAddressAdded',
  ALLOW_LIST_ADDRESS_REMOVED = 'AllowListAddressRemoved',
  COLLECTION_ADMIN_ADDED = 'CollectionAdminAdded',
  COLLECTION_ADMIN_REMOVED = 'CollectionAdminRemoved',
  COLLECTION_SPONSOR_SET = 'CollectionSponsorSet',
  COLLECTION_SPONSOR_REMOVED = 'CollectionSponsorRemoved',
  SPONSORSHIP_CONFIRMED = 'SponsorshipConfirmed',
  COLLECTION_OWNER_CHANGED = 'CollectionOwnedChanged',
  COLLECTION_PERMISSION_SET = 'CollectionPermissionSet',

  // Common
  APPROVED = 'Approved',
  COLLECTION_CREATED = 'CollectionCreated',
  COLLECTION_DESTROYED = 'CollectionDestroyed',
  COLLECTION_PROPERTY_DELETED = 'CollectionPropertyDeleted',
  COLLECTION_PROPERTY_SET = 'CollectionPropertySet',
  ITEM_CREATED = 'ItemCreated',
  ITEM_DESTROYED = 'ItemDestroyed',
  PROPERTY_PERMISSION_SET = 'PropertyPermissionSet',
  TOKEN_PROPERTY_DELETED = 'TokenPropertyDeleted',
  TOKEN_PROPERTY_SET = 'TokenPropertySet',
  // and Transfer

  NEW_ACCOUNT = 'NewAccount',
  EXTRINSIC_SUCCESS = 'ExtrinsicSuccess',
  EXTRINSIC_FAILED = 'ExtrinsicFailed',
  COLLECTION_LIMIT_SET = 'CollectionLimitSet',

  // Balances
  BALANCE_SET = 'BalanceSet',
  DEPOSIT = 'Deposit',
  DUST_LOST = 'DustLost',
  ENDOWED = 'Endowed',
  RESERVED = 'Reserved',
  RESERVED_REPATRIATED = 'ReserveRepatriated',
  SLASHED = 'Slashed',
  TRANSFER = 'Transfer',
  UNRESERVED = 'Unreserved',
  WITHDRAW = 'Withdraw',
}

export const EventName = {
  // System
  EXTRINSIC_SUCCESS: `${EventSection.SYSTEM}.${EventMethod.EXTRINSIC_SUCCESS}`,
  EXTRINSIC_FAILED: `${EventSection.SYSTEM}.${EventMethod.EXTRINSIC_FAILED}`,
  NEW_ACCOUNT: `${EventSection.SYSTEM}.${EventMethod.NEW_ACCOUNT}`,

  // Common
  APPROVED: `${EventSection.COMMON}.${EventMethod.APPROVED}`,
  COLLECTION_CREATED: `${EventSection.COMMON}.${EventMethod.COLLECTION_CREATED}`,
  COLLECTION_DESTROYED: `${EventSection.COMMON}.${EventMethod.COLLECTION_DESTROYED}`,
  COLLECTION_PROPERTY_DELETED: `${EventSection.COMMON}.${EventMethod.COLLECTION_PROPERTY_DELETED}`,
  COLLECTION_PROPERTY_SET: `${EventSection.COMMON}.${EventMethod.COLLECTION_PROPERTY_SET}`,
  ITEM_CREATED: `${EventSection.COMMON}.${EventMethod.ITEM_CREATED}`,
  ITEM_DESTROYED: `${EventSection.COMMON}.${EventMethod.ITEM_DESTROYED}`,
  PROPERTY_PERMISSION_SET: `${EventSection.COMMON}.${EventMethod.PROPERTY_PERMISSION_SET}`,
  TOKEN_PROPERTY_SET: `${EventSection.COMMON}.${EventMethod.TOKEN_PROPERTY_SET}`,
  TOKEN_PROPERTY_DELETED: `${EventSection.COMMON}.${EventMethod.TOKEN_PROPERTY_DELETED}`,
  TRANSFER: `${EventSection.COMMON}.${EventMethod.TRANSFER}`,

  // Unique
  ALLOW_LIST_ADDRESS_ADDED: `${EventSection.UNIQUE}.${EventMethod.ALLOW_LIST_ADDRESS_ADDDED}`,
  ALLOW_LIST_ADDRESS_REMOVED: `${EventSection.UNIQUE}.${EventMethod.ALLOW_LIST_ADDRESS_REMOVED}`,
  COLLECTION_SPONSOR_REMOVED: `${EventSection.UNIQUE}.${EventMethod.COLLECTION_SPONSOR_REMOVED}`,
  COLLECTION_ADMIN_ADDED: `${EventSection.UNIQUE}.${EventMethod.COLLECTION_ADMIN_ADDED}`,
  COLLECTION_ADMIN_REMOVED: `${EventSection.UNIQUE}.${EventMethod.COLLECTION_ADMIN_REMOVED}`,
  COLLECTION_OWNED_CHANGED: `${EventSection.UNIQUE}.${EventMethod.COLLECTION_OWNER_CHANGED}`,
  COLLECTION_LIMIT_SET: `${EventSection.UNIQUE}.${EventMethod.COLLECTION_LIMIT_SET}`,
  COLLECTION_SPONSOR_SET: `${EventSection.UNIQUE}.${EventMethod.COLLECTION_SPONSOR_SET}`,
  SPONSORSHIP_CONFIRMED: `${EventSection.UNIQUE}.${EventMethod.SPONSORSHIP_CONFIRMED}`,
  COLLECTION_PERMISSION_SET: `${EventSection.UNIQUE}.${EventMethod.COLLECTION_PERMISSION_SET}`,

  // Balances
  BALANCES_DEPOSIT: `${EventSection.BALANCES}.${EventMethod.DEPOSIT}`,
  BALANCES_ENDOWED: `${EventSection.BALANCES}.${EventMethod.ENDOWED}`,
  BALANCES_WITHDRAW: `${EventSection.BALANCES}.${EventMethod.WITHDRAW}`,
  BALANCES_TRANSFER: `${EventSection.BALANCES}.${EventMethod.TRANSFER}`,
  BALANCES_BALANCE_SET: `${EventSection.BALANCES}.${EventMethod.BALANCE_SET}`,
  BALANCES_RESERVED: `${EventSection.BALANCES}.${EventMethod.RESERVED}`,
  BALANCES_UNRESERVED: `${EventSection.BALANCES}.${EventMethod.UNRESERVED}`,
  BALANCES_DUST_LOST: `${EventSection.BALANCES}.${EventMethod.DUST_LOST}`,
  BALANCES_RESERVED_REPATRIATED: `${EventSection.BALANCES}.${EventMethod.RESERVED_REPATRIATED}`,
  BALANCES_SLASHED: `${EventSection.BALANCES}.${EventMethod.SLASHED}`,

  // Treasury
  TREASURY_DEPOSIT: `${EventSection.TREASURY}.${EventMethod.DEPOSIT}`,
};
