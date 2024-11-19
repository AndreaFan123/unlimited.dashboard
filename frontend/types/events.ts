export type EventType =
  | "social_link_click"
  | "resume_download_click"
  | "blog_navigation"
  | "post_click";

interface BaseEvent {
  eventType: EventType;
  timestamp: Date;
  path: string;
}

export interface SocialLinkEvent extends BaseEvent {
  eventType: "social_link_click";
  platform: "github" | "linkedin";
}

export interface ResumeLinkEvent extends BaseEvent {
  eventType: "resume_download_click";
}

export interface BlogNavigationEvent extends BaseEvent {
  eventType: "blog_navigation";
}

export interface PostClickEvent extends BaseEvent {
  eventType: "post_click";
  postId: string;
  postTitle: string;
}

export type Events =
  | SocialLinkEvent
  | ResumeLinkEvent
  | BlogNavigationEvent
  | PostClickEvent;
