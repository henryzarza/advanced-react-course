import { KeystoneContext } from '@keystone-next/types';
import { Session } from '../types';

async function addToWishlist(
  _: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<any> {
  // 1. Query the current user see if they are signed in
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('You must be logged in to do this!');
  }
  // 2. Query the current user wishlist
  const allwishlist = await context.lists.WishList.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id,isChecked'
  });

  const [existingItem] = allwishlist;
  if (existingItem) {
    return await context.lists.WishList.updateOne({
      id: existingItem.id,
      data: { isChecked: false },
      resolveFields: false
    });
  }
  // 4. if it isnt, create a new wish item
  return await context.lists.WishList.createOne({
    data: {
      isChecked: true,
      product: { connect: { id: productId }},
      user: { connect: { id: sesh.itemId }}
    },
    resolveFields: false
  })
}

export default addToWishlist;
