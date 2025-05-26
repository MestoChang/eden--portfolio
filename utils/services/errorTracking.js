// 錯誤追蹤服務
class ErrorTrackingService {
  constructor() {
    this.errors = [];
    this.maxErrors = 100; // 最多保存的錯誤數量
  }

  // 記錄錯誤
  logError(error, context = {}) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      error:
        error instanceof Error
          ? {
              message: error.message,
              stack: error.stack,
              name: error.name,
            }
          : error,
      context,
      url: typeof window !== 'undefined' ? window.location.href : 'server-side',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'server-side',
    };

    // 保存錯誤
    this.errors.unshift(errorLog);
    if (this.errors.length > this.maxErrors) {
      this.errors.pop();
    }

    // 在開發環境中輸出錯誤
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked:', errorLog);
    }

    // TODO: 在這裡可以加入發送錯誤到後端或第三方服務的邏輯
    // 例如：Sentry, LogRocket 等
  }

  // 獲取最近的錯誤
  getRecentErrors() {
    return this.errors;
  }

  // 清除錯誤記錄
  clearErrors() {
    this.errors = [];
  }
}

// 創建單例實例
const errorTracking = new ErrorTrackingService();

export default errorTracking;
