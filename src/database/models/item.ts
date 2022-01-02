import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

interface ItemAttributes {
  id?: number;
  name: string;
  quantity: number;
  expiry: string;
}

type ItemCreationAttributes = Optional<ItemAttributes, 'id'>;

export default (sequelize: Sequelize) => {
  class Item extends Model<ItemAttributes, ItemCreationAttributes> implements ItemAttributes {
    id?: number | undefined;

    name!: string;

    quantity!: number;

    expiry!: string;

    createdAt?: Date;

    updatedAt?: Date;
  }
  Item.init(
    {
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      expiry: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Item',
      tableName: 'items',
    },
  );
  return Item;
};
