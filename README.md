# Unlimited Dashboard

## Description

This is a dashboard for event tracking and monitoring my portfolio and blog.

### Objectives

- Practice how to implement event tracking and monitoring.
- Practice how to build a dashboard.
- Practice how to design what data to track and the metrics to measure.

### What to measure

In the landing page, I want to know:

- How many user click GitHub Link.
- How many user click LinkedIn Link.
- How many user download Resume.
- How many people visit the blog.
- How many people click the blog posts.

### Event tracking design

Since I want to practice how to implement event tracking and monitoring, I won't be using third party service.

#### Event Category

- Social link click
- File download click
- Navigation click
- Post list view click
- Single post view click
  - Scroll to the bottom of the page.

##### Event Methods

- Base: Including the timestamp, user agent, and IP address.
- link: Including the link URL, link type and event type.
- download: Including the file name, file type and event type.
- navigation: Including the target path.
- post: Including the event type, post id, post title.

## Get started

- Using node version 18.17.1 or higher.
- Using pnpm as package manager.
- Download the repository.
- Run `pnpm install` to install the dependencies.
- Run `pnpm run dev` to start the development server.

## Future work

- Add more specific event tracking with calculated metrics.
  - Social link conversion rate.
  - Resume download conversion rate.
  - Single post scroll milestone (This can be used to measure the content length of the post).
