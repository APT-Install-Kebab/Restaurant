import OrderModel from './order.model.js';
import OrderProductModel from './order_product.model.js';
import ProductModel from './product.model.js';
import StatusModel from './status.model.js';
import TypeModel from './type.model.js';

ProductModel.hasOne(TypeModel, { foreignKey: { name: 'id' } });
TypeModel.belongsTo(ProductModel, { targetKey: 'id_type', foreignKey: 'id' });

OrderModel.hasOne(StatusModel, { foreignKey: { name: 'id' } });
StatusModel.belongsTo(OrderModel, { targetKey: 'id_status', foreignKey: 'id' });

OrderProductModel.hasOne(OrderModel, { foreignKey: { name: 'uid' } });
OrderModel.belongsTo(OrderProductModel, { targetKey: 'uid_order', foreignKey: 'uid' });

OrderProductModel.hasOne(ProductModel, { foreignKey: { name: 'uid' } });
ProductModel.belongsTo(OrderProductModel, { targetKey: 'uid_product', foreignKey: 'uid' });

export { ProductModel, TypeModel, OrderModel, StatusModel, OrderProductModel };
