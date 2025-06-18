
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OnboardingFormData } from '@/types/onboarding';
import { REFERRAL_SOURCES } from '@/constants/onboarding';

interface AdditionalInfoSectionProps {
  formData: OnboardingFormData;
  onInputChange: (field: keyof OnboardingFormData, value: string) => void;
}

export const AdditionalInfoSection: React.FC<AdditionalInfoSectionProps> = ({
  formData,
  onInputChange
}) => {
  return (
    <>
      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location" className="text-sm text-gray-600">
          Location <span className="text-red-500">*</span>
        </Label>
        <Input
          id="location"
          placeholder="Enter your location"
          value={formData.location}
          onChange={(e) => onInputChange('location', e.target.value)}
          className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
          required
        />
      </div>

      {/* How did you hear about us */}
      <div className="space-y-2">
        <Label className="text-sm text-gray-600">
          How did you hear about us?
        </Label>
        <Select value={formData.howDidYouHear} onValueChange={(value) => onInputChange('howDidYouHear', value)}>
          <SelectTrigger className="border-gray-200 focus:border-teal-500 focus:ring-teal-500">
            <SelectValue placeholder="Select how you heard about us..." />
          </SelectTrigger>
          <SelectContent>
            {REFERRAL_SOURCES.map((source) => (
              <SelectItem key={source.value} value={source.value}>
                {source.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
