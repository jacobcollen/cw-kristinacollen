export type AlmaSection = {
  title: string;
  content: string;
  image?: string | string[];
  videoEmbedUrl?: string;
  links?: { label: string; url: string }[];
  highlightSpan?: string;
};

export interface ButtonProps {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "primary";
}
