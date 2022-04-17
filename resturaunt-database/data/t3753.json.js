window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3753","name":"users","subtype":"COLLECTION","is_user_defined":false,"description":"","summary":[{"field":"Documentation","value":{"_type":"link","name":"Resturaunt Database","id":"d10"}},{"field":"Schema","value":"resturauntDatabase"},{"field":"Name","value":"users"},{"field":"Type","value":"Collection"}],"columns":[{"id":"column-34725","object_id":"column-34725","name":"_id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34726","object_id":"column-34726","name":"name","name_without_path":"name","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34727","object_id":"column-34727","name":"email","name_without_path":"email","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34728","object_id":"column-34728","name":"password","name_without_path":"password","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34729","object_id":"column-34729","name":"type","name_without_path":"type","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34730","object_id":"column-34730","name":"__v","name_without_path":"__v","description":"","is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34731","object_id":"column-34731","name":"favourites","name_without_path":"favourites","description":"","is_pk":false,"is_identity":false,"data_type":"Null[]/Document[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"MIXED","is_user_defined":false,"children":[{"id":"column-34747","object_id":"column-34747","name":"favourites.itemId","name_without_path":"itemId","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"favourites","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[{"id":"t3751","name":"items","name_show_schema":"resturauntDatabase.items"}]},{"id":"column-34748","object_id":"column-34748","name":"favourites.rating","name_without_path":"rating","description":"","is_pk":false,"is_identity":false,"data_type":"Double","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"favourites","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34749","object_id":"column-34749","name":"favourites._id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"favourites","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]}],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34732","object_id":"column-34732","name":"orderHistory","name_without_path":"orderHistory","description":"","is_pk":false,"is_identity":false,"data_type":"Null[]/Document[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"MIXED","is_user_defined":false,"children":[{"id":"column-34750","object_id":"column-34750","name":"orderHistory.items","name_without_path":"items","description":"","is_pk":false,"is_identity":false,"data_type":"Document[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"DOCUMENT_ARRAY","is_user_defined":false,"children":[{"id":"column-34761","object_id":"column-34761","name":"orderHistory.items.itemId","name_without_path":"itemId","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory.items","level":3,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3751","name":"items","name_show_schema":"resturauntDatabase.items"}]},{"id":"column-34762","object_id":"column-34762","name":"orderHistory.items.quantity","name_without_path":"quantity","description":"","is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory.items","level":3,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34763","object_id":"column-34763","name":"orderHistory.items._id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory.items","level":3,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34751","object_id":"column-34751","name":"orderHistory.total","name_without_path":"total","description":"","is_pk":false,"is_identity":false,"data_type":"Decimal128","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34752","object_id":"column-34752","name":"orderHistory.itemTotal","name_without_path":"itemTotal","description":"","is_pk":false,"is_identity":false,"data_type":"Decimal128","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34753","object_id":"column-34753","name":"orderHistory.isDelivery","name_without_path":"isDelivery","description":"","is_pk":false,"is_identity":false,"data_type":"Boolean","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34754","object_id":"column-34754","name":"orderHistory.address","name_without_path":"address","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34755","object_id":"column-34755","name":"orderHistory.deliveryFees","name_without_path":"deliveryFees","description":"","is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34756","object_id":"column-34756","name":"orderHistory.isComplete","name_without_path":"isComplete","description":"","is_pk":false,"is_identity":false,"data_type":"Boolean","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34757","object_id":"column-34757","name":"orderHistory.time","name_without_path":"time","description":"","is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34758","object_id":"column-34758","name":"orderHistory.couponCode","name_without_path":"couponCode","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34759","object_id":"column-34759","name":"orderHistory.couponDiscount","name_without_path":"couponDiscount","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34760","object_id":"column-34760","name":"orderHistory._id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"orderHistory","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]}],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34733","object_id":"column-34733","name":"fName","name_without_path":"fName","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34734","object_id":"column-34734","name":"lName","name_without_path":"lName","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34735","object_id":"column-34735","name":"currentOrder","name_without_path":"currentOrder","description":"","is_pk":false,"is_identity":false,"data_type":"Document","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"DOCUMENT","is_user_defined":false,"children":[{"id":"column-34736","object_id":"column-34736","name":"currentOrder.items","name_without_path":"items","description":"","is_pk":false,"is_identity":false,"data_type":"Document[]/Null[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"MIXED","is_user_defined":false,"children":[{"id":"column-34764","object_id":"column-34764","name":"currentOrder.items.itemId","name_without_path":"itemId","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder.items","level":3,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3751","name":"items","name_show_schema":"resturauntDatabase.items"}]},{"id":"column-34765","object_id":"column-34765","name":"currentOrder.items.quantity","name_without_path":"quantity","description":"","is_pk":false,"is_identity":false,"data_type":"Int32/String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder.items","level":3,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34766","object_id":"column-34766","name":"currentOrder.items._id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder.items","level":3,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34737","object_id":"column-34737","name":"currentOrder.total","name_without_path":"total","description":"","is_pk":false,"is_identity":false,"data_type":"Decimal128/Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34738","object_id":"column-34738","name":"currentOrder.isDelivery","name_without_path":"isDelivery","description":"","is_pk":false,"is_identity":false,"data_type":"Boolean","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34739","object_id":"column-34739","name":"currentOrder.deliveryFees","name_without_path":"deliveryFees","description":"","is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34740","object_id":"column-34740","name":"currentOrder.isComplete","name_without_path":"isComplete","description":"","is_pk":false,"is_identity":false,"data_type":"Boolean","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34741","object_id":"column-34741","name":"currentOrder.time","name_without_path":"time","description":"","is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34742","object_id":"column-34742","name":"currentOrder.couponCode","name_without_path":"couponCode","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[{"id":"t3750","name":"coupons","name_show_schema":"resturauntDatabase.coupons"}]},{"id":"column-34743","object_id":"column-34743","name":"currentOrder.couponDiscount","name_without_path":"couponDiscount","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34744","object_id":"column-34744","name":"currentOrder._id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34745","object_id":"column-34745","name":"currentOrder.itemTotal","name_without_path":"itemTotal","description":"","is_pk":false,"is_identity":false,"data_type":"Decimal128","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34746","object_id":"column-34746","name":"currentOrder.address","name_without_path":"address","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"currentOrder","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]}],"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"fk_coupons_users","title":"","description":"","is_user_defined":true,"foreign_table":"users","foreign_table_show_schema":"resturauntDatabase.users","foreign_table_verbose":"users","foreign_table_verbose_show_schema":"resturauntDatabase.users","foreign_table_object_id":"t3753","primary_table":"coupons","primary_table_show_schema":"resturauntDatabase.coupons","primary_table_verbose":"coupons","primary_table_verbose_show_schema":"resturauntDatabase.coupons","primary_table_object_id":"t3750","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"code","foreign_column_path":"currentOrder","foreign_column":"couponCode"}],"custom_fields":{}},{"name":"fk_items_users","title":"","description":"","is_user_defined":true,"foreign_table":"users","foreign_table_show_schema":"resturauntDatabase.users","foreign_table_verbose":"users","foreign_table_verbose_show_schema":"resturauntDatabase.users","foreign_table_object_id":"t3753","primary_table":"items","primary_table_show_schema":"resturauntDatabase.items","primary_table_verbose":"items","primary_table_verbose_show_schema":"resturauntDatabase.items","primary_table_object_id":"t3751","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"favourites","foreign_column":"itemId"}],"custom_fields":{}},{"name":"fk_items_users","title":"","description":"","is_user_defined":true,"foreign_table":"users","foreign_table_show_schema":"resturauntDatabase.users","foreign_table_verbose":"users","foreign_table_verbose_show_schema":"resturauntDatabase.users","foreign_table_object_id":"t3753","primary_table":"items","primary_table_show_schema":"resturauntDatabase.items","primary_table_verbose":"items","primary_table_verbose_show_schema":"resturauntDatabase.items","primary_table_object_id":"t3751","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"orderHistory.items","foreign_column":"itemId"}],"custom_fields":{}},{"name":"fk_items_users","title":"","description":"","is_user_defined":true,"foreign_table":"users","foreign_table_show_schema":"resturauntDatabase.users","foreign_table_verbose":"users","foreign_table_verbose_show_schema":"resturauntDatabase.users","foreign_table_object_id":"t3753","primary_table":"items","primary_table_show_schema":"resturauntDatabase.items","primary_table_verbose":"items","primary_table_verbose_show_schema":"resturauntDatabase.items","primary_table_object_id":"t3751","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"currentOrder.items","foreign_column":"itemId"}],"custom_fields":{}},{"name":"fk_users_items","title":"","description":"","is_user_defined":true,"foreign_table":"items","foreign_table_show_schema":"resturauntDatabase.items","foreign_table_verbose":"items","foreign_table_verbose_show_schema":"resturauntDatabase.items","foreign_table_object_id":"t3751","primary_table":"users","primary_table_show_schema":"resturauntDatabase.users","primary_table_verbose":"users","primary_table_verbose_show_schema":"resturauntDatabase.users","primary_table_object_id":"t3753","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"ratings","foreign_column":"userId"}],"custom_fields":{}},{"name":"fk_users_staffs","title":"","description":"","is_user_defined":true,"foreign_table":"staffs","foreign_table_show_schema":"resturauntDatabase.staffs","foreign_table_verbose":"staffs","foreign_table_verbose_show_schema":"resturauntDatabase.staffs","foreign_table_object_id":"t3752","primary_table":"users","primary_table_show_schema":"resturauntDatabase.users","primary_table_verbose":"users","primary_table_verbose_show_schema":"resturauntDatabase.users","primary_table_object_id":"t3753","pk_cardinality":"1x","fk_cardinality":"1x","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"","foreign_column":"userId"}],"custom_fields":{}},{"name":"fk_users_staffs","title":"","description":"","is_user_defined":true,"foreign_table":"staffs","foreign_table_show_schema":"resturauntDatabase.staffs","foreign_table_verbose":"staffs","foreign_table_verbose_show_schema":"resturauntDatabase.staffs","foreign_table_object_id":"t3752","primary_table":"users","primary_table_show_schema":"resturauntDatabase.users","primary_table_verbose":"users","primary_table_verbose_show_schema":"resturauntDatabase.users","primary_table_object_id":"t3753","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"ratings","foreign_column":"userId"}],"custom_fields":{}}],"unique_keys":[{"name":"_id","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":"","name_without_path":"_id","name":"_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"users","object_name_show_schema":"resturauntDatabase.users","object_type":"TABLE","object_id":"t3753","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"coupons","object_name_show_schema":"resturauntDatabase.coupons","object_type":"TABLE","object_id":"t3750","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]},{"object_name":"items","object_name_show_schema":"resturauntDatabase.items","object_type":"TABLE","object_id":"t3751","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]},{"object_name":"items","object_name_show_schema":"resturauntDatabase.items","object_type":"TABLE","object_id":"t3751","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]},{"object_name":"items","object_name_show_schema":"resturauntDatabase.items","object_type":"TABLE","object_id":"t3751","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]}]}],"used_by":[{"object_name":"users","object_name_show_schema":"resturauntDatabase.users","object_type":"TABLE","object_id":"t3753","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"items","object_name_show_schema":"resturauntDatabase.items","object_type":"COLLECTION","object_id":"t3751","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]},{"object_name":"staffs","object_name_show_schema":"resturauntDatabase.staffs","object_type":"COLLECTION","object_id":"t3752","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"1x","object_user_defined":false,"user_defined":true,"children":[]},{"object_name":"staffs","object_name_show_schema":"resturauntDatabase.staffs","object_type":"COLLECTION","object_id":"t3752","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]}]}]},"imported_at":"2022-04-17 08:17"};