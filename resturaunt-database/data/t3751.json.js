window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3751","name":"items","subtype":"COLLECTION","is_user_defined":false,"description":"","summary":[{"field":"Documentation","value":{"_type":"link","name":"Resturaunt Database","id":"d10"}},{"field":"Schema","value":"resturauntDatabase"},{"field":"Name","value":"items"},{"field":"Type","value":"Collection"}],"columns":[{"id":"column-34706","object_id":"column-34706","name":"_id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34707","object_id":"column-34707","name":"title","name_without_path":"title","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34708","object_id":"column-34708","name":"description","name_without_path":"description","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34709","object_id":"column-34709","name":"price","name_without_path":"price","description":"","is_pk":false,"is_identity":false,"data_type":"Decimal128","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34710","object_id":"column-34710","name":"type","name_without_path":"type","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34711","object_id":"column-34711","name":"ratings","name_without_path":"ratings","description":"","is_pk":false,"is_identity":false,"data_type":"Null[]/Document[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"MIXED","is_user_defined":false,"children":[{"id":"column-34713","object_id":"column-34713","name":"ratings.userId","name_without_path":"userId","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"ratings","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3753","name":"users","name_show_schema":"resturauntDatabase.users"}]},{"id":"column-34714","object_id":"column-34714","name":"ratings.rating","name_without_path":"rating","description":"","is_pk":false,"is_identity":false,"data_type":"Double","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"ratings","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34715","object_id":"column-34715","name":"ratings._id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"ratings","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34712","object_id":"column-34712","name":"__v","name_without_path":"__v","description":"","is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"fk_users_items","title":"","description":"","is_user_defined":true,"foreign_table":"items","foreign_table_show_schema":"resturauntDatabase.items","foreign_table_verbose":"items","foreign_table_verbose_show_schema":"resturauntDatabase.items","foreign_table_object_id":"t3751","primary_table":"users","primary_table_show_schema":"resturauntDatabase.users","primary_table_verbose":"users","primary_table_verbose_show_schema":"resturauntDatabase.users","primary_table_object_id":"t3753","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"ratings","foreign_column":"userId"}],"custom_fields":{}},{"name":"fk_items_users","title":"","description":"","is_user_defined":true,"foreign_table":"users","foreign_table_show_schema":"resturauntDatabase.users","foreign_table_verbose":"users","foreign_table_verbose_show_schema":"resturauntDatabase.users","foreign_table_object_id":"t3753","primary_table":"items","primary_table_show_schema":"resturauntDatabase.items","primary_table_verbose":"items","primary_table_verbose_show_schema":"resturauntDatabase.items","primary_table_object_id":"t3751","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"favourites","foreign_column":"itemId"}],"custom_fields":{}},{"name":"fk_items_users","title":"","description":"","is_user_defined":true,"foreign_table":"users","foreign_table_show_schema":"resturauntDatabase.users","foreign_table_verbose":"users","foreign_table_verbose_show_schema":"resturauntDatabase.users","foreign_table_object_id":"t3753","primary_table":"items","primary_table_show_schema":"resturauntDatabase.items","primary_table_verbose":"items","primary_table_verbose_show_schema":"resturauntDatabase.items","primary_table_object_id":"t3751","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"orderHistory.items","foreign_column":"itemId"}],"custom_fields":{}},{"name":"fk_items_users","title":"","description":"","is_user_defined":true,"foreign_table":"users","foreign_table_show_schema":"resturauntDatabase.users","foreign_table_verbose":"users","foreign_table_verbose_show_schema":"resturauntDatabase.users","foreign_table_object_id":"t3753","primary_table":"items","primary_table_show_schema":"resturauntDatabase.items","primary_table_verbose":"items","primary_table_verbose_show_schema":"resturauntDatabase.items","primary_table_object_id":"t3751","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"currentOrder.items","foreign_column":"itemId"}],"custom_fields":{}}],"unique_keys":[{"name":"_id","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":"","name_without_path":"_id","name":"_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"items","object_name_show_schema":"resturauntDatabase.items","object_type":"TABLE","object_id":"t3751","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"users","object_name_show_schema":"resturauntDatabase.users","object_type":"TABLE","object_id":"t3753","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]}]}],"used_by":[{"object_name":"items","object_name_show_schema":"resturauntDatabase.items","object_type":"TABLE","object_id":"t3751","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"users","object_name_show_schema":"resturauntDatabase.users","object_type":"COLLECTION","object_id":"t3753","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]},{"object_name":"users","object_name_show_schema":"resturauntDatabase.users","object_type":"COLLECTION","object_id":"t3753","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]},{"object_name":"users","object_name_show_schema":"resturauntDatabase.users","object_type":"COLLECTION","object_id":"t3753","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]}]}]},"imported_at":"2022-04-17 08:17"};