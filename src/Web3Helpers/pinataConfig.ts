import { PinataSDK } from "pinata-web3";

export const pinata = new PinataSDK({
    pinataJwt: import.meta.env.VITE_PUBLIC_PINATA_JWT,
    pinataGateway: import.meta.env.VITE_PUBLIC_PINATA_GATEWAY,
});
