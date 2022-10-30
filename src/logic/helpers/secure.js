import CryptoJS from 'crypto-js';

const key = process.env.ANSWER_KEY ?? 'simpleLocalKey'

export const encrypt = (data) => CryptoJS.AES
  .encrypt(data.toString(), key)
  .toString();

export const decrypt = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, key)
  return bytes.toString(CryptoJS.enc.Utf8);
}