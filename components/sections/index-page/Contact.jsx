/**
 * 聯絡表單組件
 * 使用 EmailJS 處理表單提交
 * 包含表單驗證和提交狀態管理
 */

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { TitleHeader } from '@/components/base';

const Contact = () => {
  // 表單引用和狀態管理
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  /**
   * 處理表單輸入變更
   * @param {Event} e - 輸入事件
   */
  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /**
   * 處理表單提交
   * @param {Event} e - 提交事件
   */
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      // 發送郵件
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // 重置表單
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="h-full w-full px-5 md:px-10">
        {/* 表單標題 */}
        {/* <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        /> */}

        {/* 聯絡表單 */}
        {/* <div className="mt-16"> */}
        <div>
          <form ref={formRef} onSubmit={handleSubmit} className="flex w-full flex-col gap-7">
            {/* 姓名輸入 */}
            <div>
              <label htmlFor="name" className="text-foreground">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                required
                className="bg-secondary/50 text-foreground placeholder:text-foreground/50 w-full rounded-md px-4 py-4 text-sm md:text-base"
              />
            </div>

            {/* 電子郵件輸入 */}
            <div>
              <label htmlFor="email" className="text-foreground">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                required
                className="bg-secondary/50 text-foreground placeholder:text-foreground/50 w-full rounded-md px-4 py-4 text-sm md:text-base"
              />
            </div>

            {/* 訊息輸入 */}
            <div>
              <label htmlFor="message" className="text-foreground">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                rows="5"
                required
                className="bg-secondary/50 text-foreground placeholder:text-foreground/50 w-full rounded-md px-4 py-4 text-sm md:text-base"
              />
            </div>

            {/* 提交按鈕 */}
            <button type="submit" disabled={loading} className="secondary-button">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
