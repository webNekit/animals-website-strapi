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

export interface UiContacts extends Schema.Component {
  collectionName: 'components_ui_contacts';
  info: {
    displayName: 'contacts';
    icon: 'phone';
  };
  attributes: {
    type: Attribute.Enumeration<
      [
        '\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430',
        '\u0410\u0434\u0440\u0435\u0441 \u044D\u043B.\u043F\u043E\u0447\u0442\u044B'
      ]
    > &
      Attribute.DefaultTo<'\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430'>;
    contactValue: Attribute.String & Attribute.Required;
  };
}

export interface UiMuiliimage extends Schema.Component {
  collectionName: 'components_ui_muiliimages';
  info: {
    displayName: 'muiliimage';
    icon: 'grid';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface UiSocials extends Schema.Component {
  collectionName: 'components_ui_socials';
  info: {
    displayName: 'socials';
    icon: 'link';
  };
  attributes: {
    socialLink: Attribute.Text & Attribute.Required;
    socialLogo: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'info-fields.info-fields': InfoFieldsInfoFields;
      'ui.contacts': UiContacts;
      'ui.muiliimage': UiMuiliimage;
      'ui.socials': UiSocials;
    }
  }
}
