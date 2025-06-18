
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { OnboardingFormData, initialFormData } from '@/types/onboarding';
import { WEBHOOK_URL } from '@/constants/onboarding';

export const useOnboardingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<OnboardingFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof OnboardingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendToWebhook = async (data: OnboardingFormData) => {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'Chop Finance Onboarding Form'
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Form submitted:', formData);
      console.log('Sending to webhook:', WEBHOOK_URL);
      
      await sendToWebhook(formData);
      
      toast({
        title: "Success!",
        description: "Form submitted successfully.",
      });
      
      // Reset form after successful submission
      setFormData(initialFormData);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
};
