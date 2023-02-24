const Caver = require('caver-js');
const caver = new Caver('https://public-node-api.klaytnapi.com/v1/baobab');
const dotenv = require('dotenv').config();

async function main() {
    const account = caver.klay.accounts.wallet.add(process.env.private_key);
    caver.klay.sendTransaction({
        type: 'VALUE_TRANSFER',
        from: account.address,
        to: '0x0000000000000000000000000000000000000000',
        gas: '300000',
        value: caver.utils.toPeb('0.01', 'KLAY'),
      }).then(console.log);
}
main()