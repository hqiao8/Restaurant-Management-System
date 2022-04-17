window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3752","name":"staffs","subtype":"COLLECTION","is_user_defined":false,"description":"","summary":[{"field":"Documentation","value":{"_type":"link","name":"Resturaunt Database","id":"d10"}},{"field":"Schema","value":"resturauntDatabase"},{"field":"Name","value":"staffs"},{"field":"Type","value":"Collection"}],"columns":[{"id":"column-34716","object_id":"column-34716","name":"_id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34717","object_id":"column-34717","name":"userId","name_without_path":"userId","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[{"id":"t3753","name":"users","name_show_schema":"resturauntDatabase.users"}]},{"id":"column-34718","object_id":"column-34718","name":"hours","name_without_path":"hours","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34719","object_id":"column-34719","name":"orders","name_without_path":"orders","description":"","is_pk":false,"is_identity":false,"data_type":"Null[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"ARRAY","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34720","object_id":"column-34720","name":"ratings","name_without_path":"ratings","description":"","is_pk":false,"is_identity":false,"data_type":"Document[]/Null[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"MIXED","is_user_defined":false,"children":[{"id":"column-34722","object_id":"column-34722","name":"ratings.userId","name_without_path":"userId","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"ratings","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3753","name":"users","name_show_schema":"resturauntDatabase.users"}]},{"id":"column-34723","object_id":"column-34723","name":"ratings.rating","name_without_path":"rating","description":"","is_pk":false,"is_identity":false,"data_type":"Int32/Double","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"ratings","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34724","object_id":"column-34724","name":"ratings._id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"ratings","level":2,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34721","object_id":"column-34721","name":"__v","name_without_path":"__v","description":"","is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"fk_users_staffs","title":"","description":"","is_user_defined":true,"foreign_table":"staffs","foreign_table_show_schema":"resturauntDatabase.staffs","foreign_table_verbose":"staffs","foreign_table_verbose_show_schema":"resturauntDatabase.staffs","foreign_table_object_id":"t3752","primary_table":"users","primary_table_show_schema":"resturauntDatabase.users","primary_table_verbose":"users","primary_table_verbose_show_schema":"resturauntDatabase.users","primary_table_object_id":"t3753","pk_cardinality":"1x","fk_cardinality":"1x","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"","foreign_column":"userId"}],"custom_fields":{}},{"name":"fk_users_staffs","title":"","description":"","is_user_defined":true,"foreign_table":"staffs","foreign_table_show_schema":"resturauntDatabase.staffs","foreign_table_verbose":"staffs","foreign_table_verbose_show_schema":"resturauntDatabase.staffs","foreign_table_object_id":"t3752","primary_table":"users","primary_table_show_schema":"resturauntDatabase.users","primary_table_verbose":"users","primary_table_verbose_show_schema":"resturauntDatabase.users","primary_table_object_id":"t3753","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":"","primary_column":"_id","foreign_column_path":"ratings","foreign_column":"userId"}],"custom_fields":{}}],"unique_keys":[{"name":"_id","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":"","name_without_path":"_id","name":"_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"staffs","object_name_show_schema":"resturauntDatabase.staffs","object_type":"TABLE","object_id":"t3752","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"users","object_name_show_schema":"resturauntDatabase.users","object_type":"TABLE","object_id":"t3753","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"1x","object_user_defined":false,"user_defined":true,"children":[]},{"object_name":"users","object_name_show_schema":"resturauntDatabase.users","object_type":"TABLE","object_id":"t3753","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":false,"user_defined":true,"children":[]}]}],"used_by":[]},"imported_at":"2022-04-17 08:17"};