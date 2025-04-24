---
nav_order: 7
title: Accessibility
---

# Making Oral Histories Accessible

The Oral History as Data (OHD) framework has been extensively tested for accessibility using a variety of tools and analyses, consistently receiving high grades in compliance tests. However, it's important to note that ultimate responsibility for ensuring accessibility falls on those who publish oral history collections. While OHD provides an accessible foundation, content creators must implement best practices when adding their specific materials.

This guide aims to help collection publishers understand accessibility requirements and implement features that make oral histories accessible to all users, including people with disabilities.

## Understanding Accessibility in Oral History

Oral histories present unique accessibility challenges because they often involve:

1. Audio content that may be inaccessible to deaf or hard-of-hearing users
2. Text transcripts that may be inaccessible to blind or low-vision users
3. Interactive visualizations that may present barriers to users with various disabilities
4. Complex navigation that can be difficult for users with cognitive disabilities

## WCAG Compliance

Web Content Accessibility Guidelines (WCAG) provide a framework for accessibility:

### Key WCAG Principles for OHD Projects

1. **Perceivable**
   - Provide text alternatives for audio content
   - Create captions and transcripts
   - Ensure sufficient color contrast

2. **Operable**
   - Make all functionality available via keyboard
   - Provide sufficient time to read content
   - Avoid content that could cause seizures

3. **Understandable**
   - Make text readable and comprehensible
   - Create predictable navigation
   - Help users avoid and correct mistakes

4. **Robust**
   - Ensure compatibility with assistive technologies
   - Use semantic HTML
   - Test with screen readers and other tools

## Implementing Accessibility in OHD

### Transcript Accessibility

1. **Structured Content**
   - Clearly identify speakers
   - Use proper punctuation
   - Break content into logical paragraphs
   - Include contextual information

2. **Handling Non-Verbal Elements**
   - Describe significant sounds: `[laughter]`, `[applause]`
   - Note emotional responses: `[voice breaking]`, `[excited]`
   - Include contextual information: `[shows photograph]`

3. **Timestamp Formatting**
   - Use consistent, recognizable format: `[00:05:30]`
   - Ensure proper labeling for screen readers

### Media Accessibility

1. **Audio Descriptions**
   - Provide descriptive text for visual elements in videos
   - Include contextual information about setting, participants, etc.

2. **Captions and Subtitles**
   - Create accurate, synchronized captions for videos
   - Include speaker identification and non-speech information
   - Consider implementing WebVTT format:

   ```
   WEBVTT

   00:00:00.000 --> 00:00:04.000
   [Interviewer] Could you tell us about your early experiences?

   00:00:05.000 --> 00:00:15.000
   [Subject] I first arrived in the town in 1965. [pause] It was quite different then.
   ```

3. **Transcript Synchronization**
   - Ensure timestamps in transcripts match media precisely
   - Test navigation controls with keyboard only

### Visual Interface Accessibility

1. **Visualization Color Schemes**
   - Ensure sufficient contrast between tag colors
   - Avoid relying solely on color to convey information
   - Provide alternative text descriptions of visualizations

   ```css
   /* Example of high contrast tag colors */
   .tag-education {
     background-color: #003366;
     color: #ffffff;
   }
   .tag-family {
     background-color: #990000;
     color: #ffffff;
   }
   ```

2. **Keyboard Navigation**
   - Ensure all interactive elements are keyboard accessible
   - Implement logical tab order
   - Provide visible focus indicators

3. **Screen Reader Support**
   - Add ARIA labels to interactive elements
   - Test with popular screen readers (NVDA, JAWS, VoiceOver)
   - Example ARIA implementation:

   ```html
   <button 
     class="tag-filter" 
     data-tag="education" 
     aria-pressed="false"
     aria-label="Filter transcript by education topics">
     Education
   </button>
   ```

### Navigation and Site Structure

1. **Semantic HTML**
   - Use proper heading hierarchy (h1, h2, h3)
   - Implement landmark regions (main, nav, header, footer)
   - Create descriptive link text

2. **Skip Navigation**
   - Add skip links for keyboard users
   - Example implementation:

   ```html
   <a href="#main-content" class="skip-link">Skip to main content</a>
   ```

3. **Breadcrumb Navigation**
   - Help users understand their location
   - Provide clear pathways back to collection indexes

## Testing Accessibility

### Automated Testing

Use these tools for initial testing:

1. [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
2. [axe DevTools](https://www.deque.com/axe/)
3. Lighthouse in Google Chrome

### Manual Testing

1. **Keyboard Navigation Test**
   - Navigate entire site without mouse
   - Verify all functions are accessible
   - Check for visible focus indicators

2. **Screen Reader Testing**
   - Test with at least one screen reader
   - Verify transcript navigation is accessible
   - Ensure visualizations have text alternatives

3. **User Testing**
   - Invite users with disabilities to test your site
   - Gather feedback on usability challenges
   - Implement improvements based on feedback

## Resources

1. **Guidelines and Standards**
   - [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
   - [Section 508 Standards](https://www.section508.gov/)
   - [Oral History Association Accessibility Guidelines](https://www.oralhistory.org/accessibility-practices-for-interviews/)

2. **Testing Tools**
   - [WAVE Accessibility Tool](https://wave.webaim.org/)
   - [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - [Accessibility Insights](https://accessibilityinsights.io/)

3. **Educational Resources**
   - [WebAIM Articles and Resources](https://webaim.org/articles/)
   - [A11Y Project](https://www.a11yproject.com/)
   - [Digital Library Federation Accessibility Working Group](https://www.diglib.org/groups/accessibility/)