# Oxi-Revised

### A revised backup solution similar to Oxidized, rewritten in Nodejs.

## About Oxi-Revised
After using the Oxidized backup solution for quite some time, it was clear that the lack of updates, along with botched-together Dockerfile, were starting to affect the reliability of the application. I have decided to rewrite the Oxidized project - appropriately named Oxi-Revised - to revive what was good about the project!

The new project utilises the Nodejs language, along with various libraries like ExpressJS as the web server, EJS as the view engine, and other awesome tools to create a simple, yet powerful, backup solution. It is designed to run in a single Dockerfile, without any sketchy PID business.

## Current Feature Set
- Intuitive frontend utilising Bootstrap CSS framework
- A backend API to perform functions without the GUI
- Integration with Git to store device backups
- Docker image for simple integration with existing infrastructure

## Future Visions
- Websocket integration for dynamic frontend updates and notifications
- Webhook support for notifications - e.g. Teams, Slack, Discord
- Authentication to prevent unauthorised access

## Initial Preview - Home
![Initial Preview - Home](/assets/images/home-preview.png)