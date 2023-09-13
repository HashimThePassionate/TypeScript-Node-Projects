import inquirer from 'inquirer';
// Function to generate random alphanumeric string of a specified length
const generateRandomAlphaNumeric = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};
// Function to generate a random number within a specified range
const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Function to generate a random financial amount as a string
const generateRandomAccountBalance = (): string => {
  const minBalance = 100;
  const maxBalance = 10000;
  const decimalPlaces = 2;
  const randomBalance = (Math.random() * (maxBalance - minBalance) + minBalance).toFixed(decimalPlaces);
  return randomBalance;
};
// Function to generate random user data
const generateRandomUser = () => ({
  userId: generateRandomAlphaNumeric(6),
  userPin: generateRandomNumber(1000,9999),
  accountBalance: generateRandomAccountBalance(),
});
// Generate a random user
const randomUser = generateRandomUser();
// Function for user authentication
const authenticateUser = async () => {
  console.log('Welcome to the ATM.');

  const { userId, userPin } = await inquirer.prompt([
    {
      type: 'input',
      name: 'userId',
      message: 'Enter your User ID:',
    },
    {
      type: 'input',
      name: 'userPin',
      message: 'Enter your User PIN:',
    },
  ]);

  if (userId === randomUser.userId && parseInt(userPin) === randomUser.userPin) {
    console.log('Authentication successful!');
    // Proceed to ATM functionalities
    showAccountBalance(randomUser.accountBalance);
  } else {
    console.log('Authentication failed. Please try again.');
  }
};

// Function to display account balance
const showAccountBalance = (balance: string) => {
  console.log(`Your account balance is $${balance}`);
};

// Call the authentication function to start the process
authenticateUser();
