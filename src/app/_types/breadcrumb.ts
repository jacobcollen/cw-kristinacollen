export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbNavProps {
  items: (BreadcrumbItem | null)[];
}
