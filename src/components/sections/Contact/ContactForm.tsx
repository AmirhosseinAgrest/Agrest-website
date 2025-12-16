import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Heading, Text, Input, TextArea, Button, Icon } from '@/components/common';
import { useForm, validators } from '@/hooks';

interface ContactFormProps {
  className?: string;
}

type ContactFields = 'name' | 'email' | 'subject' | 'message';

export function ContactForm({ className }: ContactFormProps) {
  const { t } = useTranslation();

  const {
    fields,
    status,
    errorMessage,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useForm<ContactFields>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationRules: {
      name: validators.combine(
        validators.required(t('contact.form.name') + ' is required'),
        validators.minLength(2)
      ),
      email: validators.combine(
        validators.required(t('contact.form.email') + ' is required'),
        validators.email()
      ),
      subject: validators.required(t('contact.form.subject') + ' is required'),
      message: validators.combine(
        validators.required(t('contact.form.message') + ' is required'),
        validators.minLength(10, 'Message must be at least 10 characters')
      ),
    },
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form submitted:', values);
    },
  });

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          'p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20',
          'text-center',
          className
        )}
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <Icon name="check" size="xl" className="text-emerald-400" />
        </div>
        <Heading as="h3" size="h4" className="mb-2">
          Message Sent!
        </Heading>
        <Text color="muted" className="mb-6">
          {t('contact.form.success')}
        </Text>
        <Button variant="outline" onClick={resetForm}>
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'p-6 sm:p-8 rounded-2xl',
        'bg-neutral-900/30 border border-neutral-800/50',
        className
      )}
    >
      <Heading as="h3" size="h4" className="mb-6">
        Send a Message
      </Heading>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label={t('contact.form.name')}
            placeholder={t('contact.form.namePlaceholder')}
            value={fields.name.value}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
            error={fields.name.touched ? fields.name.error : undefined}
            required
          />

          <Input
            label={t('contact.form.email')}
            type="email"
            placeholder={t('contact.form.emailPlaceholder')}
            value={fields.email.value}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            error={fields.email.touched ? fields.email.error : undefined}
            required
          />
        </div>

        <Input
          label={t('contact.form.subject')}
          placeholder={t('contact.form.subjectPlaceholder')}
          value={fields.subject.value}
          onChange={handleChange('subject')}
          onBlur={handleBlur('subject')}
          error={fields.subject.touched ? fields.subject.error : undefined}
          required
        />

        <TextArea
          label={t('contact.form.message')}
          placeholder={t('contact.form.messagePlaceholder')}
          value={fields.message.value}
          onChange={handleChange('message')}
          onBlur={handleBlur('message')}
          error={fields.message.touched ? fields.message.error : undefined}
          rows={5}
          showCount
          maxLength={1000}
          required
        />

        <AnimatePresence>
          {status === 'error' && errorMessage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20"
            >
              <div className="flex items-center gap-3">
                <Icon name="error" size="sm" className="text-rose-400" />
                <Text size="sm" className="text-rose-400">
                  {errorMessage || t('contact.form.error')}
                </Text>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={status === 'submitting'}
          loadingText={t('contact.form.sending')}
        >
          {t('contact.form.send')}
        </Button>
      </form>
    </motion.div>
  );
}

export default ContactForm;