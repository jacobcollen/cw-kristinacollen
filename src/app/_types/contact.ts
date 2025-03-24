// types/contact.ts
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success?: boolean;
  error?: string | Record<string, string[]>;
  details?: any;
}

export interface ContactFormProps {
  title: string;
  description: string;
  triggerText: string;
  triggerClassName?: string;
  triggerVariant?:
	| "default"
	| "destructive"
	| "outline"
	| "secondary"
	| "ghost"
	| "link";
  onSuccess?: () => void;
}
