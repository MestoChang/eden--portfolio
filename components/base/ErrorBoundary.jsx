'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import errorTracking from '@/utils/services/errorTracking';
import { getErrorMessage } from '@/i18n/errorConfig';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // 記錄錯誤
    errorTracking.logError(error, {
      componentStack: errorInfo.componentStack,
    });
  }

  render() {
    const { hasError, error } = this.state;
    const { children, locale = 'zh-TW' } = this.props;

    if (hasError) {
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-red-600">
            {getErrorMessage('common.unexpected', locale)}
          </h2>
          {process.env.NODE_ENV === 'development' && (
            <pre className="mt-4 max-w-full overflow-auto rounded bg-gray-100 p-4 text-left text-sm">
              {error?.toString()}
            </pre>
          )}
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {locale === 'zh-TW' ? '重試' : 'Try Again'}
          </button>
        </div>
      );
    }

    return children;
  }
}

// 包裝組件，提供翻譯功能
const ErrorBoundaryWithTranslation = ({ children, locale }) => {
  return <ErrorBoundary locale={locale}>{children}</ErrorBoundary>;
};

export default ErrorBoundaryWithTranslation;
