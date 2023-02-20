self.addEventListener("install", (ev) => {
  console.log("sw install");
});

self.addEventListener("activate", (ev) => {
  console.log("sw activate");
});
