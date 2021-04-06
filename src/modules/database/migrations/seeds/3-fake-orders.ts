import * as faker from 'faker/locale/pt_BR';
import * as Knex from 'knex';
import { IOrder } from 'modules/database/interfaces/order';
import { IS_DEV } from 'settings';

export async function seed(knex: Knex): Promise<void> {
  if (!IS_DEV) return;

  for (let x = 0; x < 100; x++) {
    const order: IOrder = {
      description: `Carro n: ${x}`,
      quantity: Math.floor(Math.random() * x + 1),
      value: Math.floor(Math.random() * 1000 * x),
      createdDate: new Date(),
      updatedDate: new Date()
    };

    await knex.insert(order).into('Order');
  }
}
