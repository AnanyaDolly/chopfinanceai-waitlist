
export interface OnboardingFormData {
  firstName: string;
  lastName: string;
  email: string;
  organizationName: string;
  organizationType: string;
  teamSize: string;
  location: string;
  howDidYouHear: string;
}

export const initialFormData: OnboardingFormData = {
  firstName: '',
  lastName: '',
  email: '',
  organizationName: '',
  organizationType: '',
  teamSize: '',
  location: '',
  howDidYouHear: ''
};
