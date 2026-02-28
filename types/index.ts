export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: number;
  tags: string[];
}

export interface Quote {
  id: number;
  text: string;
  author: string;
}

export interface DashboardStat {
  label: string;
  value: string;
  change: number;
  icon: string;
}
