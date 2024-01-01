export const DEFAULT_LABEL_DELTAS = [4, 8, 20, 40, 60].map((size) => ({
    label: size,
}));

export const DEFAULT_DELTA = 20;

export const DEFAULT_PAGE = 1;

export const DEFAULT_TOTAL = 0;

export const SUPPORTED_FIELD_TYPES = new Set(['boolean', 'date', 'numeric']);

export const BUSINESS_TYPES_TO_FILTER_TYPES = {
      'Aggregation': 'text',
      'Attachment': 'file-script',
      'Boolean': 'boolean',
      'Date': 'date',
      'DateTime': 'date-time',
      'Decimal': 'numeric',
      'Encrypted': 'text',
      'Formula': 'text,',
      'Integer': 'numeric',
      'LongInteger': 'numeric',
      'LongText': 'text',
      'MultiselectPicklist': 'multiple-picklist',
      'Picklist': 'picklist',
      'PrecisionDecimal': 'numeric',
      'Relationship': 'text',
      'RichText': 'text',
      'Text': 'text',
    };