import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { contactFormSchema, ContactFormData } from '../../lib/validation';
import { Button } from '../ui/Button';
import { SITE_CONFIG } from '../../data/site';

interface ContactFormProps {
  initialProjectType?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialProjectType = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: initialProjectType || 'SaaS MVP Development',
    budget: '$5,000 - $10,000',
    timeline: '1-2 months',
    description: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    inquiryId: string;
    message: string;
  } | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    // 1. Validate with Zod
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          honeypot,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionSuccess({
          inquiryId: result.inquiryId || `inq_${Date.now()}`,
          message:
            result.message ||
            'Your project inquiry has been received. I will review the specifications and reply within 24 hours.',
        });
      } else {
        setApiError(
          result.error ||
            'Unable to process your inquiry right now. Please email directly at ' +
              SITE_CONFIG.email
        );
      }
    } catch {
      setApiError(
        'Network error while transmitting form. Please contact directly via email at ' +
          SITE_CONFIG.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setApiError(null);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'SaaS MVP Development',
      budget: '$5,000 - $10,000',
      timeline: '1-2 months',
      description: '',
    });
    setErrors({});
  };

  if (submissionSuccess) {
    return (
      <div className="rounded-xl border border-primary-theme/50 bg-subtle-accent p-8 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-primary-theme mx-auto" />
        <h3 className="text-xl font-bold text-canvas-text">Inquiry Received Successfully</h3>
        <p className="text-sm text-muted-theme max-w-md mx-auto leading-relaxed">
          {submissionSuccess.message}
        </p>
        <div className="font-mono text-xs text-muted-theme pt-2">
          Reference ID: <span className="text-primary-theme font-semibold">{submissionSuccess.inquiryId}</span>
        </div>
        <div className="pt-4">
          <Button variant="secondary" size="sm" onClick={handleReset} icon={<RefreshCw className="w-3.5 h-3.5" />}>
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot anti-spam trap (invisible to legitimate users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Do not fill this field</label>
        <input
          id="hp_field"
          type="text"
          name="honeypot"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {apiError && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="leading-relaxed">{apiError}</div>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-mono font-medium text-canvas-text mb-2">
            Your Name <span className="text-primary-theme">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            className={`w-full px-4 py-2.5 rounded-lg bg-surface-elevated border text-canvas-text text-sm transition-colors focus:outline-none ${
              errors.name ? 'border-red-500 focus:border-red-500' : 'border-theme focus:border-primary-theme'
            }`}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono font-medium text-canvas-text mb-2">
            Email Address <span className="text-primary-theme">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            className={`w-full px-4 py-2.5 rounded-lg bg-surface-elevated border text-canvas-text text-sm transition-colors focus:outline-none ${
              errors.email ? 'border-red-500 focus:border-red-500' : 'border-theme focus:border-primary-theme'
            }`}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      {/* Row 2: Company and Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-xs font-mono font-medium text-canvas-text mb-2">
            Company or Project Name <span className="text-muted-theme font-normal">(Optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Acme Labs"
            className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-theme text-canvas-text text-sm transition-colors focus:outline-none focus:border-primary-theme"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-xs font-mono font-medium text-canvas-text mb-2">
            Project Scope <span className="text-primary-theme">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-theme text-canvas-text text-sm transition-colors focus:outline-none focus:border-primary-theme"
          >
            <option value="SaaS MVP Development">SaaS MVP Development</option>
            <option value="Full-Stack Web Application">Full-Stack Web Application</option>
            <option value="API Development & Integrations">API Development & Integrations</option>
            <option value="Admin Dashboard & Internal Tools">Admin Dashboard & Internal Tools</option>
            <option value="High-Conversion Business Website">High-Conversion Business Website</option>
            <option value="Performance & Core Web Vitals">Performance & Core Web Vitals</option>
            <option value="Engineering Retainer / Ongoing Features">Engineering Retainer / Ongoing</option>
            <option value="Full-Time Remote Engineering Role">Full-Time Remote Engineering Role</option>
          </select>
        </div>
      </div>

      {/* Row 3: Budget and Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-xs font-mono font-medium text-canvas-text mb-2">
            Estimated Budget Range <span className="text-muted-theme font-normal">(USD)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-theme text-canvas-text text-sm transition-colors focus:outline-none focus:border-primary-theme"
          >
            <option value="< $2,500">&lt; $2,500</option>
            <option value="$2,500 - $5,000">$2,500 – $5,000</option>
            <option value="$5,000 - $10,000">$5,000 – $10,000</option>
            <option value="$10,000+">$10,000+</option>
            <option value="Flexible / To be scoped">Flexible / Scope-dependent</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-xs font-mono font-medium text-canvas-text mb-2">
            Desired Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-theme text-canvas-text text-sm transition-colors focus:outline-none focus:border-primary-theme"
          >
            <option value="Immediately (< 1 month)">Immediately (&lt; 1 month)</option>
            <option value="1-2 months">1–2 months</option>
            <option value="2-3 months">2–3 months</option>
            <option value="Flexible / Q3 2026">Flexible / Upcoming Quarter</option>
          </select>
        </div>
      </div>

      {/* Row 4: Description */}
      <div>
        <label htmlFor="description" className="block text-xs font-mono font-medium text-canvas-text mb-2">
          Project Details & Objectives <span className="text-primary-theme">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe what you are building, the problem it solves, existing assets, and any specific technical requirements..."
          className={`w-full px-4 py-2.5 rounded-lg bg-surface-elevated border text-canvas-text text-sm transition-colors focus:outline-none ${
            errors.description ? 'border-red-500 focus:border-red-500' : 'border-theme focus:border-primary-theme'
          }`}
        />
        {errors.description && <p className="mt-1.5 text-xs text-red-400">{errors.description}</p>}
      </div>

      {/* Submit Button & Privacy Notice */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          icon={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          Send Project Inquiry
        </Button>

        <p className="text-xs text-muted-theme max-w-xs text-center sm:text-right">
          Protected by server-side Zod validation & rate limiting. Your information is never shared.
        </p>
      </div>
    </form>
  );
};
