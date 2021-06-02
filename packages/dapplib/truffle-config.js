require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note pulse comic hunt perfect sun toss'; 
let testAccounts = [
"0x170fd91924ce38ca229661301071318c152810e2ab2fce5f916aa21419b956a2",
"0x8cac4179c72f7e116be1c336ad8322ff629cc81cae74b085ceb0c6f0a55c9426",
"0x2aaf642ac559d400e82934dd0061e4bd3a32ba95466602b32fa560543cd70984",
"0xe23d590bc11e3493527a8dae2900b6c2c792bef0085df8260a9e8a729581f66a",
"0x8908936bf296927a0d0b60c3b3e9e150400bf612c926e7f464edfe01b354e683",
"0x9278b5f38e8739e07c08a9a6a7f73f5f431cc1c736a6f3b7f7ae17d8d32c3229",
"0x6b4ecc1a823315d737edb50c609696a3c4d51c1c23c7f041e474fab40a5188ba",
"0x71adee15c9f088f0a13b7f76194178a38a0510fcbb55bb713c88feed19c3425a",
"0xf13d88359b3987d8f70e708ca3e20066b239ff34ffdf8494027d650729bc6b57",
"0x57ef92296a02abcfa0f25c29f8bd1440f516f020d11b8010f170f5bdfe454d60"
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

