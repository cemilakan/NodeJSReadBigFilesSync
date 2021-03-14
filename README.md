# NodeJSReadBigFilesSync
How did I handle huge (6GB) file with Node.js without getting the "JavaScript heap out of memory" error?  
As known Node can hold up to 1.5GB in memory at one time but not more

### Requireds
- Readline  
  `const readline = require('readline');`
- Stream  
  `const stream = require('stream');`
- File system  
  `const fs = require('fs');`
