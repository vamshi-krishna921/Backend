const event = require("events");
const { emit } = require("process");
const emitter = new event();

const triggerEvents = {
  userLogin: 0,
  userPurchase: 0,
  profileUpdate: 0,
  userLogout: 0,
};

emitter.on("userLogin", (userName) => {
  triggerEvents.userLogin++;
  console.log(`${userName} logged in.`);
});

emitter.on("userPurchase", (userName, thing) => {
  triggerEvents.userPurchase++;
  console.log(`${userName} purchased ${thing}`);
});

emitter.on("profileUpdate", (name) => {
  triggerEvents.profileUpdate++;
  console.log(name);
});

emitter.on("userLogout", (userName) => {
  triggerEvents.userLogout++;
  console.log(`${userName} logged out.`);
});

emitter.on("summary", () => {
  console.log(triggerEvents);
});

emitter.emit("userLogin", "Ramu");
emitter.emit("userPurchase", "Ramu", "Laptop");
emitter.emit("profileUpdate", "Raghu");
emitter.emit("userLogout", "Ramu");
emitter.emit("summary");
