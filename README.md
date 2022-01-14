# Gro Frontend Task

Gro Contract Address Ropsten = 0x2F2D500D025168F99342C4170bC741742E954DFa

### TEST PART ONE - INTERACTING WITH METAMASK
----

Note:
Web3.js is a library used to interact with an Ethereum node whether local or remote. We use it to talk to a MetaMask wallet in the user’s browser. This communication needs to handle errors, success and loading events. The user might try to execute multiple transactions that each depend on the outcome of the previous transaction.

Task:
1. Create a basic UI consisting of a Button, and a Text component. This ideally would be done using React but you can use other frameworks or vanilla JS/TS.
2. Write a function to query the Ropsten ETH (rETH) balance from your MetaMask wallet.
3. When the Button is pressed, the function in step (2) should be called, the Text component updated with the rETH Balance

### TEST PART TWO - INTERACTING WITH ON-CHAIN CONTRACTS
----

Task:
1. Build on the previous task and add another Button and Text component.
2. Write a function that querys the Gro Smart Contract's getMessage() function, this should return a string message.
3. Display the return value from the function in step (2) when the second Button is pressed updating the new Text component with
the message.

---

Tips:
- Whilst you don't need Ropsten ETH (rETH) for the task, this can be obtained via public faucets (you can google for these).
- The ABI for the smart contract is available in this repository.

---

### Submission

Please email back a link to the public repository of your code for the tasks above with instructions on how to
run the source code locally or you can deploy your frontend online using something like surge for free.
