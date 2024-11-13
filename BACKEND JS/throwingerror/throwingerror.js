const price = 100;
const paid = 80;

if (paid < price) {
  throw new Error('Pembayaran kurang');
}