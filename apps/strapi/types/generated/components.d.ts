import type { Schema, Struct } from '@strapi/strapi';

export interface SharedProperty extends Struct.ComponentSchema {
  collectionName: 'components_shared_properties';
  info: {
    displayName: 'Property';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Unique;
    value: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.property': SharedProperty;
    }
  }
}
