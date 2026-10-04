# Pradeep & Mithra — Wedding Story

A standalone, mobile-first wedding invitation. No build step or dependencies to install.

Run `python3 -m http.server 8792` from this folder and open http://localhost:8792.

Deploy the contents of this folder as a static GitHub Pages site when approved. All image and code paths are relative and work under a repository subpath.

## Content
- Wedding: 22 November 2026, 6:30 AM IST. Countdown uses the same time.
- Events: Haldi, Mehendi, Leisure Day, Muhurtham.
- Travel, stay, Visit/Eat recommendations, searchable Google Maps links.
- Photos: local curated images, accessible enlargement dialog, shared Google Photos album.
- RSVP: collects details then opens the existing Google Form with prefilled values. Guests must press Submit in Google Forms; this app does not claim receipt or silently POST across origins. The original Google Form may still display its Events question; removing that question requires editing the form itself.

`places.js` retains the earlier site's source recommendations; the new UI displays names and Maps links, not unverified travel times or opening hours.

Original site remains in the parent directory. This folder has not been published.
