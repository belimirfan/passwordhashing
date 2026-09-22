const bcrypt = require("bcrypt");

async function main() {
  let password = "mypass";

  // Hash the password
  let hashedPassword = await bcrypt.hash(password, 8);

  console.log("Original Password:", password);
  console.log("Hashed Password:", hashedPassword);
  console.log("Changes from github");
}

main();
