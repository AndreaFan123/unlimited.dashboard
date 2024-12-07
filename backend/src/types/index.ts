export interface Event {
  id: string;
  type: "github_click" | "linkedin_click" | "resume_download" | "article_click";
  timestamp: Date;
  metadata: Record<string, any>;
}

export interface User {
  id: string;
  email: string;
  role: "admin" | "visitor";
  password: string;
}
