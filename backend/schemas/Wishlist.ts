import { relationship, checkbox } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn } from '../access';

export const WishList = list({
  access: {
    create: isSignedIn
  },
  ui: {
    listView: {
      initialColumns: ['product', 'isChecked', 'user']
    }
  },
  fields: {
    isChecked: checkbox({
      defaultValue: true,
      isRequired: true
    }),
    product: relationship({ ref: 'Product' }),
    user: relationship({ ref: 'User.wishlist' })
  },
});
