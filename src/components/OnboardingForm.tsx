
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useOnboardingForm } from '@/hooks/useOnboardingForm';
import { PersonalInfoSection } from '@/components/PersonalInfoSection';
import { OrganizationInfoSection } from '@/components/OrganizationInfoSection';
import { AdditionalInfoSection } from '@/components/AdditionalInfoSection';

const OnboardingForm = () => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useOnboardingForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-emerald-50 to-cyan-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-xl border-0 rounded-2xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-semibold text-gray-800 mb-2">
            Chop Finance
          </CardTitle>
          <h2 className="text-xl font-medium text-gray-700 mb-2">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500">
            Please fill in your details below
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <PersonalInfoSection 
              formData={formData}
              onInputChange={handleInputChange}
            />
            
            <OrganizationInfoSection 
              formData={formData}
              onInputChange={handleInputChange}
            />
            
            <AdditionalInfoSection 
              formData={formData}
              onInputChange={handleInputChange}
            />

            {/* Submit Button */}
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-6 rounded-lg mt-6 transition-colors duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Continue'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
