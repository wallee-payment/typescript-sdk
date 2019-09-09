'use strict';

enum AccountState{

    CREATE = 'CREATE',
    RESTRICTED_ACTIVE = 'RESTRICTED_ACTIVE',
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DELETING = 'DELETING',
    DELETED = 'DELETED',
}

export { AccountState }
