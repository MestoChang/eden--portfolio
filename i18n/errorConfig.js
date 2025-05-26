export const errorMessages = {
  common: {
    unexpected: {
      'zh-TW': '發生未預期的錯誤',
      en: 'An unexpected error occurred',
    },
    network: {
      'zh-TW': '網路連線錯誤',
      en: 'Network connection error',
    },
    notFound: {
      'zh-TW': '找不到請求的資源',
      en: 'Requested resource not found',
    },
  },
  auth: {
    unauthorized: {
      'zh-TW': '未授權的存取',
      en: 'Unauthorized access',
    },
    forbidden: {
      'zh-TW': '禁止存取',
      en: 'Access forbidden',
    },
  },
  form: {
    required: {
      'zh-TW': '此欄位為必填',
      en: 'This field is required',
    },
    invalid: {
      'zh-TW': '無效的輸入',
      en: 'Invalid input',
    },
  },
};

export const getErrorMessage = (key, locale = 'zh-TW') => {
  const keys = key.split('.');
  let message = errorMessages;

  for (const k of keys) {
    if (!message[k]) return errorMessages.common.unexpected[locale];
    message = message[k];
  }

  return message[locale] || errorMessages.common.unexpected[locale];
};
