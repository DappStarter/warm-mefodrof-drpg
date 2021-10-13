require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food stone rebel rural mixture hunt cover army gas'; 
let testAccounts = [
"0x1161131f04987b6cf46708b16274fd5a09d9ad99d2226d96af6e23263cfd3398",
"0x624bebbdc13be1f9f6e99b288a6620451477966ba49dc7c5c1125d10bed55ae5",
"0x662555589adf0acac2d169e5cd9e8f98da3b0e637afae45202ec339d62e600cc",
"0x78365ba61dfef1aa46ce79fd5ce8fa92ab43cbe0ca169c026adb1b151138ebc6",
"0x43706abe534c04cce93bfc6ee242e90509fa942ee007457425419a73508782fe",
"0xd42c46264c87bfbc6f381da23ff1f68a2f3029226becb3cc311d837efa5211a6",
"0x3a9d681d982eaca1705dafcd2980f1c986ed4d02b83e7063b5c2065001f08531",
"0x32f4d11f6942178621914dff9fbff85f78bce74767ec392335ce8ffb655b7d54",
"0xa917918d4b18dab9f35de7ad23ae460830e0fe6efe08f5e1cab0766acc001e68",
"0xae6fc890dabc27da8e441849773fa11ae2b85c5dc4aba0e1834b0e2ab1b0fae9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

