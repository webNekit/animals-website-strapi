import type { Schema, Attribute } from '@strapi/strapi';

export interface InfoFieldsInfoFields extends Schema.Component {
  collectionName: 'components_info_fields_info_fields';
  info: {
    displayName: 'infoFields';
    icon: 'bulletList';
  };
  attributes: {
    text: Attribute.RichText;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'info-fields.info-fields': InfoFieldsInfoFields;
    }
  }
}
