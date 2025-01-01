/// <reference path="../pb_data/types.d.ts" />
migrate(
  (app) => {
    const collection = new Collection({
      createRule: '@request.headers.x_visitor_id = visitor_id',
      deleteRule: '@request.headers.x_visitor_id = visitor_id',
      fields: [
        {
          autogeneratePattern: '[a-z0-9]{15}',
          hidden: false,
          id: 'text3208210256',
          max: 15,
          min: 15,
          name: 'id',
          pattern: '^[a-z0-9]+$',
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: 'text',
        },
        {
          autogeneratePattern: '',
          hidden: false,
          id: 'text118222445',
          max: 0,
          min: 0,
          name: 'visitor_id',
          pattern: '',
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: 'text',
        },
        {
          cascadeDelete: false,
          collectionId: 'pbc_4078160933',
          hidden: false,
          id: 'relation2351293722',
          maxSelect: 1,
          minSelect: 0,
          name: 'art_id',
          presentable: false,
          required: true,
          system: false,
          type: 'relation',
        },
        {
          hidden: false,
          id: 'autodate2990389176',
          name: 'created',
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: 'autodate',
        },
      ],
      id: 'pbc_2190274710',
      indexes: ['CREATE INDEX `idx_Semr1ODYmo` ON `likes` (\n  `visitor_id`,\n  `art_id`\n)'],
      listRule: '@request.headers.x_visitor_id = visitor_id',
      name: 'likes',
      system: false,
      type: 'base',
      updateRule: '@request.headers.x_visitor_id = visitor_id',
      viewRule: '@request.headers.x_visitor_id = visitor_id',
    });

    return app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('pbc_2190274710');

    return app.delete(collection);
  }
);
