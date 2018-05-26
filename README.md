# Thanks
### A two-day solo project

*Thanks* is a project that lets the Hack Reactor family voice appreciation for the kind souls that have helped them along their journeys.
Take a moment today to thank someone who has made the world a little brighter.

Visit the deployed app at [Thanks](https://morning-journey-32577.herokuapp.com/)!

## Iterative Project Breakdown
- [x] **MVP/Tier 1:**
    - Show a list of shoutouts, much like what we write in during Friday Retrospectives
    - You can post shoutouts and they'll populate the database, and render immediately
- [x] **Tier 2:** 
    - Shoutout is converted to a visual shoutout map that has colored bubbles, each representing a shoutout
    - Hovering over the bubble will display the shoutout on the screen
    - Adding shoutouts displays new bubbles on the page
- [x] **Tier 3:**
    - Ability to 'like' shoutouts by clicking on the bubble, which updates the bubble's like count
    - The more likes, the bigger the bubble
- [ ] **Tier 4:** 
    - Ability to sign shoutouts with Github handle. The bubble will query Github API to display a picture instead of the default solid color
    - Signed bubbles get unique colors as a ring around the picture
    - Each shoutout under the same name will receive the same color bubble
- [ ] **Tier 5:**
    - Oauth with Firebase to pull signed bubble icons directly from Github instead of having someone type in their handle
    - Shoutouts are sorted by age, with older shoutouts receiving smaller bubbles
- [ ] **Tier 6:** 
    - Physics engine or D3 for bubbles; they will now flow around the screen and respond to user mouse movement
