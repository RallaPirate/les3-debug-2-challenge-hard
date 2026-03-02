README.md

Debug Challenge - Hard Mode
--------------------------------
Bug fixes: 
1.missing dependency, manual added: npm install clsx (not worth a prompt)
2.import next/server instead of next/servers (manual fix, not worth a prompt)
3.dashboard useEffect returned a Promise, which is not allowed. Fixed by debugging mode prompt in Agent.
4.dashboard useEffect dependency caused infinite loop. Fixed by removing the dependency - same debugging mode prompt in Agent as bug 4 fixed this.
5.blogPreview slice feature was not working. Fixed by debugging mode prompt in Agent.
