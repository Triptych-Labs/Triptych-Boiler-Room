# vendor

such in case of metaplex candy machine, we would rather reimport the source then reimplement new versions.

the intent is to automate cloning its git repo into `./vendor` as is.

there is a patch to remove the modal background and implement an id to style.

```patch
--- Home.tsx	2022-06-04 23:22:31.000000000 -0400
+++ cmui/Home.tsx	2022-06-04 23:24:24.000000000 -0400
@@ -480,10 +480,10 @@
     <Container style={{ marginTop: 100 }}>
       <Container maxWidth="xs" style={{ position: 'relative' }}>
         <Paper
+          id="cmui-modal"
           style={{
             padding: 24,
             paddingBottom: 10,
-            backgroundColor: '#151A1F',
             borderRadius: 6,
           }}
         >
```
