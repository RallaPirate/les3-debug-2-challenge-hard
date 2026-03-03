README.md

Debug Challenge - Hard Mode
--------------------------------
Bug fixes: 
1.missing dependency, manual added: npm install clsx (not worth a prompt)
2.import next/server instead of next/servers (manual fix, not worth a prompt)
3.dashboard useEffect returned a Promise, which is not allowed. Fixed by debugging mode prompt in Agent.
4.dashboard useEffect dependency caused infinite loop. Fixed by removing the dependency - same debugging mode prompt in Agent as bug 4 fixed this.
5.blogPreview slice feature was not working. Fixed by debugging mode prompt in Agent.
6.star icon was not mapped (manual fix, not worth a prompt)
7.hardcoded display: 'none' in header in the mobile hamburger <button> and the truthy/falsy {openMenu && ...} fixed into display on mobile screens ONLY using agent (not debugging mode)
7B. Hid the desktop nav in the header when used on mobile screen fixed by using agent (not debugging mode)
8 Narrowed the type for TypeScript in QuoteOfTheDay (fix by prompting Agent)
9.CSS custom classes in global replaced by Tailwind Utility classes in components
10 - 12. inline styles replaced by Tailwind CSS