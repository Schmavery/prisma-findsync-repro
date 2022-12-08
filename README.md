# prisma-findsync-repro

```
schmavery@desktop:~/git/prisma-findsync-repro (main) $ yarn dev
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully in 417 ms (147 modules)
wait  - compiling...
event - compiled successfully in 24 ms (119 modules)
wait  - compiling...
event - compiled successfully in 15 ms (28 modules)
wait  - compiling /_error (client and server)...
event - compiled client and server successfully in 75 ms (148 modules)
warn  - Fast Refresh had to perform a full reload due to a runtime error.
wait  - compiling / (client and server)...
event - compiled client and server successfully in 129 ms (185 modules)
error - Error: ENOENT: no such file or directory, open '/home/schmavery/git/prisma-findsync-repro/.yarn/unplugged/@prisma-client-virtual-6f7a643e8f/schema.prisma'
    at Object.openSync (node:fs:591:3)
    at NodeFS.openSync (/home/schmavery/git/prisma-findsync-repro/.pnp.cjs:2615:24)
    at makeCallSync.subPath.subPath (/home/schmavery/git/prisma-findsync-repro/.pnp.cjs:4671:26)
    at ZipOpenFS.makeCallSync (/home/schmavery/git/prisma-findsync-repro/.pnp.cjs:5302:14)
    at ZipOpenFS.openSync (/home/schmavery/git/prisma-findsync-repro/.pnp.cjs:4670:17)
    at VirtualFS.openSync (/home/schmavery/git/prisma-findsync-repro/.pnp.cjs:4258:24)
    at PosixFS.openSync (/home/schmavery/git/prisma-findsync-repro/.pnp.cjs:4258:24)
    at NodePathFS.openSync (/home/schmavery/git/prisma-findsync-repro/.pnp.cjs:4258:24)
    at Object.readFileSync (node:fs:459:35)
    at NodeFS.readFileSync (/home/schmavery/git/prisma-findsync-repro/.pnp.cjs:2910:24) {
  errno: -2,
  syscall: 'open',
  path: '/home/schmavery/git/prisma-findsync-repro/.yarn/unplugged/@prisma-client-virtual-6f7a643e8f/schema.prisma',
  clientVersion: '4.7.1',
  page: '/'
}
```
